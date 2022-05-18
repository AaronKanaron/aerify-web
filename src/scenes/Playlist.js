import React from "react"
import { useParams } from "react-router-dom";

const Title = () => {
	const { id } = useParams();
	
	return (
		<h1>Playlist id: {id}</h1>
	)
}

export default class Playlist extends React.PureComponent {	
	render() {
		return(
			<main className="main">
				<div className='wrapper'>
					<Title/>
				</div>
	
				{/* <div className='friend-activity'>
					<h1>Friend Activity</h1>
					<IoPersonAddOutline/>
				</div> */}
			</main>
		)
	}
}
