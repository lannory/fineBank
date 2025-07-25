import './SideProfile-module.scss';


export default function SideProfile (){
	return <div className="profile-wrapper">
		<button className="logout-btn">
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
				<path d="M8.33337 14.1667L12.5 10L8.33337 5.83334" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M12.5 10H2.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
			<p>Logout</p>
		</button>
		<div className="profile">
			<img src="/profile.svg" alt="" />
			<div className="profile-text">
				<h4 className="profile-title">Tanzir Rahman</h4>
				<a className="profile-link">View profile</a>
			</div>
			<div className="profile-svg">
				<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
					<circle cx="2" cy="2" r="2" fill="white"/>
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
					<circle cx="2" cy="2" r="2" fill="white"/>
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
					<circle cx="2" cy="2" r="2" fill="white"/>
				</svg>
			</div>
		</div>
	</div>
}