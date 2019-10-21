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
import Error from './Error'
import {Switch} from 'react-router-dom'


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
            
            : <div>
              <Switch>
              <Route path="/" exact component={DashBoard}/>
              <Route path="/question/:id" exact component={QuestionPage}/>
              <Route path="/new" exact component={NewQuestion}/>
              <Route path="/Leaders" exact component={Leader}/>
              <Route path="/Error" exact component={Error}/>
           
              </Switch>
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
