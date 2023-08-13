import React from "react";
import "./ListUser.scss";
import axios from "axios";
import { withRouter } from "react-router";


class ListUser extends React.Component {

    state = {
        listUsers : []
    }
    
    componentDidMount(){
        axios.get('https://reqres.in/api/users?page=1')
            .then(res => {
                this.setState({
                    listUsers : res && res.data ? res.data.data : []
                })
            })
    }


    // >>>>>>>>>>>>>>>>>>>>> Cách thứ 2 để call API <<<<<<<<<<<<<<<<<<<<<<<<
    // async componentDidMount(){
    //     let res = await axios.get('https://reqres.in/api/users?page=1')
    // }

    handleOnClickDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`)

    }

    render(){

        let {listUsers} = this.state;

        return (
            <>
                <div>List all users </div>
                <div>
                    <div className="user-container">
                        {listUsers && listUsers.length > 0 &&
                            listUsers.map((item, index) => {
                                return (
                                    <div 
                                        className="user-child" 
                                        key={item.id}
                                        onClick={() => this.handleOnClickDetailUser(item)}
                                    >
                                        {index + 1} - {item.first_name} {item.last_name}
                                    </div>
                                )
                            })

                        }
                
                    </div>

                </div>

            </>
        )
    }
}

export default withRouter(ListUser) ;