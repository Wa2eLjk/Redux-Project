import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'
import ProgressBar from 'react-bootstrap/ProgressBar'
import './App.css';
class QuestionAnswer extends Component {
    render() {
        const poll = this.props.poll
        
        const q1Votes = poll.optionOne.length
        const q2Votes = poll.optionTwo.length
        const combine = q1Votes + q2Votes
        console.log(poll)
        return (
            <div className="QuestionAnswer">

                <Alert variant="success">
                    <Alert.Heading>Result</Alert.Heading>
                    <p>
                        {poll.OptionOneText}
                    </p>
                    {poll.optionOne.includes(poll.authedUser) ? <p className="Votes">Your Vote</p> : null}
                    <ProgressBar animated now={q1Votes * 10} label={`${q1Votes * 10}%`} />
                    <p>{q1Votes} out of {combine}</p>
                    <hr />
                    <p>
                        {poll.OptionTwoText}
                    </p>
                    {poll.optionTwo.includes(poll.authedUser) ? <p className="Votes">Your Vote</p> : null}
                    <ProgressBar animated now={q2Votes * 10} label={`${q2Votes * 10}%`} />
                    <p>{q2Votes} out of {combine}</p>
                </Alert>

            </div>
        )
    }
}
export default QuestionAnswer