import ProjectOverview from "@/components/ProjectOverview";
import AnimationStopper from "@/components/animation/AnimationStopper";
import { type FC } from "react";

interface ProjectsPageProps {}

const ProjectsPage: FC<ProjectsPageProps> = () => {
	return (
		<>
			<main className="main-page h-screen min-h-screen w-screen flex items-center justify-center overflow-x-hidden py-5 ">
				<section className="flex flex-col items-center text-justify">
					<h1 className="font-bold font-satoshi-bold text-3xl mb-4 text-primary text-left w-3/4">
						Projects
					</h1>
					<div className="text-light w-[80%] flex flex-wrap gap-3"></div>
				</section>
				<AnimationStopper />
			</main>
		</>
	);
};

export default ProjectsPage;
