import Dialog from './Dialog/Dialog';
import styles from './Messages.module.css';
import Navbar from './Navbar/Navbar';


const Messages = (props) => {
	return (
		<div className={styles.messages}>
			<header className={styles.header}>Dialogs</header>
			<Navbar navbarData={props.navbarData} />
			<Dialog dialogData={props.dialogData} addMessage={props.addMessage} updateNewNessageText={props.updateNewNessageText} newMessageText={props.newMessageText} />
		</div>
	)
}

export default Messages;