import React, { Component } from "react";

export default class Icon extends Component { 
	
	render() {
		var type = this.props.type;
		
		if (type===1)
		{
			var gly = <span className="glyphicon glyphicon-star mm-regularelement" onClick={() => this.props.clickFunction(1)}>  </span>;
		}
		else if (type===2)
		{
			var gly = <span className="glyphicon glyphicon-heart mm-regularelement" onClick={() => this.props.clickFunction(2)}>  </span>;
		}
		else if (type===3)
		{
			var gly = <span className="glyphicon glyphicon-cloud mm-regularelement" onClick={() => this.props.clickFunction(3)}>  </span>;
		}
		else if (type===4)
		{
			var gly = <span className="glyphicon glyphicon-tint mm-regularelement" onClick={() => this.props.clickFunction(4)}>  </span>;
		}
		return (
		gly
		);
	}
}