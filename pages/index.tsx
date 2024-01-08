import {BsTwitter} from "react-icons/bs"; // Twitter logo
import Navigation from "./components/Navigation"; // Sidebar navigation @left
import TwitterCard from "./components/feed-card/TwitterCard";

export default function Home() {
	return (
		<main className="grid grid-cols-12 max-w-[1100px]   w-full h-screen  ml-auto mr-auto">
			<aside className="col-span-3 -mt-2  flex justify-center   ">
				<div>
					{/* Twitter logo */}
					<div className=" hover:bg-gray-900 p-3 rounded-full m-4 w-fit cursor-pointer transition-all">
						<BsTwitter className="text-2xl " />
					</div>
					{/* Sidebar navigation @left */}
					<Navigation />
				</div>
			</aside>
			<section className="col-span-6 border-[0.1px] border-b-0  border-gray-800 no-scrollbar  overflow-y-scroll">
				<TwitterCard />
				<TwitterCard />
				<TwitterCard />
				<TwitterCard />
				<TwitterCard />
				<TwitterCard />
				<TwitterCard />
				<TwitterCard />
				<TwitterCard />
				<TwitterCard />
				<TwitterCard />
				<TwitterCard />
			</section>
			<aside className="col-span-3"></aside>
		</main>
	);
}
