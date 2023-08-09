import React from 'react';
import './DemoChildComponent.scss'
import { SassColor } from 'sass';


// ================================ Class Component ==============================================

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        console.log('>>>> check data delete', job)
        this.props.deleteJob(job)
    }

    render() {
        console.log(">>> check props: ", this.props)
        // let name = this.props.name;
        // let age = this.props.age;

        let { name, age, address, arrJobs } = this.props; //Destructuring assignment
        let { showJobs } = this.state;
        return (
            <>
                {/* <div> child component name: {name} - {age} - {address} </div> */}

                {showJobs === false &&
                    <div>
                        <button className='btn-show' onClick={() => this.handleShowHide()}>Show</button>
                    </div>}
                {showJobs &&
                    <>
                        <div className='job-lists'>
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.tittle} - {item.salary} <></> 
                                            <span 
                                                onClick={() => this.handleOnClickDelete(item)}>
                                                    x
                                            </span> 
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}


// ======================== Function Component ===============================================
// const ChildComponent = (props) => {

//     console.log(">>> check child props", props)
//     let {arrJobs } = props; //Destructuring assignment

//     return (
//         <>
//             <div className='job-lists'>
//                 {
//                     arrJobs.map((item, index) => {
//                         if(item.salary >= 500){
//                             return (
//                                 <div key={item.id}>
//                                     {item.tittle} - {item.salary} $
//                                 </div>
//                             )
//                         }

//                     })
//                 }
//             </div>

//         </>
//     )
// }


//=================================================================================================
export default ChildComponent;