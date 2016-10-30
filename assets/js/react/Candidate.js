import React from 'react';

class Candidate extends React.Component {
	render() {
		return (
			<p>Im a candidate! My name is {this.props.me["Candidate Name"]}</p>
		);
	}
}

export default Candidate;
