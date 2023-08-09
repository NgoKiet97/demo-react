import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component{

    // state = {
    //     name: "",
    //     age: ""
    // }
    
    // handleOnChangeName = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }

    // handleClickButton = () => {
    //     alert("click me")
    // }
 
    state = {
        arrJobs: [
            {id: 'Job1', tittle: 'dev', salary: '1000'},
            {id: 'Job2', tittle: 'tester', salary: '400'},
            {id: 'Job3', tittle: 'PM', salary: '2000'}
        ]
    }

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job] //spread syntax
        })
    }

    deleteJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJob
        })
    }

    // handleOnChangeFirstName = (event) => {
    //     this.setState({
    //         firstName: event.target.value`
    //     })
    // }

    // handleOnChangeLastName = (event) => {
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }

    // handleOnSubmit = (event) => {
    //     event.preventDefault()
    //     // alert("click me")
    //     console.log(">>> Check Data Input: ", this.state)
    // }

    render(){
        // let name = "dev"
        return (
            <>
                <AddComponent 
                    addNewJob={this.addNewJob}
                />
                 

                <ChildComponent 
                    name={"KIET"}
                    age={"27"}
                    address={"Binh Dinh"}     
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}           
                />


                {/* /* <div className='first'> 
                    <input value={this.state.name} type="text" 
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    hello my Component {this.state.name}
                </div>
                <div className='second'> 
                    day la div thu hai
                </div>  

                <div className='third'> 
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div> */}
            </>
        )
    }
}

export default MyComponent;