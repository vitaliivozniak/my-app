import React from 'react';
import styles from './New_post.module.css';



const New_post = () => {
	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		alert(text);
	}
	return (
		<div className={styles.newpost}>
			<div className={styles.title}>
				My posts
			</div>
			<div className={styles.textarea}>
				<textarea ref={newPostElement} placeholder="Your news..." className={styles.input}></textarea>
			</div>
			<div className={styles.button}>
				<button onClick={addPost} type="submit" className={styles.btn}>Send</button>
			</div>
		</div>
	)
}

export default New_post;