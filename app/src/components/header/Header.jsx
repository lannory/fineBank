import moment from 'moment';
import './Header-module.scss';

export function Header (){

	const date = moment(Date.now()).format('LL')

	return <header>
				<div className="hi-menu">
					<h3 className="header-title">Hello Tanzir</h3>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M13 17L18 12L13 7" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						<path d="M6 17L11 12L6 7" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
					<p className="header-date">{date}</p>
				</div>
				<div className="header-nav">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<g clip-path="url(#clip0_2702_893)">
							<path d="M11.9996 22.8533C12.4196 22.8437 12.8226 22.6858 13.1374 22.4076C13.4521 22.1295 13.6584 21.7489 13.7196 21.3333H10.213C10.2759 21.7602 10.4918 22.1497 10.8205 22.4293C11.1492 22.7089 11.5682 22.8596 11.9996 22.8533Z" fill="#666666"/>
							<path d="M21.8996 18.7534L21.6729 18.5534C21.0299 17.9804 20.467 17.3234 19.9996 16.6C19.4891 15.6017 19.1831 14.5115 19.0996 13.3934V10.1C19.0969 9.70002 19.0612 9.30089 18.9929 8.90671C17.8637 8.67461 16.8493 8.05939 16.1216 7.16524C15.3939 6.27108 14.9975 5.15291 14.9996 4.00005V3.58005C14.3035 3.23751 13.5557 3.01225 12.7863 2.91338V2.07338C12.7863 1.83734 12.6925 1.61096 12.5256 1.44406C12.3587 1.27715 12.1323 1.18338 11.8963 1.18338C11.6602 1.18338 11.4338 1.27715 11.2669 1.44406C11.1 1.61096 11.0063 1.83734 11.0063 2.07338V2.94671C9.28341 3.18975 7.70664 4.04788 6.56708 5.36267C5.42751 6.67746 4.80208 8.36014 4.80626 10.1V13.3934C4.72277 14.5115 4.41678 15.6017 3.90626 16.6C3.44685 17.3216 2.89306 17.9785 2.2596 18.5534L2.03293 18.7534V20.6334H21.8996V18.7534Z" fill="#666666"/>
							<path d="M19.9996 7.33338C21.8405 7.33338 23.3329 5.841 23.3329 4.00005C23.3329 2.1591 21.8405 0.666718 19.9996 0.666718C18.1586 0.666718 16.6663 2.1591 16.6663 4.00005C16.6663 5.841 18.1586 7.33338 19.9996 7.33338Z" fill="#299D91"/>
						</g>
						<defs>
							<clipPath id="clip0_2702_893">
							<rect width="24" height="24" fill="white"/>
							</clipPath>
						</defs>
					</svg>
					<form action="">
						<input type="text" placeholder="Search here" />
						<button type='submit'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#525256" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M21 21L16.65 16.65" stroke="#525256" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg></button>
					</form>
				</div>
			</header>
}