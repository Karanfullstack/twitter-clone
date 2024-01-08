import {sideBarMenus} from "../config/navigation";

const Navigation = () => {
	return (
		<div className=" ml-3 w-fit tracking-wide  ">
			<ul>
				{sideBarMenus.map((menu) => (
					<li
						key={menu.title}
						className="flex justify-start hover:bg-gray-900 duration-200 mb-2 p-2 px-4 rounded-3xl items-center hover:cursor-pointer gap-3"
					>
						<span className="text-md text-xl font-semi-bold">{menu.icon}</span>
						<span className="text-md font-semi-bold">{menu.title}</span>
					</li>
				))}
			</ul>
			<button className=" bg-sky-600 py-2 font-semibold hover:bg-sky-700 rounded-full w-full">
				Tweet
			</button>
		</div>
	);
};

export default Navigation;
