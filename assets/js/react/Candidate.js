import React from 'react';

class Candidate extends React.Component {
	render() {
		var me = this.props.me;
		var name = me["Candidate Name"];
		return (
			<a href={me.Link_link}><div className="candidate">
				<h3>{name}</h3>
				<p>{me.State.split(' ')[0]}</p>
			</div></a>
		);
	}
}

export default Candidate;
