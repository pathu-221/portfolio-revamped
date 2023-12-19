import Navbar from "@/components/Navbar";
import AnimationStopper from "@/components/animation/AnimationStopper";
import type { FC } from "react";

interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = () => {
	return (
		<>
			<main className="main-page h-screen w-screen flex items-center justify-center p-3">
				<h1>Contact</h1>
				<AnimationStopper />
			</main>
		</>
	);
};

export default AboutPage;
