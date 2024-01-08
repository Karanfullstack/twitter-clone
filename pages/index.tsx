import {Inter} from "next/font/google";
const inter = Inter({subsets: ["latin"]});
import {BsTwitter} from "react-icons/bs";
import Navigation from "./components/Navigation";

export default function Home() {
	return (
		<main className="grid grid-cols-12 max-w-[1100px] w-full h-screen  ml-auto mr-auto">
			<aside className="col-span-3 ">
				{/* Twitter logo */}
				<div className=" hover:bg-gray-900 p-3 rounded-full m-4 w-fit cursor-pointer transition-all">
					<BsTwitter className="text-2xl " />
				</div>
				{/* Sidebar navigation @left */}
				<Navigation />
			</aside>
			<section className="col-span-6 border  border-gray-800"></section>
			<aside className="col-span-3"></aside>
		</main>
	);
}
