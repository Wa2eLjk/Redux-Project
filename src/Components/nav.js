import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {handdleunSetAuthedUser} from '../Actions/authedUser'

class Nav extends Component {
    logout = (e) => {
        e.preventDefault()
        
        const{ dispatch} = this.props
        const authedUser = null
        dispatch(handdleunSetAuthedUser(authedUser))
    }

    
    render() {
        const auth = this.props.authedUser


        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">



                <ul className="nav navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/" exact activeClassName="active">
                            Home
                         </NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/new" exact activeClassName="active">
                            NewQuestion
                         </NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/Leaders" exact activeClassName="active">
                            LeaderBoard
                         </NavLink>
                    </li>
                    

                        {auth === null || auth === ''
                            ? null
                            :<li  className="nav-item active"><p className="nav-link"> Hello,  {this.props.users[auth].name}    <button type="button" className="btn btn-light" onClick={this.logout}>Logout</button></p>
                                </li>
                               
                             }

                    
                    
                </ul>


            </nav>
        )
    }
}
function mapStateToProps({ authedUser, users }) {

    return {
        authedUser,
        users

    }


}
export default connect(mapStateToProps)(Nav)