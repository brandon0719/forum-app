import React, { Fragment, useState } from "react";
import todoService from "../services/todoService";

const EditTodo = ({ todo }) => {
    // edit button function
    const editText = async (id) => {
        try {
            const body = { description };
            const res = todoService.editTodo(body, id);
            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    };

    const [description, setDescription] = useState(todo.description);
    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-warning"
                data-toggle="modal"
                data-target={`#id${todo.todo_id}`}>
                Edit
            </button>
            <div
                className="modal"
                id={`id${todo.todo_id}`}
                onClick={() => setDescription(todo.description)}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Todo</h4>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                onClick={() =>
                                    setDescription(todo.description)
                                }>
                                &times;
                            </button>
                        </div>

                        <div className="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-warning"
                                data-dismiss="modal"
                                onClick={() => editText(todo.todo_id)}>
                                Edit
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                                onClick={() =>
                                    setDescription(todo.description)
                                }>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EditTodo;
