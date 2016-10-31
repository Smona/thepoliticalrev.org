import React from 'react';
import ReactDom from 'react-dom';
import CandidateList from './CandidateList';
import PapaParse from 'papaparse';
import $ from 'jquery';
require('./candidate-list.sass');

// var candidates = ['Bernie', 'Zephyr', 'Russ'];
var spreadsheetID = '1rIiEAMjfPTa5j4ttsehoFi939I9FfnqyE5dKy802474';
var sheetID = '163578027';
var candidates = {};
$.get({
	url: '/data/Candidates2016.csv',
	success: function (data, status) {
		PapaParse.parse(data, {
			header: true,
			complete: function (results, file) {
				candidates = results;
				console.log(candidates);
				ReactDom.render(
					<FilterableCandidateList items={candidates} />,
					document.getElementById('root')
				);
			}
		});
	}
});

class FilterableCandidateList extends React.Component {
	render() {
		return (
			<div className="FilterableCandidateList">
				<h1>Endorsed Candidates</h1>
				<label>Filter by state:</label>
				<select>
					<option>Alabama</option>
					<option>Alaska</option>
				</select>
				<CandidateList items={this.props.items} />
			</div>
		);
	}
}
