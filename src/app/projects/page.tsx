import ProjectOverview from "@/components/ProjectOverview";
import AnimationStopper from "@/components/animation/AnimationStopper";
import { type FC } from "react";

interface ProjectsPageProps {}

const ProjectsPage: FC<ProjectsPageProps> = () => {
	return (
		<>
			<main className="main-page flex items-center justify-center overflow-x-hidden pt-20">
				<section className="flex flex-col items-center text-justify w-screen pt-[-80px]">
					<h1 className="font-bold font-satoshi-bold text-3xl mb-4 text-primary text-left w-3/4">
						Projects
					</h1>
					<div className="text-light w-3/4 flex flex-wrap gap-4">
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
