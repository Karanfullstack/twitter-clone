import {Inter} from "next/font/google";
const inter = Inter({subsets: ["latin"]});
import {BsTwitter} from "react-icons/bs";

import {sideBarMenus} from "./config/navigation";
export default function Home() {
	return (
		<main className="grid grid-cols-12 w-full h-screen max-w-[1100px] ml-auto mr-auto">
			<aside className="col-span-3">
				<div className=" hover:bg-gray-900 p-3 rounded-full m-4 w-fit cursor-pointer transition-all">
					<BsTwitter className="text-2xl " />
				</div>
				<div className=" ml-3  w-fit tracking-wide ">
					<ul>
						{sideBarMenus.map((menu) => (
							<li
								key={menu.title}
								className="flex justify-start hover:bg-gray-900 duration-200 mb-2 p-2 px-4 rounded-3xl items-center hover:cursor-pointer gap-3"
							>
								<span className="text-md text-xl font-semi-bold">
									{menu.icon}
								</span>
								<span className="text-md font-semi-bold">{menu.title}</span>
							</li>
						))}
					</ul>
				</div>
			</aside>
			<section className="col-span-6 border border-gray-800"></section>
			<aside className="col-span-3"></aside>
		</main>
	);
}
