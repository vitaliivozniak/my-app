import Item from './Item/Item';
import styles from './Navbar.module.css';


const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<header className={styles.header}>Dialogs</header>
			<div className={styles.item}>
				<Item name='Alexander' />
				<Item name='John' />
			</div>
		</div>
	)
}

export default Navbar;