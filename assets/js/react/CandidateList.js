import React from 'react';
import Candidate from './Candidate';

export default class CandidateList extends React.Component {
	render() {
		var candidates = this.props.items;
		return (
			<ul className="candidate-list">
				{candidates.data
					.filter(candidate => candidate['Candidate Name'])
						.sort(function (a, b) {
							let testArray = [a.State, b.State].sort();
							if (testArray.indexOf(a.State) === 1) {
								return 1;
							}
							return -1;
						})
							.map(candidate => <li key={candidate['Candidate Name']}><Candidate me={candidate} /></li>)
				}
			</ul>
		);
	}
}
