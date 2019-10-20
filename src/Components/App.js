import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import './App.css';
import { connect } from 'react-redux'
import { handleInitialData } from '../Actions/shared'
import DashBoard from './DashBoard'
import LoadingBar from 'react-redux-loading'
import Nav from './nav'
import NewQuestion from './NewQuestion';
import QuestionPage from './QuestionPoll'
import Leader from './Leader'



class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData(this.props.authedUser))
  }
  render() {
    
    return (
      <Router>
        <div className="app">
          <LoadingBar />
          <Nav />
          {this.props.loading === true
            ? <Login/>
            // : <QuestionPage match={{params: {id:'vthrdm985a262al8qx3do'}}} />
            : <div>
              <Route path="/" exact component={DashBoard}/>
              <Route path="/question/:id" exact component={QuestionPage}/>
              <Route path="/new" exact component={NewQuestion}/>
              <Route path="/Leaders" exact component={Leader}/>
            </div>
          }

        </div>
      </Router>

    )
  }
}
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
    authedUser
    
  }
}
export default connect(mapStateToProps)(App);
