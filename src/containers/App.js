import React, {Component} from 'react';
import CardList from '../components/CardList';
// import {robots} from '../robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';



class App extends Component{

	// gia na dimiourgisoume ena state xreiazomaste na dimiourgisoume constructor pou orizoume ta states kai na einai class

	constructor(){
		//super giati kanei extends to class component pou exei constructor
		super()
		this.state ={
			robots:[],
			searchfield: ''
		}
	}

	//is a react function which runs on the page load (after render).
	componentDidMount(){
		// ajax call (http) request in API
		fetch('https://jsonplaceholder.typicode.com/users')

			//convert the http/ajax response in json
		.then(response => response.json())
		//update the state of robots with the new json
		.then(users =>this.setState({robots:users}));		
	}

	//dimiourgoume ena event / function pou allazei to searchfield (kanontas setstate) kathe fora pou ginetai triggered
	onSearchChange = (event) => {

		this.setState({searchfield:event.target.value})			
	}

	render(){

		//dimiourgoume ena constant / array pou filtrarei ta robots kai epistrefei to onoma pou kanei include() sto searchfield
		const filteredRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})		
			//stelnoume san props sto searchbox to function pou dimiourgisame (onsearchchange)
			//kai sto cardlist to kainourgeio array pou allazei me vash to search kai to triggered.
		return (
			<div>
				<h1 className='headermain'>RoboFriends</h1>				
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
	    );
	}
	
}

export default App;