import React, { Component } from 'react'
import './App.css';
//import Sidebar from './Component/Sidebar/Sidebar'
import Introduction from './Component/Introduction/Introduction'
import About from './Component/About/About'
//import Projects from './Component/Projects/Projects'
//import Blog from './Component/Blog/Blog'


class App extends Component {
	render() {
		return (
			<div id="colorlib-page">
				<div id="container-wrap">
	
					<div id="colorlib-main">
						<Introduction></Introduction>
						<About></About>
				
			
					</div>
				</div>
			</div>

		);
	}
}

export default App;



