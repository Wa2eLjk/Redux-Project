import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestions } from '../utils/_Data'

import {Link} from 'react-router-dom'


class Question extends Component {
    ToPoll = (e, id) => {
        e.preventDefault()
        //todo: redirect to question
    }
    render() {
        const question = this.props


        const Q1Text = question.question.optionOne.text
        const Q2Text = question.question.optionTwo.text
        const QId = question.question.id
        const name = question.question.name
        const avatar = question.question.avatar

        

        if (question === null) {
            return <p>this question does not exist</p>
        }

        return (

            <div className="Question">
                
                    
                    <img
                src={avatar}
                alt="getimage"
                ></img>
                    <div className="question-info">


                        <div className="username">
                            {name} asks
                    </div>
                        <h5>Would you rather</h5>
                        <div className="question">
                            {Q1Text}
                            <p>or</p>
                            {Q2Text}
                        </div>
                        <hr/>
                        <Link variant="outline-success" to={`./question/${QId}`}>View Poll</Link>
                        <hr/>
                    </div>

                </div>
            

        )
    }
}
function mapStateToProps({ authedUser, users, questions }, { ids }) {

    const question = questions[ids]

    return {
        authedUser,
        question: formatQuestions(question, users[question.author], authedUser, question.optionOne, question.optionTwo)

    }
}
export default connect(mapStateToProps)(Question)