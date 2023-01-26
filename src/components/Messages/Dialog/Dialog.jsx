import styles from './Dialog.module.css';
import Item from './Item/Item';


const Dialog = () => {
	return (
		<div className={styles.dialog}>
			<Item text='Hi' />
			<Item text='How are you?' />
			<Item text='I am fine' />
		</div>
	)
}

export default Dialog;