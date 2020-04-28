import React from 'react';
import './App.css';
import { Component } from 'react';
import SideBar from './Components/SideBar/SideBar';
import Titlecard from  './Components/Titlecard/Titlecard';

class App extends Component {
	render() {
		return (
			<div>
				<SideBar />
				<main>
					<Titlecard />
				</main>
			</div>
		)
	}
}

export default App;
