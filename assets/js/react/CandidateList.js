import React from 'react';
import ReactDom from 'react-dom';
import Candidate from './Candidate';

class CandidateList extends React.Component {
	render() {
		var candidates = this.props.items;
		return (
			<ul>
				{candidates.data.map((candidate) => <li><Candidate me={candidate} /></li>)}
			</ul>
		)
	}
}

export default CandidateList;
