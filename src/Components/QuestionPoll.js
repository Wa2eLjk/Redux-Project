import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionUN from './QuestionUN'
import QuestionAnswer from './QuestionAnswer'
import {Redirect} from 'react-router-dom'

class QuestionPage extends Component {
    render() {
     
        const poll = this.props
        if(poll.id === 'error'){
            return <Redirect to="/Error"/>
        }
        return (
            <div className="QuestionPage">
                 <img
                src={poll.user.avatarURL}
                alt="getimage"
                ></img>
                <div className="question">
                   Asked By {poll.user.name} 
                    <h5>Would you rather</h5>
                    {poll.optionOne.includes(poll.authedUser) || poll.optionTwo.includes(poll.authedUser) ? <QuestionAnswer poll={poll}/> :<QuestionUN poll={poll}/>}
                   
                </div>
                
            </div>
        )
    }
}
function mapStateToProps({ authedUser, questions, users }, props) {
    const { id } = props.match.params
    if(questions[id] === undefined)
   {
       return{
           id:'error'
       }
   }
   else{
        const OptionOne = questions[id].optionOne
        const OptionTwo = questions[id].optionTwo
        // 
        // console.log(users[questions[id].author])
        return {
            id,
            optionOne: OptionOne.votes.length === 0
            ? []
            :OptionOne.votes,
            OptionOneText: questions[id].optionOne.text,
            OptionTwoText: questions[id].optionTwo.text,
            optionTwo: OptionTwo.votes.length === 0
            ? []
            :OptionTwo.votes,
            user: users[questions[id].author],
            users,
            authedUser

        }
    }
}
export default connect(mapStateToProps)(QuestionPage)