import React from 'react';
import * as icon from "../packets/DefaultIcons";

export default class Playbar extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = { time: 0, isPlaying: true };
		//function bindings
		this.incrementTime = this.incrementTime.bind(this);
	}

	componentDidMount() {
		this.incrementTime();
	}

	incrementTime() {
		if(Math.random() > 0.9) { this.setState({ isPlaying: false }); }
		
		
		if (this.state.isPlaying) {
			setTimeout(() => {
				this.incrementTime();
			}, 1000);
		} else return

		this.setState({ time: this.state.time + 1 });
	}

	render() {
		return(
			<div className="playbar">
				<div className="container">
					<div className="content left">
						<img className='album-cover' alt='album' src="https://cdn.abicart.com/shop/ws99/89099/art99/h7091/175317091-origpic-188356.jpg"/>
						
						<div className='song-info'>
							<p className='song-name'>{this.props.title}</p>
							<p className='creator'>Nogger Inc.</p>
						</div>

						<icon.AiOutlineHeart size="20" className='icon'/>
					</div>
					<div className="content center">
						<div className='buttons'>
							
						</div>
						<div className='bar'>
							<p className='time'>{this.state.time}</p>
							<input type="range" min="0" max="100" />
							<p className='time full'>3:57</p>
						</div>
					</div>
					<div className="content">

					</div>
				</div>
				
			</div>
		)
	}
}



/*post creator
	- name
	- profile picture
	- song  (Name, creator, time, album, plays)
	- album (Name, album cover, songs (array))

*/