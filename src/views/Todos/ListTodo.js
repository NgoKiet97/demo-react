import React from "react";
import "./ListToDo.scss";
import AddTodo from "./AddTodo.js";
import { toast } from 'react-toastify';


class ListTodo extends React.Component {

    state = {
        listToDo: [
            // { toDoId: 'todo1', task: 'gaming demo' },
            // { toDoId: 'todo2', task: 'study demo' },
            // { toDoId: 'todo3', task: 'music demo' }
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listToDo: [...this.state.listToDo, todo]
        })
    }

    handleOnClickDelete = (itemTodo) => {
        let currentListTodo = this.state.listToDo;
        currentListTodo = currentListTodo.filter(item => item.toDoId !== itemTodo.toDoId);
        this.setState({
            listToDo: currentListTodo
        })
        toast.info("Delete task successfully!")

    }

    handleOnClickEdit = (itemTodo) => {

        let isEmptyEditTodo = Object.keys(this.state.editTodo).length === 0;
        let {editTodo} = this.state;

        if (!isEmptyEditTodo && itemTodo.toDoId === editTodo.toDoId) {
            let listToDoCopy = this.state.listToDo;
            let index = listToDoCopy.findIndex((item => item.toDoId === itemTodo.toDoId));
            listToDoCopy[index].task = editTodo.task;
            this.setState({
                listToDo: listToDoCopy,
                editTodo: {}
            })

            toast.success("Update task successfully!")

            return
        }

        this.setState({
            editTodo: itemTodo
        })

        console.log(">>> check click save btn", this.state.listToDo)


    }

    handleOnChangeEdit = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.task = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {

        let { listToDo, editTodo } = this.state;
        let isEmptyEditTodo = Object.keys(editTodo).length === 0;

        return (
            <div className="To-do-app">

                <AddTodo
                    addNewTodo={this.addNewTodo}
                />

                <div className="list-to-do">
                    {listToDo && listToDo.length > 0
                        ?
                        listToDo.map((item, index) => {
                            return (
                                <div key={item.toDoId} className="to-do-item">
                                    {!isEmptyEditTodo && item.toDoId === editTodo.toDoId
                                        ?
                                        <div>
                                            <input type="text"
                                                value={editTodo.task}
                                                onChange={(event) => this.handleOnChangeEdit(event)} />
                                        </div>
                                        :
                                        <div >
                                            <span>{index + 1} - {item.task}</span>
                                        </div>
                                    }

                                    <div className="btn-to-do-item">
                                        <button
                                            className="btn-edit"
                                            onClick={() => this.handleOnClickEdit(item)}>
                                            {!isEmptyEditTodo && item.toDoId === editTodo.toDoId
                                                ?
                                                "save"
                                                :
                                                "edit"
                                            }
                                        </button>

                                        <button
                                            className="btn-delete"
                                            onClick={() => this.handleOnClickDelete(item)}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <div className="non-todo">You don't have any tasks!</div>
                    }
                </div>

            </div>
        )
    }

}

export default ListTodo;