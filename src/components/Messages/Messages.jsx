import styles from './Messages.module.css';
import Navbar from './Navbar/Navbar';


const Messages = () => {
	return (
		<div className={styles.messages}>
			<Navbar />
			<Navbar />
		</div>
	)
}

export default Messages;