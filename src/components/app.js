import React, { Component } from "react";


import CurrentTry from './currenttry.js';  

import OptionsContainer from './optionsContainer.js';  
import Message from './label.js'; 
 

export default class App extends Component { 
	constructor() {
		super();
		
		var solution = this.generateSolution();
		
		this.state = { 
			message	: 'kaca', 
			curNumberOfTrys: 0,
			numberOfTrys: 5,
			length: 4,
			correct: null,
			doneStatus: null, 
			selectedNumbers:[], 
			solution: solution	
		};
		
		this.restartGame = this.restartGame.bind(this);
			
	};
	
	generateSolution()
	{
		var solution1 = Math.floor((Math.random() * 4) + 1);
		var solution2 = Math.floor((Math.random() * 4) + 1);
		var solution3 = Math.floor((Math.random() * 4) + 1);
		var solution4 = Math.floor((Math.random() * 4) + 1);
		return([solution1,solution2,solution3,solution4])
	}

	writeMessage(sometext)	{
		this.SetState({message:sometext});		
	}
	
	restartGame()
	{
		
		var solution = this.generateSolution();
		
		this.setState({ message	: 'kaca'});
		this.setState({ curNumberOfTrys: 0});
		this.setState({ numberOfTrys: 5});
		this.setState({ length: 4});
		this.setState({ correct: null});
		this.setState({ doneStatus: null}); 
		this.setState({ selectedNumbers:[]}); 
		this.setState({ solution: solution	});
	}
	
    render() {
		var selectedNumbers = this.state.selectedNumbers;
		var message = this.state.solution;
		
		return (
			<div>
				<CurrentTry solution = {this.state.solution}  restartGame={this.restartGame}/>
				
				<div id ="MessageContainer" class = "MessageContainer col-md-12">
					<Message message={message}/>
				 </div>
			 </div>
			);
    }
}