import React from 'react';

class Candidate extends React.Component {
	render() {
		return (
			<p>Im a candidate! My name is {this.props.name}</p>
		);
	}
}

export default Candidate
