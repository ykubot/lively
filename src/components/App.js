import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import 'bulma/css/bulma.css';

// Pages
import LandingPage from './LandingPage';
import VideoChatPage from './VideoChatPage';

// Constants
import * as routes from '../constants/routes';

class App extends Component {

	componentDidMount() {
		console.log('App componentDidMount()');
	}

	render() {
		return (
			<Router>
				<React.Fragment>
					<Switch>
						<Route exact path={routes.LP} component={() => <LandingPage />} />
						{/* <Route exact path={routes.VideoChatPage} component={() => <VideoChatPage />} /> */}
						<Route exact path={routes.VIDEO_CHAT_ROOM_ID} component={(props) => <VideoChatPage {...props} />} />

						{/* <Route exact path="*" status={404} component={NotFound} /> */}
					</Switch>
				</React.Fragment>
			</Router>
		);
	}
}

export default App;
