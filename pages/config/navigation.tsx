import {ReactNode} from "react";

import {BiHomeCircle} from "react-icons/bi";
import {CiHashtag} from "react-icons/ci";
import {IoNotificationsOutline} from "react-icons/io5";
import {BiMessageAltDetail} from "react-icons/bi";
import {FaRegBookmark} from "react-icons/fa6";
import {RiAccountPinCircleLine} from "react-icons/ri";

export interface TwitterSideBarNavigation {
	title: string;
	icon: ReactNode;
}

export const sideBarMenus: TwitterSideBarNavigation[] = [
	{
		title: "Home",
		icon: <BiHomeCircle />,
	},
	{
		title: "Explore",
		icon: <CiHashtag />,
	},
	{
		title: "Notifications",
		icon: <IoNotificationsOutline />,
	},
	{
		title: "Messages",
		icon: <BiMessageAltDetail />,
	},
	{
		title: "Bookmarks",
		icon: <FaRegBookmark />,
	},
	{
		title: "Profile",
		icon: <RiAccountPinCircleLine />,
	},
];
