import React from 'react';
import Candidate from './Candidate';

export default class CandidateList extends React.Component {
	render() {
		var candidates = this.props.items;
		return (
			<ul className="candidate-list">
				{candidates.data
					// Strip out empty/partial entries
					.filter(candidate => candidate['Candidate Name'])
					// Sort by state
					.sort(function (a, b) {
						if ([a.State, b.State] = [a.State, b.State].sort()) {
							return 1;
						}
						return -1;
					})
					// Spawn a card for each candidate
					.map(candidate => <li key={candidate['Candidate Name']}><Candidate me={candidate} /></li>)
				}
			</ul>
		);
	}
}
