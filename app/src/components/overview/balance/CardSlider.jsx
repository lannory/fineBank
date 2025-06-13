import './CardSlider-module.scss';

export default function CardSlider(card = {number: '1111 2222 3333 4444', balance: 0}){
	return  <div className="cardSlider-wrapper">
				<div className="cardSlider">
					<div className="cardSlider-item">
						<div className="card-desc">
							<p className="card-text">Account type</p>
							<h6 className="card-title">Credit Card</h6>
							<p className="card-number">{'1111 2222 3333 4444'}</p>
						</div>
						<div className="card-extras">
							<img src="../../img/Mastercard-Logo.png" alt="" />
							<div className="card-balances">
								<p className="card-balance">${1}</p>
								<div className="card-link">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
										<path d="M4.66669 11.3333L11.3334 4.66667" stroke="#299D91" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
										<path d="M4.66669 4.66667H11.3334V11.3333" stroke="#299D91" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>				
								</div>
								</div>
						</div>
					</div>
				</div>
				<div className="cardSlider-controls">
					<button className="prev"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
						<path d="M10 12L6 8L10 4" stroke="#D1D1D1" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>Previous
					</button>
					<div className="slider-dots">
						<div className="dot dot-active"></div>	
						<div className="dot"></div>	
						<div className="dot"></div>	
					</div>
					<button className="next">Next
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path d="M6 12L10 8L6 4" stroke="#191919" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</button>	
				</div>			
			</div>
}