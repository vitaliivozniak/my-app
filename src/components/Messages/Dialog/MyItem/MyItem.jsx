import Avatar from '../MyItem/01.jpeg';
import styles from './MyItem.module.css';



const MyItem = (props) => {
	return (
		<div className={styles.item}>
			<p className={styles.text}>{props.text}</p>
			<img src={Avatar} alt="" className={styles.img} />
		</div>
	)
}

export default MyItem;