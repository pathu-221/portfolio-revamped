import type { FC } from "react";
import Backdrop from "./Backdrop";
import {
	useIsomorphicLayoutEffect,
	useSpring,
	animated,
	useTransition,
	useSpringRef,
	config,
} from "@react-spring/web";
import { IoClose, IoCloseOutline } from "react-icons/io5";
import Carousel from "../Carousel";
import { FaAngleRight, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import AnimatedButton from "../AnimatedButton";
import { Project } from "@/data/projects-data";

interface ModalProps {
	onClick: Function;
	visible?: boolean;
	project: Project;
}

const Modal: FC<ModalProps> = ({ onClick, visible = false, project }) => {
	const transition = useTransition(visible, {
		from: {
			transform: "scale(0.7)",
			opacity: 0,
		},
		enter: {
			transform: "scale(1)",
			opacity: 1,
		},
		leave: {
			transform: "scale(0.7)",
			opacity: 0,
		},
	});
	return (
		<>
			{transition(
				(style, item) =>
					item && (
						<Backdrop onClick={onClick}>
							<animated.div
								onClick={(e) => {
									e.stopPropagation();
								}}
								style={style}
								className="w-full md:w-3/4  aspect-video rounded-xl bg-black  z-50 text-light flex flex-col gap-1 md:gap-3 p-5"
							>
								<animated.div className="w-full flex items-center justify-between border-b border-primary pb-1 border-opacity-50">
									<h1 className="text-lg md:text-2xl">{project?.title}</h1>
									<button
										onClick={() => onClick()}
										className="text-3xl hover:text-primary"
									>
										<IoCloseOutline />
									</button>
								</animated.div>
								<animated.div className="w-full flex items-center justify-center">
									<div className="w-full md:w-[60%] rounded-lg overflow-hidden">
										<Carousel images={project.images} />
									</div>
								</animated.div>
								<animated.div className="w-full py-3 flex flex-col md:flex-row items-start gap-5  md:items-center justify-between opacity-80">
									<div className="flex gap-2 text-3xl">
										{project?.techStack}
									</div>
									<div className="flex gap-3 items-center text-primary">
										{project.live !== "" && (
											<a
												href={project?.live}
												target="_blank"
												className="flex text-sm items-center font-satoshi hover:text-light cursor-pointer"
											>
												Visit site <FaAngleRight />
											</a>
										)}
										{project.github !== "" && (
											<a
												href={project?.github}
												target="_blank"
												className="flex text-sm items-center font-satoshi hover:text-light cursor-pointer"
											>
												Source code <FaAngleRight />
											</a>
										)}
									</div>
								</animated.div>
								<animated.p className="w-full text-xs opacity-70 text-justify">
									{project?.description}
								</animated.p>
							</animated.div>
						</Backdrop>
					)
			)}
		</>
	);
};

export default Modal;
