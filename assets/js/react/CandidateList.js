import React from 'react';
import ReactDom from 'react-dom';
import Candidate from './Candidate';

class CandidateList extends React.Component {
	render() {
		var candidates = this.props.items;
		return (
			<ul className="candidate-list">
				{candidates.data.map((candidate) => <li key={candidate["Candidate Name"]} className="candidate"><Candidate me={candidate} /></li>)}
			</ul>
		)
	}
}

export default CandidateList;
