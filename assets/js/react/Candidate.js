import React from 'react';

class Candidate extends React.Component {
	encodeName(name) {
		name = name.replace(/ /g, '-').toLowerCase();
		return name;
	}
	render() {
		var me = this.props.me;
		var name = me["Candidate Name"];
		return (
			<a href={me.Link_link}><div className="candidate" style={{backgroundImage: 'url(https://ourrevolution.com/img/candidates/profile/' + this.encodeName(name) + '.jpg)'}}>
				<header>
					<h3>{name}</h3> <span>{me.State.split(' ')[0]}</span>			
				</header>
			</div></a>
		);
	}
}

export default Candidate;
