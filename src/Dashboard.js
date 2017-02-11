import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Snackbar from 'material-ui/Snackbar';
import Midterms from './Midterms';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabs: {
        value: 'MIDTERMS'
      },
      snackbar: {
        open: true
      }
    }
  }

  handleTabChange = (value) => {
    this.setState({ tabs: { value } });
  };

  handleSnackbarClose = () => {
    this.setState({ snackbar: { open: false } });
  };

  render() {
    return (
      <div>
        <div>
          <Tabs
            value={this.state.tabs.value}
            onChange={this.handleTabChange}
            >
            <Tab label="COURSEWORK" value="COURSEWORK">
              <h2>Coursework</h2>
            </Tab>
            <Tab label="MIDTERMS" value="MIDTERMS">
              <Midterms credentials={this.props.credentials} />
            </Tab>
            <Tab label="ATTENDANCE" value="ATTENDANCE">
              <h2>Attendance</h2>
            </Tab>
            <Tab label="EXAMS" value="EXAMS">
              <h2>Exams</h2>
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
    );
  }
}

export default Dashboard;