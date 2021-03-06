import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Snackbar from 'material-ui/Snackbar';
import Coursework from './Coursework';
import Midterms from './Midterms';
import Attendance from './Attendance';
import Exams from './Exams';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabs: {
        value: 'COURSEWORK'
      },
      snackbar: {
        open: true
      }
    }
  }

  componentWillMount() {
    if (!this.props.credentials.username || !this.props.credentials.password) {
      this.props.router.push('/');
    }
  }

  handleTabChange = (value) => {
    this.setState({ tabs: { value } });
  };

  handleSnackbarClose = () => {
    this.setState({ snackbar: { open: false } });
  };

  render() {
    return (this.props.credentials.username && this.props.credentials.password) ? (
      <div>
        <div>
          <Tabs
            value={this.state.tabs.value}
            onChange={this.handleTabChange}
          >
            <Tab label="COURSEWORK" value="COURSEWORK">
              <Coursework credentials={this.props.credentials} />
            </Tab>
            <Tab label="MIDTERMS" value="MIDTERMS">
              <Midterms credentials={this.props.credentials} />
            </Tab>
            <Tab label="ATTENDANCE" value="ATTENDANCE">
              <Attendance credentials={this.props.credentials} />
            </Tab>
            <Tab label="EXAMS" value="EXAMS">
              <Exams credentials={this.props.credentials} />
            </Tab>
          </Tabs>
        </div>
        <div>
          <Snackbar
            open={this.state.snackbar.open}
            message={'Welcome, ' + this.props.credentials.username + '!'}
            autoHideDuration={4000}
            onRequestClose={this.handleSnackbarClose}
          />
        </div>
      </div>
    ) : null;
  }
}

export default Dashboard;