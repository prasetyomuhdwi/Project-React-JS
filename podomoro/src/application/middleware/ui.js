import { PAGE_LOADED } from "../actions/ui";
import * as todosActions from "../actions/todos";
// import * as podomorosActions from "../actions/podomoros";

const pageLoadedFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === PAGE_LOADED) {
      log("page loaded");
      dispatch(todosActions.loadTodos);
    }
    // if (action.type === PAGE_LOADED) {
    //   log("page loaded");
    //   dispatch(podomorosActions.loadPodomoro);
    // }
  };

/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
export default [pageLoadedFlow];
