"use client";
import { useState, type FC } from "react";
import { FaGithub, FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import {
	useSpring,
	animated,
	useIsomorphicLayoutEffect,
} from "@react-spring/web";
import Carousel from "./Carousel";
import { Project } from "@/data/projects-data";
import AnimatedButton from "./AnimatedButton";

interface ProjectOverviewProps {
	item: Project;
	onClick: Function;
}

const ProjectOverview: FC<ProjectOverviewProps> = ({ item, onClick }) => {
	const [style, api] = useSpring(() => {
		return {
			from: {
				opacity: 0,
				transform: "translateY(100%)",
			},
			enter: { opacity: 1, transform: "translateY(0%)" },
			delay: 750,
		};
	});
	useIsomorphicLayoutEffect(() => {
		api.start({
			from: { transform: "translateY(100%)" },
			to: { opacity: 1, transform: "translateY(0%)" },
			delay: 750,
		});
	}, []);
	return (
		<animated.div
			style={style}
			className="w-4/5  border-b border-b-primary rounded-t-lg overflow-hidden lg:min-w-[49%] lg:max-w-[49%] md:w-[50%] flex-grow lg:rounded-lg lg:bg-dark-highlight lg:border-none"
		>
			<Carousel images={item.images} />
			<div className="p-3 flex flex-col gap-2">
				<div className="w-full flex items-center md:items-start lg:items-center justify-between flex-col lg:flex-row gap-2">
					<h5 className="text-base font-satoshi-bold text-light flex-[.5] flex-grow">
						{item.title}
					</h5>
					<span
						onClick={() => onClick()}
						className="flex items-center gap-1 text-xs text-primary hover:text-light cursor-pointer"
					>
						View more <FaAngleRight />
					</span>
				</div>
				{/* <p className="text-xs text-light-highlight">{item.description || ""}</p> */}
				{/* <span className="flex items-center w-full justify-between  text-opacity-80 text-xs text-primary">
					<a
						target="_blank"
						href={item.github}
						className="flex items-center gap-2"
					>
						<FaGithub />
						<p>Github</p>
					</a>
					<a
						target="_blank"
						href={item.live}
						className="flex items-center gap-2"
					>
						<FiExternalLink />
						<p>Live</p>
					</a>
				</span> */}
			</div>
		</animated.div>
	);
};
export default ProjectOverview;
