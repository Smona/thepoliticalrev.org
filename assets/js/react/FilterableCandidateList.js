import React from 'react';
import ReactDom from 'react-dom';
import CandidateList from './CandidateList';

var candidates = ['Bernie', 'Zephyr', 'Russ'];
var spreadsheetID = '1rIiEAMjfPTa5j4ttsehoFi939I9FfnqyE5dKy802474';
var sheetID = '163578027';

class FilterableCandidateList extends React.Component {
	render() {
		var data = this.props.items;
		;
		return (
			<div>
				<h1>Endorsed Candidates</h1>
				<label>Filter by state:</label>
				<select />
				<CandidateList items={data} />
			</div>
		);
	}
}

ReactDom.render(
	<FilterableCandidateList items={candidates} />,
	document.getElementById('CandidateList')
);
