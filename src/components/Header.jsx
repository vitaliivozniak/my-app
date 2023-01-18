import logo from '../img/logo.jpg';

const Header = () => {
	return (
		<header className="header">
			<img src={logo} alt="" className="header-logo" />
		</header>
	)
}

export default Header;