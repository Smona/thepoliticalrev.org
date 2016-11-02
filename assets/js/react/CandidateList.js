import React from 'react';
import Candidate from './Candidate';

export default class CandidateList extends React.Component {
	render() {
		var candidates = this.props.items;
		return (
			<ul className="candidate-list">
				{candidates.data
					.filter(candidate => candidate['Candidate Name'])
						.map(candidate => <li key={candidate['Candidate Name']}><Candidate me={candidate} /></li>)
				}
			</ul>
		);
	}
}
