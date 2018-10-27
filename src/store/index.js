import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store";

const initialState = window.__INITIAL_STATE__ || {
  firebase: { authError: null }
};
const store = configureStore(initialState);

export default props => <Provider store={store}>{props.children}</Provider>;
