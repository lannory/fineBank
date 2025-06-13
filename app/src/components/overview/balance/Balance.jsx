import CardSlider from "./CardSlider";
import './Balance-module.scss'


export default function Balance (amount = 0){
	return <div className="balance-wrapper">
				<h3 className="balance-title">Total Balance</h3>
				<div className="balance-card-wrapper  overview-top-card">
					<div className="balance-block">
						<h4 className="balance-amount">$ 0</h4>
						<a href="">All Accounts</a>
					</div>
					<CardSlider/>
				</div>
			</div>
}