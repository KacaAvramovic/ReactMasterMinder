import React, { Component } from "react";  

import OptionsContainer from './optionsContainer.js';  
import Icon from './icon.js';  
import HistoryTries from './historitries.js';  
import Message from './label.js'; 

import Try from './try.js';  


export default class CurrentTry extends Component { 
	constructor() {
		super();
		
		this.state = { 
			currentTry: [],
			currentTryNo: 0,
			correct: null, 
			length: 4, 
			placeholders:[], 
			historyTries: [],
			historyChecks: [],
			inplace: 0, 
			incolor: 0, 
			message: ""
		};
		
		this.selectElement = this.selectElement.bind(this);
		this.restartGame = this.restartGame.bind(this);
		this.removeElement = this.removeElement.bind(this);
		this.check = this.check.bind(this);
	};
	
	
	
	createElement(type){			
		return(<Icon type={type} clickFunction={this.removeElement}/> );
	};
	
	chekCombination(currentTry){			
		var solution = this.props.solution.slice();
		var currentT = currentTry.slice();
		var colorGuess = 0;
		var colorAndPlaceGuess = 0;
		for (var i=3; i>=0; i--) {
				if (currentT[i] - solution[i] == 0)
				{
					colorAndPlaceGuess ++;
					currentT.splice(i, 1);
					solution.splice(i, 1);
				}
		}
		for (var i=currentT.length - 1; i>=0; i--) {
			var colorGuessFound = solution.indexOf(currentT[i]);
			if (colorGuessFound>=0)
			{
				solution.splice(colorGuessFound, 1);
				colorGuess++;
			}
		}
		return ([colorAndPlaceGuess, colorGuess]);
	};
	
	restartCurrentTry()
	{
		this.setState({currentTry: []});
		this.setState({currentTryNo: 0});
	}
	
	check()
	{
		var tempNo = this.state.currentTryNo;
		var solution = this.props.solution;
		if (tempNo === 4)
		{
			console.log("kliknut sam");
			var currentTry = this.state.currentTry.slice();
			for (var i=0; i<4; i++) {
				if (currentTry[i] - solution[i] != 0)
				{					
					this.setState({message: "Neeee!"});
					var temphistory = this.state.historyTries;
					var historyChecks = this.state.historyChecks;
										
					var currentCheck = this.chekCombination(currentTry);
					temphistory.push(currentTry);
					historyChecks.push(currentCheck);
					this.setState({historyTries: temphistory}); 
					this.setState({historyChecks: historyChecks});
					this.restartCurrentTry();					
					return false;
				}
			  }
			 this.setState({message: "Bravo!"});
			 return true;
		}
		
		this.setState({message: "Morate da popunite sva polja..."});
		return false;
	};
	
	selectElement(id){
		
		var tempNo = this.state.currentTryNo;
		if (tempNo < 4)
		{
			console.log("kliknut sam");
			var temp = this.state.currentTry;
			temp.push(id);
			var inc = tempNo+1;
			
			this.setState({currentTryNo : inc});
			this.setState({currentTry : temp});
		}
		
	};
	
	removeElement(id){
		
		var tempNo = this.state.currentTryNo;
		if (tempNo > 0)
		{
			console.log("kliknut sam");
			var temp = this.state.currentTry;
			var index = temp.indexOf(id);
			if (index > -1) {
				temp.splice(index, 1);
			}
			
			var inc = tempNo-1;
			
			this.setState({currentTryNo : inc});
			this.setState({currentTry : temp});
			this.setState({message: this.state.currentTryNo});
		}
		
	};
	
	restartGame()
	{
		this.setState({currentTry: []});
		this.setState({currentTryNo: 0});
		this.setState({correct: null});
		this.setState({length: 4});
		this.setState({placeholders:[]}); 
		this.setState({historyTries: []});
		this.setState({historyChecks: []});
		this.setState({inplace: 0});
		this.setState({incolor: 0});
		this.setState({message: ""});
		this.props.restartGame();
	}

	render() {
		var placeholders1 =  []; //this.state.placeholders.slice();
		
		var selements = this.state.currentTry;
		

		for (var i = 0; i < selements.length; i++) {
			placeholders1.push(
				this.createElement(selements[i])
			);
		}

		for (var i =selements.length; i < 4; i++) {	
			placeholders1.push(
				<span class="glyphicon glyphicon-star empty"></span>
			);
		}			
		
		var hisoryTries = this.state.historyTries;
		var historyChecks = this.state.historyChecks;

		return (
			<div class="currenttry col-md-12">
				<div class="try-left col-md-6">
					{placeholders1}
				</div>
				<div id ="optionsContainer" class="optionsContainer col-md-6">
					<Icon type={1} clickFunction={this.selectElement}/> 
					<Icon type={2} clickFunction={this.selectElement}/> 
					<Icon type={3} clickFunction={this.selectElement}/> 
					<Icon type={4} clickFunction={this.selectElement}/> 
				</div>
				
				<div class="col-md-12">
					<button type="button" class="btn btn-default col-md-2"  onClick={this.check}>Try!</button>
					<div class="col-xs-6">
					  <input type="text" class="form-control " ref="result" value={this.state.message} />
					</div>
					<button type="button" class="btn btn-default col-md-2"  onClick={this.restartGame}>Restart</button>
				</div>
				
				<HistoryTries array = {hisoryTries} historyChecks={historyChecks} />
				
				<div  class = "MessageContainer col-md-12">
					<Message message={selements}/>
				 </div>
				
			</div>
			
			 
		);
	}
}