import { NavLink } from 'react-router-dom';
import Item from './Item/Item';
import styles from './Sidebar.module.css';



const Sidebar = (props) => {
	let friendsElements = props.friendsData.map(item => item.status === 'offline' ? <Item name={item.name} id={item.id} /> : null)
	return (
		<div className={styles.sidebar}>
			<nav className={styles.nav}>
				<NavLink to="/profile" className={navData => navData.isActive ? styles.active : styles.link}>Profile</NavLink>
				<NavLink to="/messages" className={navData => navData.isActive ? styles.active : styles.link}>Messages</NavLink>
				<NavLink to="/news" className={navData => navData.isActive ? styles.active : styles.link}>News</NavLink>
				<NavLink to="/music" className={navData => navData.isActive ? styles.active : styles.link}>Music</NavLink>
				<NavLink to="/settings" className={navData => navData.isActive ? styles.active : styles.link}>Settings</NavLink>
				<NavLink to="/friends" className={navData => navData.isActive ? styles.active : styles.link}>Friends</NavLink>
			</nav>
			<div className={styles.friends}>
				{friendsElements}
			</div>
		</div>
	)
}

export default Sidebar;