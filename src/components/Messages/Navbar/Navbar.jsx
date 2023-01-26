import Item from './Item/Item';
import styles from './Navbar.module.css';


const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<header className={styles.header}>Dialogs</header>
			<div className={styles.item}>
				<Item name='Alexander' id="/alexander" />
				<Item name='John' id="/john" />
				<Item name='Igor' id="/igor" />
				<Item name='Karyna' id="/karyna" />
				<Item name='Adam' id="/adan" />
				<Item name='Victoria' id="/victoria" />
				<Item name='Alex' id="/alex" />
			</div>
		</div>
	)
}

export default Navbar;