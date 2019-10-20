import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import {handleAddAnswer} from '../Actions/questions'


class QuestionUN extends Component {
    state = {
        Q1text: '',
        Q2text: ''
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        if (this.state.Q1text !== '') {
            dispatch(handleAddAnswer(this.state.Q1text,this.props.poll.id))
        }
        else{
            dispatch(handleAddAnswer(this.state.Q2text,this.props.poll.id))
        }
    }
    handleClick1 = (e) => {
        const Q1textBox = e.target.value
        
        this.setState(() => ({
            Q1text: Q1textBox,
            Q2text:''
        }))
        
    }
    handleClick2 = (e) => {
        const Q2textBox = e.target.value
        this.setState(() => ({
            Q1text:'',
            Q2text: Q2textBox
        }))
        
    }
    render() {
        const poll = this.props.poll
        
        return (
            <div className="QuestionUN">
                <form onSubmit={this.handleSubmit} >
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="react-tips"
                                value="optionOne"
                                className="form-check-input"
                                onClick={this.handleClick1}
                            />
                            {poll.OptionOneText}
                        </label>
                    </div>

                    <h5 id="h5space"> or </h5>

                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                name="react-tips"
                                value="optionTwo"
                                className="form-check-input"
                                onClick={this.handleClick2}
                            />
                            {poll.OptionTwoText}
                     </label>
                    </div>

                    <div id="h5space">
                        <Button variant="primary" type="submit" onClick={this.handleSubmit}>submit</Button>
                    </div>
                    
                </form>
                </div>

          
        )
    }
}
export default connect()(QuestionUN)