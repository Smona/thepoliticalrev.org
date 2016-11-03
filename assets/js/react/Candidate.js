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
	render() {
		var me = this.props.me;
		var name = me['Candidate Name'];

		return (
			<a href="#" onClick={this.toggleExpand.bind(this)}><div className="candidate" style={{backgroundImage: this.getPicture(me.Link_link)}}>
					{this.state.expanded ? null : (
						<header>
 							<h3>{name}</h3> <span>{me.State}</span>
 						</header>
					)}

					<section style={{transform: (this.state.expanded ? 'scaleY(1)' : 'scaleY(0)')}}>
						<h3>{name}</h3>
						<span>{me.State}</span>
						{me.Region ? (<span>{me.Region}</span>) : null}
						<span>{me.Position}</span>
					</section>
			</div></a>
		);
	}
}

export default Candidate;
