"use client";
import { useState, type FC } from "react";
import AnimatedLetters from "../animation/AnimatedLetters";
import ProjectOverview from "../ProjectOverview";
import AnimationStopper from "../animation/AnimationStopper";

interface ProjectPageProps {}

const ProjectPage: FC<ProjectPageProps> = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<main className="main-page flex items-center justify-center overflow-x-hidden pt-20">
			<section className="flex flex-col items-center text-justify w-screen pt-[-80px] p-4">
				<h1 className="font-bold font-satoshi-bold text-3xl mb-4 text-primary text-left md:w-3/4 flex overflow-hidden">
					<AnimatedLetters text="Projects" />
				</h1>
				<div className="text-light md:w-3/4 flex flex-wrap  lg:gap-4 gap-5 h-full items-center justify-center overflow-hidden">
					<ProjectOverview onClick={() => setShowModal(true)} />
					<ProjectOverview onClick={() => setShowModal(true)} />
					<ProjectOverview onClick={() => setShowModal(true)} />
				</div>
			</section>

			<AnimationStopper />
		</main>
	);
};

export default ProjectPage;
