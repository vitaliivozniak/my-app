import React from 'react';
import styles from './Dialog.module.css';
import Item from './Item/Item';
import MyItem from './MyItem/MyItem';



const Dialog = (props) => {
	let dialogElements = props.dialogData.map(item => item.property !== 0 ? <Item text={item.text} /> : <MyItem text={item.text} />);

	let newDialogElements = React.createRef();

	let addMessage = () => {
		let text = newDialogElements.current.value;
		alert(text);
	}
	return (
		<div className={styles.dialog}>
			<div className={styles.text}>{dialogElements}</div>
			<div className={styles.footer}>
				<div className={styles.textarea}>
					<textarea ref={newDialogElements} placeholder="Your messsage..." className={styles.input}></textarea>
				</div>
				<div className={styles.button}>
					<button onClick={addMessage} type="submit" className={styles.btn}>Send</button>
				</div>
			</div>
		</div>
	)
}

export default Dialog;