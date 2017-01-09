import React, { Component } from "react";  
import Icon from './icon.js';  

export default class Try extends Component {  
	
	
	constructor() {
		super();
		
		this.state = { 
			currentTry: [],
			currentTryNo: 0,
			correct: null, 
			length: 4, 
			placeholders:[], 
			placeholderscheck: []
		};
	};
	
	
	
	createElement(type){			
		return(<Icon type={type} clickFunction={this.removeElement}/> );
	};
	

	render() {
		var placeholders1 =  []; //this.state.placeholders.slice();
		var placeholderscheck1 = [];//this.state.placeholderscheck;
		
		var selements = this.props.selements;
		
		
		if (selements.length === 0 )
		{
			for (var i =0; i < 4; i++) {
				placeholders1.push(
					<div class="placeholder" ref={i}></div>
				);
			}
		}
		else{
			for (var i =0; i < selements.length; i++) {
				
				placeholders1.push(
					this.createElement(selements[i])
				);
			}
		}		
		for (var i =0; i < 4; i++) {
			placeholderscheck1.push(
				<div class="placeholder-check"></div>
			);
		}
		
		this.setState({ placeholders: placeholders1 });
		this.setState({ placeholderscheck: placeholderscheck1 });
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