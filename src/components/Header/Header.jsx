import logo from '../../img/logo.jpg';
import styles from './Header.module.css';


const Header = () => {
	return (
		<header className={styles.header}>
			<img src={logo} alt="" className={styles.logo} />
		</header>
	)
}

export default Header;