import SideList from "./SideList"
import SideProfile from "./SideProfile"
import './Sidebar-module.scss'


export default function Sidebar (){
	return <aside>
				<SideList/>
				<SideProfile/>
			</aside>
}