import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import {handdleSetAuthedUser} from '../Actions/authedUser'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Logo from './React-icon.svg'
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'



class Login extends Component {
    state={
        user:'',
        toHome: false
    }
    handleChange =(e) => {
        
       const userTake = e.target.value
        this.setState(()=>({
            user:userTake
        }))
        
    }
    handleClick = (e) => {
        e.preventDefault()
    
        
        
        this.setState(()=>({
            toHome: true
        }))
        
       
        
        
    }
    render() {
        
        if (this.state.toHome === true) {
            const { dispatch } = this.props
            dispatch(handdleSetAuthedUser(this.state.user))
            return <Redirect to="/"/>
            
        }
        return (
            
            <div className="Login">

                <Jumbotron>
                    <h1>Welcome to the Would you Rather App!</h1>
                    <img src={Logo} alt="Logo"></img>
                    <p>
                        Please Chose a user to Login
                    </p>
                    <div>
                      <select id="SelectUsers" onChange={this.handleChange} defaultValue="1">
                          <option value="1" disabled>Select User</option>
                          <option value="sarahedo">Sarah Edo</option>
                          <option value="tylermcginnis">Tyler McGinnis</option>
                          <option value="johndoe">John Doe</option>
                      </select>
                      </div>
                    <Button variant="outline-success" to="/" onClick={this.handleClick} disabled={this.state.user ===''} className="SignIn">Login</Button>
                </Jumbotron>
            </div>

        )
    }
}
export default connect()(Login)