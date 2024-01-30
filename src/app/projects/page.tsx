"use client";
import HomePageButtons from "@/components/HomePageButtons";
import Links from "@/components/Links";
import ProjectOverview from "@/components/ProjectOverview";
import AnimatedLetters from "@/components/animation/AnimatedLetters";
import AnimationStopper from "@/components/animation/AnimationStopper";
import { type FC } from "react";

interface ProjectsPageProps {}

const ProjectsPage: FC<ProjectsPageProps> = () => {
	return (
		<>
			<main className="main-page flex items-center justify-center overflow-x-hidden pt-20">
				<section className="flex flex-col items-center text-justify w-screen pt-[-80px] p-5">
					<h1 className="font-bold font-satoshi-bold text-3xl mb-4 text-primary text-left md:w-3/4 flex overflow-hidden">
						<AnimatedLetters text="Projects" />
					</h1>
					<div className="text-light md:w-3/4 flex flex-wrap  lg:gap-4 gap-2 h-full items-center justify-center overflow-hidden">
						<ProjectOverview />
						<ProjectOverview />
						<ProjectOverview />
					</div>
				</section>
				<AnimationStopper />
			</main>
		</>
	);
};

export default ProjectsPage;
