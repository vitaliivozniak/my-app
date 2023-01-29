import styles from './Dialog.module.css';
import Item from './Item/Item';
import MyItem from './MyItem/MyItem';



const Dialog = (props) => {
	let dialogElements = props.dialogData.map(item => item.property != 0 ? <Item text={item.text} /> : <MyItem text={item.text} />)
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