import React from 'react';

class Candidate extends React.Component {
	getPicture(candidateLink) {
		let list = candidateLink.split('/');
		return 'url(https://ourrevolution.com/img/candidates/profile/' + list[list.length - 1] + '.jpg)';
	}
	render() {
		var me = this.props.me;
		var name = me["Candidate Name"];
		return (
			<a href={me.Link_link}><div className="candidate" style={{backgroundImage: this.getPicture(me.Link_link)}}>
				<header>
					<h3>{name}</h3> <span>{me.State}</span>
				</header>
			</div></a>
		);
	}
}

export default Candidate;
