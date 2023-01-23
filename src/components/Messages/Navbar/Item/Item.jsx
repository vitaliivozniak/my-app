import styles from './Item.module.css';


const Item = (props) => {
	return (
		<div className={styles.item}>
			<p className={styles.name}>{props.name}</p>
		</div>
	)
}

export default Item;