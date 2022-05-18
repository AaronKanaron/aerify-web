import React from "react"
import { IoPersonAddOutline } from "../components/packets/DefaultIcons";


export default class Home extends React.PureComponent{
	render() {
		return(
			<main className="main">
				<div className='wrapper'>
					<h1>Recommended</h1>
					<div className="recommended">
						<div className="item">
							<img className="image" alt="recommended" src='https://misc.scdn.co/liked-songs/liked-songs-300.png'/>
							<p className='text'>Liked Songs</p>
						</div>
						<div className="item">
							<img className="image" alt="recommended" src='https://picsum.photos/400?random=1'/>
							<p className='text'>Daily Mix 1</p>
						</div>
						<div className="item">
							<img className="image" alt="recommended" src='https://picsum.photos/400?random=2'/>
							<p className='text'>Daily Mix 2</p>
						</div>
						<div className="item">
							<img className="image" alt="recommended" src='https://picsum.photos/400?random=3'/>
							<p className='text'>Daily Mix 3</p>
						</div>
						<div className="item">
							<img className="image" alt="recommended" src='https://picsum.photos/400?random=4'/>
							<p className='text'>Daily Mix 4</p>
						</div>
						<div className="item">
							<img className="image" alt="recommended" src='https://picsum.photos/400?random=5'/>
							<p className='text'>Daily Mix 5</p>
						</div>
					</div>

					<h2>Jump back in</h2>
				</div>

				<div className='friend-activity'>
					<h1>Friend Activity</h1>
					<IoPersonAddOutline/>
				</div>
			</main>
		)
	}
}
