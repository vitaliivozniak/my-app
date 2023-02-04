import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Music from './components/Music/Music';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';




const App = (props) => {
	return (
		<BrowserRouter>
			<div className="App" >
				<Header />
				<Sidebar friendsData={props.state.friends.friendsData} />
				<div className="content">
					<Routes>
						<Route path='/profile' element={<Profile postData={props.state.profile.postData} addPost={props.addPost} />} />
						<Route path='/messages/*' element={<Messages navbarData={props.state.messages.navbarData} dialogData={props.state.messages.dialogData} addMessage={props.addMessage} />} />
						<Route path='/news' element={<News />} />
						<Route path='/music' element={<Music />} />
						<Route path='/settings' element={<Settings />} />
						<Route path='/friends' element={<Friends />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter >
	);
}

export default App;
