"use client";
import { useState, type FC, useEffect } from "react";
import AnimatedLetters from "../animation/AnimatedLetters";
import ProjectOverview from "../ProjectOverview";
import AnimationStopper from "../animation/AnimationStopper";
import { Project, projectsData } from "@/data/projects-data";
import Modal from "../modal/Modal";

interface ProjectPageProps {}

const ProjectPage: FC<ProjectPageProps> = () => {
	const [showModal, setShowModal] = useState(false);
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	const changeSelectedProject = (project: Project) => {
		setSelectedProject(project);
	};
	useEffect(() => {}, [selectedProject]);
	return (
		<main className="main-page flex items-center justify-center overflow-x-hidden pt-20">
			<section className="flex flex-col items-center text-justify w-screen pt-[-80px] p-4">
				<h1 className="font-bold font-satoshi-bold text-3xl mb-4 text-primary text-left md:w-3/4 flex overflow-hidden">
					<AnimatedLetters text="Projects" />
				</h1>
				<div className="text-light flex-wrap md:flex-nowrap md:w-3/4 flex lg:gap-4 gap-5 h-full items-center justify-start pb-3 overflow-y-scroll md:overflow-y-hidden md:overflow-x-scroll ">
					{projectsData.map((item) => (
						<ProjectOverview
							onClick={() => {
								window.scrollTo({
									top: 0,
									left: 0,
								});
								setSelectedProject(item);
								setShowModal(true);
							}}
							item={item}
						/>
					))}
				</div>
			</section>
			{selectedProject && (
				<Modal
					project={selectedProject}
					visible={showModal}
					onClick={() => setShowModal(false)}
				/>
			)}

			<AnimationStopper />
		</main>
	);
};

export default ProjectPage;
