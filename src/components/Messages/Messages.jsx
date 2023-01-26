import Dialog from './Dialog/Dialog';
import styles from './Messages.module.css';
import Navbar from './Navbar/Navbar';


const Messages = () => {
	return (
		<div className={styles.messages}>
			<Navbar />
			<Dialog />
		</div>
	)
}

export default Messages;