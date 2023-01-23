import Avatar from './Avatar/Avatar';
import styles from './Info.module.css';
import Text from './Text/Text';



const Info = () => {
	return (
		<div className={styles.info}>
			<Avatar />
			<Text />
		</div>
	)
}

export default Info;