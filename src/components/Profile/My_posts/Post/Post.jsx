import styles from './Post.module.css';



const Post = (props) => {
	return (
		<div className={styles.post}>
			<p className={styles.item}>{props.message}</p>
			<p className={styles.like}>Like: {props.like}</p>
		</div>
	)
}

export default Post;