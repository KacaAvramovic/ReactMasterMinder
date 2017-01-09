import React, { Component } from "react";  

import Icon from './icon.js';  

export default class OptionsContainer extends Component {  
  render() {
    return (
      <div id ="optionsContainer" class="optionsContainer col-md-6">
        <Icon type={1} /> 
		<Icon type={2} /> 
		<Icon type={3} /> 
		<Icon type={4} /> 
		
      </div>
    );
	

	
  }
}