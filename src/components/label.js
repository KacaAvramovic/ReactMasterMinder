import React, { Component } from "react";

export default class Message extends Component { 
	
	render() {
		var message = this.props.message;
		
		return (
		<label>{message}</label>
		);
	}
}