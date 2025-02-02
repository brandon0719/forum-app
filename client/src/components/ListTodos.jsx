import React, { Fragment, useState, useEffect } from "react";
import EditTodo from "./EditTodo";
import todoService from "../services/todoService";

const ListTodos = () => {
    const [todos, setTodos] = useState([]);
    // Delete todo function

    async function deleteTodo(id) {
        try {
            const res = todoService.deleteTodo(id);
            setTodos(todos.filter((todo) => todo.todo_id !== id));
        } catch (error) {
            console.error(error.message);
        }
    }

    async function getTodos() {
        const res = await fetch("http://localhost:8000/todos");
        const todoArray = await res.json();
        setTodos(todoArray);
    }

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <Fragment>
            {" "}
            <table className="table mt-5">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td><EditTodo todo={todo}/></td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteTodo(todo.todo_id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListTodos;
