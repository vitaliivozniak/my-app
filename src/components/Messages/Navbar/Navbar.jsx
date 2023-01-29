import Item from './Item/Item';
import styles from './Navbar.module.css';




const Navbar = (props) => {
	let navbarElements = props.navbarData.map(item => <Item name={item.name} id={item.id} />)
	return (
		<div className={styles.navbar}>
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