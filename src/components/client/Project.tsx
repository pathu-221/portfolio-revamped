"use client";
import { useState, type FC } from "react";
import AnimatedLetters from "../animation/AnimatedLetters";
import ProjectOverview from "../ProjectOverview";
import AnimationStopper from "../animation/AnimationStopper";
import { projectsData } from "@/data/projects-data";

interface ProjectPageProps {}

const ProjectPage: FC<ProjectPageProps> = () => {
	return (
		<main className="main-page flex items-center justify-center overflow-x-hidden pt-20">
			<section className="flex flex-col items-center text-justify w-screen pt-[-80px] p-4">
				<h1 className="font-bold font-satoshi-bold text-3xl mb-4 text-primary text-left md:w-3/4 flex overflow-hidden">
					<AnimatedLetters text="Projects" />
				</h1>
				<div className="text-light md:w-3/4 flex flex-wrap  lg:gap-4 gap-5 h-full items-center justify-center overflow-hidden">
					{projectsData.map((item) => (
						<ProjectOverview item={item} />
					))}
				</div>
			</section>

			<AnimationStopper />
		</main>
	);
};

export default ProjectPage;
