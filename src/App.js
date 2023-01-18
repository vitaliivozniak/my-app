import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';




const App = () => {
	return (
		<div className="App" >
			<Header />
			<div className="content">
				<Sidebar />
				<Profile />
			</div>
		</div>
	);
}

export default App;
