/*
*   A Candidate Card that displays some data about a candidate and
*   has an expanded state with additional info
*
*   Author: Smona  (mason.bourgeois@gmail.com)
*/

import React from 'react';

export default class Candidate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false
		};
	}
	// Backup function that pulls a Candidate Image from Our Revolution
	getPicture(candidateLink) {
		let list = candidateLink.split('/');
		return 'url(https://ourrevolution.com/static/dist/img/candidates/profile/' + list[list.length - 1] + '.jpg)';
	}
	toggleExpand(e) {
		e.preventDefault();
		this.setState(prevState => ({
			expanded: !prevState.expanded
		}));
	}
	// Prevent link clicks from bubbling up to toggleExpand
	followLink(e) {
		e.stopPropagation();
	}
	render() {
		var me = this.props.me;
		var name = me['Candidate Name'];
		var image, website;
		// Use candidate image if in the data, fallback to Our Revolution
		if (me['Photo URL']) {
			image = 'url(' + me['Photo URL'] + ')';
		} else {
			image = this.getPicture(me.Link_link);
		}
		// Use candidate website if in the data, fallback to Our Revolution
		if (me.Website) {
			website = me.Website;
		} else {
			website = me.Link_link;
		}

		return (
			<a href="#" onClick={this.toggleExpand.bind(this)}>
				<div className="candidate" style={{backgroundImage: image}}>

					{/* Collapsed View */}
					<header style={{opacity: (this.state.expanded ? '0' : '1')}}>
						<h3>{name}</h3> <span>{me.State}</span>
					</header>

					{/* Expanded View */}
					<section style={{opacity: (this.state.expanded ? '1' : '0')}}>
						<h3>{name}</h3>
						{me.District ? (<span>{me.District}</span>) : null}
						<span>{me.Position}</span>
						// Social Links, Kill links when collapsed to prevent ghosty clicks
						{this.state.expanded ? (
							<div>
								{me['Facebook URL'] && <a href={me['Facebook URL']} className="button-icon" onClick={this.followLink.bind(this)} target="_blank"><i className="fa fa-facebook"></i></a>}
								{me['Twitter Url'] && <a href={me['Twitter Url']} className="button-icon" onClick={this.followLink.bind(this)} target="_blank"><i className="fa fa-twitter"></i></a>}
								<a href={website} className="button-icon" onClick={this.followLink.bind(this)} target="_blank"><i className="fa fa-info-circle"></i></a>
							</div>
						) : null}
					</section>
				</div>
			</a>
		);
	}
}
