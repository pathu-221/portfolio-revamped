import ProjectOverview from "@/components/ProjectOverview";
import AnimationStopper from "@/components/animation/AnimationStopper";
import { type FC } from "react";

interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = () => {
	return (
		<>
			<main className="main-page h-screen min-h-screen w-screen flex items-center justify-center overflow-x-hidden py-5 ">
				<section className="text-left w-full min-h-full flex flex-col md:p-0 overflow-hidden">
					<aside className="text-center mt-48">
						<h1 className="text-light font-bold text-3xl">Projects</h1>
					</aside>
					<div className="mt-5 h-full grid grid-cols-3 gap-4 p-3 ">
						<ProjectOverview />
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

export default AboutPage;
