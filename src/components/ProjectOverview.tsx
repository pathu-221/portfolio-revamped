"use client";
import { type FC } from "react";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import {
	useSpring,
	animated,
	useIsomorphicLayoutEffect,
} from "@react-spring/web";

interface ProjectOverviewProps {
	item: {
		title: string;
		image: string;
		live: string;
		github: string;
		description?: string;
	};
}

const ProjectOverview: FC<ProjectOverviewProps> = ({ item }) => {
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
			className="w-4/5 border-b border-b-primary rounded-t-lg overflow-hidden shadow-2xl lg:w-[30%] md:w-[50%] flex-grow lg:rounded-lg lg:bg-dark-highlight lg:border-none"
		>
			<img src={item.image} className="rounded-t-lg" />
			<div className="p-3 flex flex-col gap-2">
				<h5 className="text-base font-bold text-light -mb-1">{item.title}</h5>
				<p className="text-xs text-light-highlight">{item.description || ""}</p>
				<span className="flex items-center w-full justify-between  text-opacity-80 text-xs text-primary">
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
				</span>
			</div>
		</animated.div>
	);
};
export default ProjectOverview;
