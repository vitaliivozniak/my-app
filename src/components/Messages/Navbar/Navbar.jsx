import Item from './Item/Item';
import styles from './Navbar.module.css';


let navbarData = [
	{ id: "/alexander", name: 'Alexander' },
	{ id: "/john", name: 'John' },
	{ id: "/igor", name: 'Igor' },
	{ id: "/karyna", name: 'Karyna' },
	{ id: "/adam", name: 'Adam' },
	{ id: "/victoria", name: 'Victoria' },
	{ id: "/alex", name: 'Alex' },

]

let navbarElements = navbarData.map(item => <Item name={item.name} id={item.id} />)

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<header className={styles.header}>Dialogs</header>
			<div className={styles.item}>
				{navbarElements}
				{/* <Item name={navbarData[0].name} id={navbarData[0].id} />
				<Item name={navbarData[1].name} id={navbarData[1].id} />
				<Item name={navbarData[2].name} id={navbarData[2].id} />
				<Item name={navbarData[3].name} id={navbarData[3].id} />
				<Item name={navbarData[4].name} id={navbarData[4].id} />
				<Item name={navbarData[5].name} id={navbarData[5].id} />
				<Item name={navbarData[6].name} id={navbarData[6].id} /> */}
			</div>
		</div>
	)
}

export default Navbar;