import React, { Component } from 'react'
import { connect } from 'react-redux'
import Questions from './question'
import Nav from 'react-bootstrap/Nav'



class DashBoard extends Component {
    state = {
        DisplayUnanswer: true
    }
    handleSubNav = () => {
        console.log('Hello')
        
    }
    displayUnanswered =() =>{
        
        this.setState({
            DisplayUnanswer: true
        })
    }
    displayanswered =() =>{
        
        this.setState({
            DisplayUnanswer: false
        })
    }
    render() {
        
        return (
            <div className="DashBoard">

                <div className="panel">
                    <Nav fill variant="tabs" defaultActiveKey="1">
                        <Nav.Item>
                            <Nav.Link eventKey="1" onClick={this.displayUnanswered}>Unanswered Questions</Nav.Link>
                            
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="2" onClick={this.displayanswered}>Answered Questions</Nav.Link>
                        </Nav.Item>

                    </Nav>
                    
                    {this.state.DisplayUnanswer === true 
                    ? this.props.questionsIds.map((id) => (
       
                        
                           <div key={id}>
                               
                            {this.props.questions[id].optionOne.votes.includes(this.props.authedUser) || this.props.questions[id].optionTwo.votes.includes(this.props.authedUser)
                                ? null
                                : <li className="list" key={id}><Questions ids={id} /></li>}
                        </div>
                    ))
                    :this.props.questionsIds.map((id) => (
                        
                      <div key={id}>
                            
                            {this.props.questions[id].optionOne.votes.includes(this.props.authedUser) || this.props.questions[id].optionTwo.votes.includes(this.props.authedUser)
                                ?  <li className="list" key={id}> <Questions ids={id} /></li>
                                :  null}
                        </div>
                    ))}
           
          
   
                    
                </div>
            </div>

        )
    }
}
function mapStateToProps({ questions, authedUser,users }) {

    return {
        questionsIds: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        questions: questions,
        authedUser: authedUser,
        users:users
    }
}
export default connect(mapStateToProps)(DashBoard)