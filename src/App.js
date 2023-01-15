import logo from './img/logo.jpg';
import img01 from './img/page/01.png';
import avatar from './img/page/02.jpg';
import './App.css';




const App = () => {
	return (
		<div className="App">
			<header className="header">
				<img src={logo} alt="" className="header-logo" />
			</header>
			<div className="content">
				<div className="content-sidebar">
					<nav className="content-sidebar-item">
						<ul>
							<li><a href="" className="content-sidebar-item__link">Profile</a></li>
							<li><a href="" className="content-sidebar-item__link">Messages</a></li>
							<li><a href="" className="content-sidebar-item__link">News</a></li>
							<li><a href="" className="content-sidebar-item__link">Music</a></li>
							<li><a href="" className="content-sidebar-item__link">Settings</a></li>
						</ul>
					</nav>
				</div>
				<div className="content-page">
					<div className="content-page__img">
						<img src={img01} alt="" />
					</div>
					<div className="content-page-info">
						<div className="content-page-info__avatar">
							<img src={avatar} alt="" />
						</div>
						<div className="content-page-info-text">
							<p className="content-page-info-text__name">Vitalii Vozniak</p>
							<p className="content-page-info-text__birth">Date of birth: 3 occtober</p>
							<p className="content-page-info-text__city">City: Krakov</p>
							<p className="content-page-info-text__education">Education: </p>
							<p className="content-page-info-text__website">Web Site:</p>
						</div>
					</div>
					<div className="content-page-feed">
						<div className="content-page-feed__header">
							My posts
						</div>
						<div className="content-page-feed__textarea">
							<textarea placeholder="Your news" className="input"></textarea>
						</div>
						<div className="content-page-feed__button">
							<button type="submit" className="content-page-feed__btn btn">Send</button>
						</div>
						<div className="content-page-feed__footer">
							Hey, why nobody love me?
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
