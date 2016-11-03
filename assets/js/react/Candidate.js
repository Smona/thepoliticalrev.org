import React from 'react';

class Candidate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false
		};
	}
	getPicture(candidateLink) {
		let list = candidateLink.split('/');
		return 'url(https://ourrevolution.com/img/candidates/profile/' + list[list.length - 1] + '.jpg)';
	}
	toggleExpand(e) {
		e.preventDefault();
		this.setState(prevState => ({
			expanded: !prevState.expanded
		}));
	}
	followLink(e) {
		e.stopPropagation();
	}
	render() {
		var me = this.props.me;
		var name = me['Candidate Name'];

		return (
			<a href="#" onClick={this.toggleExpand.bind(this)}><div className="candidate" style={{backgroundImage: this.getPicture(me.Link_link)}}>
					<header style={{opacity: (this.state.expanded ? '0' : '1')}}>
						<h3>{name}</h3> <span>{me.State}</span>
					</header>

					<section style={{opacity: (this.state.expanded ? '1' : '0')}}>
						<h3>{name}</h3>
						<span>{me.State}</span>
						{me.Region ? (<span>{me.Region}</span>) : null}
						<span>{me.Position}</span>
						<a href={me.Link_link} onClick={this.followLink.bind(this)}><i className="fa fa-info-circle button-icon" style={{fontSize: '3em'}}></i></a>
					</section>
			</div></a>
		);
	}
}

export default Candidate;
