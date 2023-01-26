import styles from './My_posts.module.css';
import Post from './Post/Post';

let postData = [
	{ id: 1, text: 'Hey, why nobody love me?', like: '100' },
	{ id: 2, text: "It's our new program! Hey!", like: '150' },
]

let postElements = postData.map(post => <Post message={post.text} like={post.like} />)
const My_posts = () => {
	return (
		<div className={styles.posts}>
			{postElements}
			{/* <Post message={postData[0].text} like={postData[0].like} />
			<Post message={postData[1].text} like={postData[1].like} /> */}
		</div>
	)
}

export default My_posts;