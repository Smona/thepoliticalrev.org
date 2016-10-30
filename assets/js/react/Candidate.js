import React from 'react';

class Candidate extends React.Component {
	render() {
		var me = this.props.me;
		var name = me["Candidate Name"];
		return (
			<div>
				<h3><a href={me.Link_link}>{name}</a></h3>
				<p>{me.State}</p>
			</div>
		);
	}
}

export default Candidate;
