import React from 'react';
import ReactDom from 'react-dom';
import PapaParse from 'papaparse';
import $ from 'jquery';
import CandidateList from './CandidateList';

const styles = require('./candidate-list.sass');

var candidates = {};
$.get({
	url: '/data/Candidates2016.csv',
	success: function (data) {
		PapaParse.parse(data, {
			header: true,
			complete: function (results) {
				candidates = results;
				ReactDom.render(
					<FilterableCandidateList items={candidates} />,
					document.getElementById('root')
				);
			}
		});
	}
});

export default class FilterableCandidateList extends React.Component {
	render() {
		return (
			<div className="FilterableCandidateList">
			{/* <label>Filter by state:</label>
				<select>
					<option>Alabama</option>
					<option>Alaska</option>
				</select> */}
				<CandidateList items={this.props.items} />
			</div>
		);
	}
}
