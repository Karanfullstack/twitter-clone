import {Inter} from "next/font/google";
const inter = Inter({subsets: ["latin"]});
import {BsTwitter} from "react-icons/bs";

export default function Home() {
	return (
		<main className="grid grid-cols-12 w-full h-screen max-w-[1100px] ml-auto mr-auto">
			<div className="col-span-3 border border-red-200">
				<div className=" hover:bg-gray-800 p-2 rounded-full m-4 w-fit cursor-pointer transition-all">
					<BsTwitter className="text-2xl " />
				</div>
			</div>
			<div className="col-span-6 border border-gray-700"></div>
			<div className="col-span-3"></div>
		</main>
	);
}
