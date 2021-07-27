import React from "react";
import AddTodo from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";

const ReduxDemo = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", flexDirection: 'column', alignItems: 'center'}}>
            <AddTodo/>
            <VisibleTodoList/>
        </div>
    )
}

export default ReduxDemo;