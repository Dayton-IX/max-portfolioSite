import React from 'react';
import './App.css';
import { Component } from 'react';
import SideBar from './Components/SideBar/SideBar';
import Titlecard from  './Components/Titlecard/Titlecard';
import About from './Components/About/About';

class App extends Component {
	render() {
		return (
			<div>
				<SideBar />
				<main>
					<Titlecard />
					<About />
				</main>
			</div>
		)
	}
}

export default App;
