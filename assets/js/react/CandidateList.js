import React from 'react';
import ReactDom from 'react-dom';
import Candidate from './Candidate';

class CandidateList extends React.Component {
	render() {
		var candidates = this.props.items;
		return (
			<ul className="candidate-list">
				{candidates.data.map(function (candidate) {
				 	if (candidate["Candidate Name"]) {
					 	return (<li key={candidate["Candidate Name"]}><Candidate me={candidate} /></li>);
				 	}
		 		 }
		 		)}
			</ul>
		)
	}
}

export default CandidateList;
