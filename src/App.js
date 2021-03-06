import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Login from './Login';
import Dashboard from './Dashboard';
import logo from './guc-logo.png';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      credentials: {
        username: '',
        password: ''
      }
    };

    injectTapEventPlugin();
  }

  setCredentials = (credentials) => {
    this.setState({ credentials });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>GUC Student Portal</h2>
          </div>
          <Router history={browserHistory}>
            <Route path='/' component={(props) => <Login setCredentials={this.setCredentials} {...props} />} />
            <Route path='/dashboard' component={(props) => <Dashboard credentials={this.state.credentials} {...props} />} />
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
