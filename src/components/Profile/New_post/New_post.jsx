import styles from './New_post.module.css';



const New_post = () => {
	return (
		<div className={styles.newpost}>
			<div className={styles.title}>
				My posts
			</div>
			<div className={styles.textarea}>
				<textarea placeholder="Your news..." className={styles.input}></textarea>
			</div>
			<div className={styles.button}>
				<button type="submit" className={styles.btn}>Send</button>
			</div>
		</div>
	)
}

export default New_post;