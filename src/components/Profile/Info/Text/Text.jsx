import styles from './Text.module.css';


const Text = () => {
	return (
		<div className={styles.text}>
			<p className={styles.name}>Vitalii Vozniak</p>
			<p className={styles.birth}>Date of birth: 3 october</p>
			<p className={styles.city}>City: Krakov</p>
			<p className={styles.education}>Education: </p>
			<p className={styles.website}>Web Site: <a target="_blank" href="https://github.com/vitaliivozniak">https://github.com/vitaliivozniak</a></p>
		</div>
	)
}

export default Text;