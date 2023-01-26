import styles from './Item.module.css';


const Item = (props) => {
	return (
		<div className={styles.item}>
			<p className={styles.text}>{props.text}</p>
		</div>
	)
}

export default Item;