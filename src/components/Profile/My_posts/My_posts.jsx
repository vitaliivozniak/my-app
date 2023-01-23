import styles from './My_posts.module.css';
import Post from './Post/Post';



const My_posts = () => {
	return (
		<div className={styles.posts}>
			<Post message='Hey, why nobody love me?' like='100' />
			<Post message="It's our new program! Hey!" like='150' />
		</div>
	)
}

export default My_posts;