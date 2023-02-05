import React from 'react';
import styles from './New_post.module.css';



const New_post = (props) => {
	let newPostElement = React.createRef();
	let addPost = () => {
		props.addPost();
	}
	let onPostChage = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}
	return (
		<div className={styles.newpost}>
			<div className={styles.title}>
				My posts
			</div>
			<div className={styles.textarea}>
				<textarea ref={newPostElement} placeholder="Your news..." className={styles.input} value={props.newPostText} onChange={onPostChage}></textarea>
			</div>
			<div className={styles.button}>
				<button onClick={addPost} type="submit" className={styles.btn}>Send</button>
			</div>
		</div>
	)
}

export default New_post;