import { NavLink } from 'react-router-dom';
import styles from './Item.module.css';
import Avatar from './01.jpeg';


const Item = (props) => {
	return (
		<NavLink to={'/friends/*' + props.id} className={navData => navData.isActive ? styles.active : styles.item}>
			<img src={Avatar} alt="" className={styles.img} />
			<p className={styles.name}>{props.name}</p>
		</NavLink>
		// <div className={styles.item}>
		// 	<NavLink to={'/friends/*' + props.id}><img src={Avatar} alt="" className={styles.img} /></NavLink>
		// 	<NavLink to={'/friends/*' + props.id} className={navData => navData.isActive ? styles.active : styles.name}>{props.name}</NavLink>
		// </div>
	)
}

export default Item;	