import styles from './Post.module.css';
import Avatar from './01.jpeg';



const Post = (props) => {
	return (
		<div className={styles.post}>
			<div className={styles.item}>
				<img src={Avatar} alt="" className={styles.img} />
				<p className={styles.text}>{props.message}</p>
			</div>
			<p className={styles.like}>Like: {props.like}</p>
		</div>
	)
}

export default Post;