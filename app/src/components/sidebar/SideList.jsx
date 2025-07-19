import SidebarItem from "./SidebarItem"
import styles from "./SideList.module.scss"
import { Link, useLocation, useNavigate } from "react-router"


export default function SideList(){

	const location = useLocation();

	const navigate = useNavigate();

	const list = [
		{
			link: '/overview',
			text: 'Overview',
			img: '01',
		},
		{
			link: '/balances',
			text: 'Balance',
			img: '02',
		},
		{
			link: '/transactions',
			text: 'Transactions',
			img: '03',
		},
		{
			link: '/expenses',
			text: 'Expenses',
			img: '05',
		},
		{
			link: '/profit',
			text: 'Profit',
			img: '05',
		},
		{
			link: '/settings',
			text: 'Settings',
			img: '07',
		},
		{
			link: '/items',
			text: 'Items',
			img: '08',
		},
	]

	return <nav className={styles.nav}>
			<div className={styles.logo}>FINEbank.IO</div>
			{list.map(item => <SidebarItem key={item.text} text={item.text} icon={item.img} active={location.pathname === item.link} onClick={() => {navigate(item.link)}}/>)}
		</nav>
}