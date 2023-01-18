import img01 from '../img/page/01.png';
import avatar from '../img/page/02.jpg';


const Profile = () => {
	return (
		<div className="content-page">
			<div className="content-page__img">
				<img src={img01} alt="" />
			</div>
			<div className="content-page-info">
				<div className="content-page-info__avatar">
					<img src={avatar} alt="" />
				</div>
				<div className="content-page-info-text">
					<p className="content-page-info-text__name">Vitalii Vozniak</p>
					<p className="content-page-info-text__birth">Date of birth: 3 october</p>
					<p className="content-page-info-text__city">City: Krakov</p>
					<p className="content-page-info-text__education">Education: </p>
					<p className="content-page-info-text__website">Web Site: <a target="_blank" href="https://github.com/vitaliivozniak">https://github.com/vitaliivozniak</a></p>
				</div>
			</div>
			<div className="content-page-feed">
				<div className="content-page-feed__header">
					My posts
				</div>
				<div className="content-page-feed__textarea">
					<textarea placeholder="Your news..." className="input"></textarea>
				</div>
				<div className="content-page-feed__button">
					<button type="submit" className="content-page-feed__btn btn">Send</button>
				</div>
				<div className="content-page-feed-footer">
					<p className="content-page-feed-footer__1">Hey, why nobody love me?</p>
					<p className="content-page-feed-footer__2">It's our new program! Hey!</p>
				</div>
			</div>
		</div>
	)
}

export default Profile;