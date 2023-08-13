import React from "react";
import "./Nav.scss"

import {
    Link,
    NavLink
} from "react-router-dom";

class Nav extends React.Component {

    render() {
        return (

            <div className="topnav">
                {/* <NavLink to="/" exact={true} activeClassName="selected">Home</NavLink>
                <NavLink to="/to-do-app" activeClassName="selected">Todo-app</NavLink>
                <NavLink to="/my-component" activeClassName="selected">My-component</NavLink> */}

                <NavLink
                    to="/"
                    exact={true}
                    style={isActive => ({
                        color: isActive ? "green" : "white"
                    })}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/to-do-app"
                    exact={true}
                    style={isActive => ({
                        color: isActive ? "green" : "white"
                    })}
                >
                    Todo-app
                </NavLink>
                <NavLink
                    to="/my-component"
                    exact={true}
                    style={isActive => ({
                        color: isActive ? "green" : "white"
                    })}
                >
                    My-component
                </NavLink>
                <NavLink
                    to="/user"
                    exact={true}
                    style={isActive => ({
                        color: isActive ? "green" : "white"
                    })}
                >
                    User
                </NavLink>

                {/* <Link to="/" exact={true}>Home</Link>
                <Link to="/to-do-app" exact={true}>Todo-app</Link>
                <Link to="/my-component" exact={true}>My-component</Link> */}
            </div>

        )
    }
}

export default Nav;