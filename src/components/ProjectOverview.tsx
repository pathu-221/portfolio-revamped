"use client";
import { type FC } from "react";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { useSpring, animated, useTransition } from "@react-spring/web";

interface ProjectOverviewProps {}

const ProjectOverview: FC<ProjectOverviewProps> = () => {
	const projectAnimation = useTransition(
		{},
		{
			from: {
				opacity: 0,
				transform: "translateY(100%)",
			},
			enter: {
				opacity: 1,
				transform: "translateY(0%)",
			},
			delay: 750,
			trail: 100,
		}
	);
	return projectAnimation((style) => (
		<animated.div
			style={style}
			className="w-4/5 bg-dark-highlight rounded-lg overflow-hidden shadow-2xl cursor-pointer lg:w-[30%] md:w-[50%] flex-grow"
		>
			<img src="https://images.unsplash.com/photo-1682687218904-de46ed992b58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8" />
			<div className="p-3">
				<h5 className="text-base mb-2 font-bold text-light">Lorem ipsum</h5>
				{/* <p className="mb-3 font-normal text-xs text-light-highlight">
					Here are the biggest enterprise technology acquisitions of
				</p> */}
				<span className="flex items-center w-full justify-between  text-opacity-80 text-xs text-primary">
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
		</animated.div>
	));
};
export default ProjectOverview;
