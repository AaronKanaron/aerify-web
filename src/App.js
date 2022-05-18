import './App.scss';
import * as Layout from "./components/packets/DefaultLayout";
import React from 'react';

/* Scenes */
import Home from './scenes/Home';
import Playlist from './scenes/Playlist';


import { 
	BrowserRouter,
	Routes, // instead of "Switch"
	Route,
} from 'react-router-dom';

function App() {
	
	return (
		<BrowserRouter>
			<div className="app-container">
				<Layout.Header></Layout.Header>
				<Layout.Sidebar ></Layout.Sidebar>

				<Routes>
					<Route exact path="/" element={ <Home />} />
					<Route exact path="/playlist/:id" element={ <Playlist />} />
				</Routes>

				<Layout.Playbar title={1}></Layout.Playbar>
			</div>
		</BrowserRouter>
	);
}

export default App;