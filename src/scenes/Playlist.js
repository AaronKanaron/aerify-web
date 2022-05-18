import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { auth } from "../api/requests";




export default function Playlist() {	
	const { id } = useParams();
	const [songs, setSong] = useState();

	useEffect(() => {
		( async () => {
			await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
				method: "GET",
				headers: auth
				
			}).then(async response => await response.json()).then(data => {
				console.log("=-----------------------------=")
				data.tracks.items.map((el,index) => {
					console.log(el.track.name + "/" + index)
				})
			})
		})();
	})

	// componentDidMount() {
		// let { id } = this.props.match.params
		
	// }
	
	
	return(
		<main className="main">
			<div className='wrapper'>
				<h1>{id}</h1>
			</div>

			{/* <div className='friend-activity'>
				<h1>Friend Activity</h1>
				<IoPersonAddOutline/>
			</div> */}
		</main>
	)
}
