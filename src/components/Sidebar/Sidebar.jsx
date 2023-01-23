import styles from './Sidebar.module.css';



const Sidebar = () => {
	return (
		<nav className={styles.sidebar}>
			<ul className={styles.item}>
				<li><a href="" className={styles.link}>Profile</a></li>
				<li><a href="" className={styles.link}>Messages</a></li>
				<li><a href="" className={styles.link}>News</a></li>
				<li><a href="" className={styles.link}>Music</a></li>
				<li><a href="" className={styles.link}>Settings</a></li>
			</ul>
		</nav>
	)
}

export default Sidebar;