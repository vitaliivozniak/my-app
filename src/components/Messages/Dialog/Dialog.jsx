import styles from './Dialog.module.css';
import Item from './Item/Item';
import MyItem from './MyItem/MyItem';



const Dialog = (props) => {
	let dialogElements = props.dialogData.map(item => item.property !== 0 ? <Item text={item.text} /> : <MyItem text={item.text} />)
	return (
		<div className={styles.dialog}>
			<div className={styles.text}>{dialogElements}</div>
			<div className={styles.footer}>
				<div className={styles.textarea}>
					<textarea placeholder="Your messsage..." className={styles.input}></textarea>
				</div>
				<div className={styles.button}>
					<button type="submit" className={styles.btn}>Send</button>
				</div>
			</div>
		</div>
	)
}

export default Dialog;