import { createStore, compose } from "redux";
import rootReducer from "./reducers";
import config from "./config";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import { reactReduxFirebase } from "react-redux-firebase";
import { reduxFirestore } from "redux-firestore";

export default function configureStore(initialState, history) {
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  const createStoreWithMiddleware = compose(
    reactReduxFirebase(firebase, {
      userProfile: "users",
      useFirestoreForProfile: true,
      attachAuthIsReady: true
    }),
    reduxFirestore(firebase),
    typeof window === "object" &&
    typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : f => f
  )(createStore);

  const store = createStoreWithMiddleware(rootReducer);

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
