import React from "react";

class AddComponent extends React.Component {

    state = {
        tittle: "",
        salary: ""
    }
    
    handleOnChangeTittle = (event) => {
        this.setState({
            tittle: event.target.value
        })
    }

    handleOnChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()

        if(!this.state.tittle || !this.state.salary){
            alert("Mising required params")
            return;
        }

        // alert("click me")
        console.log(">>> Check Data Input: ", this.state)

        this.props.addNewJob({
            id: Math.floor(Math.random() * 100),
            tittle: this.state.tittle,
            salary: this.state.salary
        })

        this.setState({
            tittle: "",
            salary: ""
        })
    }
    
    render() {
        return (
            <>
                <div> Add component </div>

                <form>
                    <label htmlFor="Jname">Job name:</label><br />
                    <input
                        type="text"
                        value={this.state.tittle}
                        onChange={(event) => this.handleOnChangeTittle(event)}
                    />
                    <br />
                    <label htmlFor="Snumber">Salary:</label><br />
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handleOnChangeSalary(event)}
                    />
                    <br /><br />
                    <input type="button" value="submit"
                        onClick={(event) => this.handleOnSubmit(event)}
                    />
                </form>
            </>
        )
    }
}

export default AddComponent;