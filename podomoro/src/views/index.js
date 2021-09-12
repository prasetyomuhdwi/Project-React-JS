import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pageLoaded } from "../application/actions/ui";
import { getLoading } from "../application/selectors/ui";
import Header from "./Header/Header";
import Podomoro from "./Podomoro/Podomoro";
import ToDoList from "./Todolist/ToDoList";
// import { getTodos } from "../application/selectors/todos";
// import { putTodo } from "../application/actions/todos";
import "./index.css";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {
  // const todos = useSelector(getTodos);
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);
  useEffect(() => {
    dispatch(pageLoaded);
  }, [dispatch]);
  return (
    <div className="app">
      <div className="content">
        <Header />
        {loading ? (
          "Loading todos..."
        ) : (
          <div className="main">
            <Podomoro />
            <ToDoList />
          </div>
        )}
        <div className="footer center">
          <p>footer</p>
        </div>
      </div>
    </div>
  );
};
