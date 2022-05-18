import React from 'react';

export default class Header extends React.PureComponent {
	render() {
		return(
			<header className="header">
				<img className="logo" alt="Aerify" src="https://i.imgur.com/NxphFme.png"/>
				<img className="pfp" alt="Aerify" src="https://avatars.dicebear.com/api/big-smile/aerify.svg"/>
			</header>
		)
	}
}