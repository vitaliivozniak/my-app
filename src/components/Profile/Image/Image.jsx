import img01 from '../../../img/page/01.png';
import styles from './Image.module.css';



const Image = () => {
	return (
		<div>
			<img src={img01} alt="" className={styles.img} />
		</div>
	)
}

export default Image;