import React, { Component } from 'react'
import './App.css'
import { Nav } from './components/Nav'
import { Body } from './components/Body'

class App extends Component {
	render() {
		return (
			<div className="app">
				<Nav />
				<Body />
			</div>
		)
	}
}

export default App
