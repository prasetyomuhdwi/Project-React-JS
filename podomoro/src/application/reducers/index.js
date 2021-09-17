import { combineReducers } from "redux";
import ui from "./ui";
import todos from "./todos";
import podomoros from "./podomoros";

export default combineReducers({
  ui,
  todos,
  podomoros,
});
