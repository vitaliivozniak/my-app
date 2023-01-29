import Avatar from '../Item/01.jpeg';
import styles from './Item.module.css';



const Item = (props) => {
	return (
		<div className={styles.item}>
			<img src={Avatar} alt="" className={styles.img} />
			<p className={styles.text}>{props.text}</p>
		</div>
	)
}

export default Item;