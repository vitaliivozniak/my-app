import Dialog from './Dialog/Dialog';
import styles from './Messages.module.css';
import Navbar from './Navbar/Navbar';


const Messages = (props) => {
	return (
		<div className={styles.messages}>
			<header className={styles.header}>Dialogs</header>
			<Navbar navbarData={props.navbarData} />
			<Dialog dialogData={props.dialogData} addMessage={props.addMessage} />
		</div>
	)
}

export default Messages;