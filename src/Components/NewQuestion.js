import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'
import {Redirect} from 'react-router-dom'
import {handleAddQuestion} from '../Actions/questions'


class NewQuestion extends Component {
    state = {
        Q1text:'',
        Q2text:'',
        toHome:false
    }
    handleChangeQ1 = (e) => {
        const Q1text = e.target.value
        this.setState(()=>({
            Q1text
        }))
    }
    handleChangeQ2 = (e) => {
        const Q2text = e.target.value
        this.setState(()=>({
            Q2text
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const {Q1text,Q2text} = this.state
        const {dispatch} = this.props

        dispatch(handleAddQuestion(Q1text,Q2text))
       
        this.setState(()=>({
            Q1text:'',
            Q2text:'',
            toHome: true
        }))
    }
    render() {
        const {Q1text,Q2text,toHome} = this.state
        if (toHome === true) {
            return <Redirect to="/"/>
        }
        return (
            
            <div className="NewQuestion">
                <div className="panel">
               <h3>Create a new question</h3>
               <form className="new-question" onSubmit={this.handleSubmit}>
                   <p>Complete the question:</p>
                   <h5>would you rather</h5>
                <input className="ptn" placeholder="Enter Option One Text Here" value={Q1text} onChange={this.handleChangeQ1}></input>
                <p>-----OR----</p>
                <input className="ptn" placeholder="Enter Option Two Text Here" value={Q2text} onChange={this.handleChangeQ2}></input>
                <p></p>
                <Button  type="submit" variant="outline-success" disabled={Q1text ==='' || Q2text ===''} >submit</Button>
               </form>
               </div>
            </div>

        )
    }
}

export default connect()(NewQuestion)