import styles from './Dialog.module.css';
import Item from './Item/Item';



let dialogData = [
	{ id: 1, text: 'Hi' },
	{ id: 2, text: 'How are you?' },
	{ id: 3, text: 'I am fine' },
	{ id: 4, text: 'And you?' },
	{ id: 5, text: 'I realy like React' },
	{ id: 6, text: 'I stady' },
	{ id: 7, text: 'It is cool' },

]

let dialogElements = dialogData.map(item => item.id < 4 ? <Item text={item.text} /> : null)
const Dialog = () => {
	return (
		<div className={styles.dialog}>
			{dialogElements}
			{/* <Item text={dialogData[0].text} />
			<Item text={dialogData[1].text} />
			<Item text={dialogData[2].text} /> */}
		</div>
	)
}

export default Dialog;