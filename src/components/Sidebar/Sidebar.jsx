import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';



const Sidebar = () => {
	return (
		<nav className={styles.sidebar}>
			<NavLink to="/profile" className={navData => navData.isActive ? styles.active : styles.link}>Profile</NavLink>
			<NavLink to="/messages" className={navData => navData.isActive ? styles.active : styles.link}>Messages</NavLink>
			<NavLink to="/news" className={navData => navData.isActive ? styles.active : styles.link}>News</NavLink>
			<NavLink to="/music" className={navData => navData.isActive ? styles.active : styles.link}>Music</NavLink>
			<NavLink to="/settings" className={navData => navData.isActive ? styles.active : styles.link}>Settings</NavLink>
		</nav>
	)
}

export default Sidebar;