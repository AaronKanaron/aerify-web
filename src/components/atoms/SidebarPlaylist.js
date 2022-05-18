import React from "react";
import { Link } from "react-router-dom"

export default class Playlist extends React.PureComponent{
	render() {
		return (

			<div className="item">
				<Link to={`playlist/${this.props.id}`}>
					<img className="playlist-icon" alt="playlist" src={this.props.cover}/>
				</Link>
			</div>
		)
	}
}