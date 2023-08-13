import React from "react";
import axios from "axios";
import { withRouter } from "react-router";

class UserDetail extends React.Component {

    state = {
        user: {}
    }
    
    componentDidMount(){
        let id = this.props.match.params.id;
        
        axios.get(`https://reqres.in/api/users/${id}`)
            .then(res => {
                console.log(">>> check res:", res)
                this.setState({
                    user : res && res.data ? res.data.data : []
                })
            })
    }

    render(){
        // console.log(">>> check props: ", this.props.match.params.id);
        let {user} = this.state;
        return (
            <>
                <div>List users detail {user.id}</div>
                <div>
                    {user.id}
                </div>
                <div>
                    {user.first_name}
                </div>
                <img src={user.avatar}></img>

            </>
        )
    }
}

export default withRouter(UserDetail);