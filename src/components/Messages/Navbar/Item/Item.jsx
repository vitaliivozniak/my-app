import { NavLink } from 'react-router-dom';
import styles from './Item.module.css';
import Avatar from './01.jpeg';


const Item = (props) => {
	return (
		<div className={styles.item}>
			<img src={Avatar} alt="" className={styles.img} />
			<NavLink to={'/messages/*' + props.id} className={navData => navData.isActive ? styles.active : styles.name}>{props.name}</NavLink>
		</div>
	)
}

export default Item;	