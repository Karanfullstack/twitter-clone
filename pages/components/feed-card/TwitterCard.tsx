import Image from "next/image";
import {AiOutlineMessage} from "react-icons/ai";
import {AiOutlineRetweet} from "react-icons/ai";
import {FaRegHeart} from "react-icons/fa";
import {AiOutlineUpload} from "react-icons/ai";

const TwitterCard = (): JSX.Element => {
	return (
		<section className="px-2 border-[0.1px] hover:bg-[#0D0D0D] border-b-0 border-x-0 border-t-gray-800">
			<div className="grid grid-cols-12 px-3  duration-150 cursor-pointer py-3 ">
				<div className=" col-span-1 justify-self-start  ">
					<Image
						src={
							"https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg"
						}
						alt="profile picture"
						width={50}
						height={50}
						className="rounded-full"
					/>
				</div>
				<div className=" col-span-11  pl-3  ">
					<h5 className="text-md">Karan chauhan</h5>
					<p className="text-sm">
						howt to build a twitter clone with nextjs and tailwindcss and
						react-icons with typescript
					</p>
					<div className="flex gap-10 items-center py-4 mt-3 text-md">
						<div>
							<AiOutlineMessage className=" hover:text-gray-500" />
						</div>
						<div>
							<AiOutlineRetweet className=" hover:text-gray-500" />
						</div>
						<div>
							<FaRegHeart className=" hover:text-gray-500" />
						</div>
						<div>
							<AiOutlineUpload className=" hover:text-gray-500" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TwitterCard;
