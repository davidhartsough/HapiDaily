import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

const goals = JSON.parse(window.localStorage.getItem("goals"));
const impacts = JSON.parse(window.localStorage.getItem("impacts"));
const people = JSON.parse(window.localStorage.getItem("people"));

const store = createStore(rootReducer, {
  goals: goals && Array.isArray(goals) ? goals : [],
  impacts: impacts && Array.isArray(impacts) ? impacts : [],
  people: people && Array.isArray(people) ? people : []
});

export default ({ children }) => <Provider store={store}>{children}</Provider>;
