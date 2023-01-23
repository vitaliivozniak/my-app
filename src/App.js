import './App.css';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';




const App = () => {
	return (
		<div className="App" >
			<Header />
			<Sidebar />
			<div className="content">
				{/* <Profile /> */}
				<Messages />
			</div>
		</div>
	);
}

export default App;
