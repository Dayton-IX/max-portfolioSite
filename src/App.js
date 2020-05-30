import React from 'react';
import './App.css';
import { Component } from 'react';
import SideBar from './Components/SideBar/SideBar';
import Titlecard from  './Components/Titlecard/Titlecard';
import About from './Components/About/About';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';
import { BrowserRouter, Route } from 'react-router-dom';
import Uses from './USES/Uses';
import Covid from './COVID/COVID';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<SideBar />
				<main>
					<Route path='/' exact render={() => (
						<div>
							<Titlecard />
							<About />
							<Work />
							<Contact />
						</div>
					)}/>
					<Route path='/uses' render={() => <Uses />} />
					<Route path='/covid19-tracker' render={() => <Covid />} />
				</main>
			</BrowserRouter>
		)
	}
}

export default App;
