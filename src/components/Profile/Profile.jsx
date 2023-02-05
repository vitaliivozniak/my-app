import styles from './Profile.module.css';
import Image from './Image/Image';
import Info from './Info/Info';
import New_post from './New_post/New_post';
import My_posts from './My_posts/My_posts';




const Profile = (props) => {
	return (
		<div className={styles.profile}>
			<Image />
			<Info />
			<New_post addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.profileData.newPostText} />
			<My_posts postData={props.profileData.postData} />
		</div>
	)
}

export default Profile;