import React from 'react';
import ReactDom from 'react-dom';
import Candidate from './Candidate';

class CandidateList extends React.Component {
	render() {
		let data = this.props.items;
		return (
			<ul>
				{data.map((cName) => <li><Candidate name={cName} /></li>)}
			</ul>
		)
	}
}

export default CandidateList;
