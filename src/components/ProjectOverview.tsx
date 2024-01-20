import { type FC } from "react";
import { TbCategory2 } from "react-icons/tb";
import { FaTags } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

interface ProjectOverviewProps {}

const ProjectOverview: FC<ProjectOverviewProps> = () => {
	return (
		<div className="lg:w-[30%] md:w-[50%] w-full flex-grow bg-black rounded overflow-hidden shadow-2xl cursor-pointer">
			<img src="https://images.unsplash.com/photo-1682687218904-de46ed992b58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8" />
			<div className="p-3">
				<h5 className="mb-2 text-base  font-bold text-light">Lorem ipsum</h5>
				<p className="mb-3 font-normal text-xs text-light-highlight">
					Here are the biggest enterprise technology acquisitions of
				</p>
				<span className="flex items-center w-full justify-between text-light-highlight text-opacity-80 text-xs">
					<div className="flex items-center gap-2">
						<FaGithub />
						<p>Source code</p>
					</div>
					<div className="flex items-center gap-2">
						<FiExternalLink />
						<p>Live</p>
					</div>
				</span>
			</div>
		</div>
	);
};
export default ProjectOverview;
