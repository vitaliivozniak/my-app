import styles from './My_posts.module.css';
import Post from './Post/Post';



const My_posts = (props) => {
	let postElements = props.postData.map(post => <Post message={post.text} like={post.like} />)
	return (
		<div className={styles.posts}>
			{postElements}
			{/* <Post message={postData[0].text} like={postData[0].like} />
			<Post message={postData[1].text} like={postData[1].like} /> */}
		</div>
	)
}

export default My_posts;