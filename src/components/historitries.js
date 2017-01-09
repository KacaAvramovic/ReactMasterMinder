import React, { Component } from "react";  
import Icon from './icon.js';  

export default class HistoryTries extends Component {  
	
	
	constructor() {
		super();
		
		
	};
	
	createElement(type){			
		return(<Icon type={type} clickFunction={this.removeElement}/> );
	};
	
	render() {
		var placeholders1 =  []; //this.state.placeholders.slice();
		var placeholderscheck1 = [];//this.state.placeholderscheck;
		
		var array = this.props.array;
		var historyChecks = this.props.historyChecks;
		
		for (var i =0; i < array.length; i++)
		{
			var current = array[i];
			var currentHistoryCheck = historyChecks[i];
			
			
			for (var j =0; j < current.length; j++) {
				placeholders1.push(
					this.createElement(current[j])
					);
			}		
			
			for (var j =0; j < currentHistoryCheck[0]; j++) {
				placeholderscheck1.push(
					<span class="glyphicon glyphicon-ok colorAndPlace"></span>	
				);
			}
			
			for (var j =0; j < currentHistoryCheck[1]; j++) {
				placeholderscheck1.push(
					<span class="glyphicon glyphicon-ok place"></span>	
				);
			}
			
			for (var j =0; j < 4-currentHistoryCheck[0]-currentHistoryCheck[1]; j++) {
				placeholderscheck1.push(
					<span class="glyphicon glyphicon-star empty"></span>
				);
			}
		}
	
		//this.setState({ placeholders: placeholders1 });
		//this.setState({ placeholderscheck: placeholderscheck1 });
		
		return (
			<div class="try col-md-12">
				<div class="try-left col-md-6">
				{placeholders1}
				</div>
				<div class="check col-md-6">
				{placeholderscheck1}
				</div>
			</div>
		);
	}
}