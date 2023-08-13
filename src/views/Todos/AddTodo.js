import React from "react";
// import "./ListToDo.scss";
import { toast } from 'react-toastify';


class AddTodo extends React.Component {

    state = {
        todo: ''
    }

    handleOnChange = (event) => {

        this.setState({
            todo: event.target.value
        })

        console.log(">>> Check on change: ", this.state.todo)

    }

    handleOnSubmit = (event) => {
        event.preventDefault()

        if(!this.state.todo){
            toast.info("Mising required params")
            // alert("Mising required params")
            return;
        }

        this.props.addNewTodo({
            toDoId: Math.floor(Math.random() * 100), 
            task: this.state.todo 
        })

        toast.success("Add task successful")

        this.setState({
            todo: ''
        })
    }

    render() {

        return (
            <div className="To-do-app">
                <div className="add-to-do">
                    <input 
                        type="text"
                        value={this.state.todo} 
                        onChange={(event) => this.handleOnChange(event)}
                    />
                    <input type="button" value="Add"
                        onClick={(event) => this.handleOnSubmit(event)}
                    />
                </div>
            </div>
        )
    }

}

export default AddTodo;