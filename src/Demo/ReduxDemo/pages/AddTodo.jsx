import React, {useRef, useState} from "react";
import {connect} from "react-redux";
import {AddTodoAction} from "../actions";

let AddTodo = ({dispatch}) => {

    const inputRef = useRef();
    const [inputValue, setInputValue] = useState('');

    const onAdd = () => {
        dispatch(AddTodoAction(inputValue));
        setInputValue('');
        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            <button onClick={onAdd}>
                Add Todo
            </button>
        </div>
    )
}

AddTodo = connect()(AddTodo);

export default AddTodo;