import React from 'react';
import * as icon from "../packets/DefaultIcons";
import Playlist from "../atoms/SidebarPlaylist";
import {env} from '../../api/requests';
import { Link, useLocation } from 'react-router-dom';

export default class Sidebar extends React.PureComponent {
	constructor (props) {
		super(props);
		this.state = {
			playlists: [],
		}
	}


	componentDidMount() {
		( async () => {
			await fetch(`https://backend.artur.red/api/creator/${env.user_id}`, {
				method: "GET", 
			}).then(async response => await response.json()).then(data => {
				const playlists = data.playlists;
				
				this.setState({ playlists })
			})
		})();
	}
	

	
	render() {
		return(
			<div className="sidebar">
				<div className='container'>
					<div className='menu'>
						<Link to={"/"} className="link">
							<div className={`item`}>
								<icon.TiHome size="28" className='icon'></icon.TiHome>
								<p className='title'>Home</p>
							</div>
						</Link>
						<div className="item">
							<icon.HiOutlineSearch size="28" className='icon'></icon.HiOutlineSearch>
							<p className='title'>Search</p>
						</div>
						<div className="item">
							<icon.VscLibrary size="28" className='icon'></icon.VscLibrary>
							<p className='title'>Library</p>
						</div>
					</div>


					<div className='playlists'>
						<div className="item add">
							<icon.IoIosAddCircleOutline size="30" className='icon'></icon.IoIosAddCircleOutline>
						</div>
						{
							this.state.playlists.map((playlist) => {
								return <Playlist cover={playlist.cover} id={playlist.id}/>
							})
						}
						
					</div>
				</div>
			</div>
		)
	}
}