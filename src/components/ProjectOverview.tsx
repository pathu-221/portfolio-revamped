import { type FC } from "react";
import { TbCategory2 } from "react-icons/tb";
import { FaTags } from "react-icons/fa6";

interface ProjectOverviewProps {}

const ProjectOverview: FC<ProjectOverviewProps> = () => {
	return (
		<div className="flex-wrap col-span-1 w-full bg-black overflow-hidden flex flex-col rounded-xl hover:shadow-2xl hover:cursor-pointer max-h-[18rem]">
			<img
				src="https://images.unsplash.com/photo-1682685796063-d2604827f7b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
				className="w-full object-cover aspect-video h-48"
			/>
			<div className="p-3 text-light overflow-hidden text-start">
				<h4 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-norma">
					Example title
				</h4>
				<p className="text-sm py-3 antialiased text-gray-700 flex items-center">
					<span className="flex gap-1 items-center justify-center">
						<TbCategory2 size={16} />
						<span>Full stack appp</span>
					</span>
					<span className="flex gap-1 items-center justify-center ml-16">
						<FaTags size={16} />
						<span>React js</span>
					</span>
				</p>
			</div>
		</div>
	);
};
export default ProjectOverview;
