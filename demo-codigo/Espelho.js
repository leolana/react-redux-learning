import React, { Component } from 'react';

class Espelho extends Component {
	
	render() {
		return (
			<p style={{"color":"blue"}}>{this.props.texto}</p>
		)
	}


}

export default Espelho;