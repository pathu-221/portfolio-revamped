import Navbar from "@/components/Navbar";
import AnimationStopper from "@/components/animation/AnimationStopper";
import type { FC } from "react";

interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = () => {
	return (
		<>
			<main className="main-page h-screen min-h-screen w-screen flex items-center justify-center">
				<section className="text-left w-full min-h-full h flex flex-col md:flex-row p-10 md:p-0">
					<aside className="md:pt-32 pt-8 text-center md:p-8 md:min-h-full md:flex-[.25]">
						<h1 className="text-light font-bold text-3xl">Projects</h1>
					</aside>
				</section>
				<AnimationStopper />
			</main>
		</>
	);
};

export default AboutPage;
