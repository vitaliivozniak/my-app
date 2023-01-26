import { NavLink } from 'react-router-dom';
import styles from './Item.module.css';


const Item = (props) => {
	return (
		<div className={styles.item}>
			<NavLink to={'/messages/*' + props.id} className={navData => navData.isActive ? styles.active : styles.name}>{props.name}</NavLink>
		</div>
	)
}

export default Item;	