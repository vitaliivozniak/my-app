import avatar from '../../../../img/page/02.jpg';
import styles from './Avatar.module.css';



const Avatar = () => {
	return (
		<img src={avatar} alt="" className={styles.avatar} />
	)
}

export default Avatar;