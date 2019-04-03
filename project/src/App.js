import React, { Component } from 'react';
import Header from "./Components/Header";
import Home from "./Routes/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Teams from "./Routes/Teams";

const TeamRoute = (props) => (
 <Teams id={props.match.params.id}/>
);

class App extends Component {
	render() {
		return (
				<Router>
					<Header/>
					<Switch>
						<Route exact path="/" component={() => <Home/>}/>
						<Route path="/teams/:id?" component={TeamRoute}/>
					</Switch>
				</Router>
		);
	}
}

export default App;

