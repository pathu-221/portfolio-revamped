import Navbar from "@/components/Navbar";
import AnimationStopper from "@/components/animation/AnimationStopper";
import type { FC } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = () => {
	return (
		<>
			<main className="main-page flex items-center justify-center overflow-x-hidden">
				<section className="flex flex-col items-center text-justify w-screen pt-[-80px]">
					<h1 className="font-bold font-satoshi-bold text-3xl mb-4 text-primary text-left w-3/4">
						Contact Me
					</h1>
					<div className="w-3/4 grid md:grid-cols-4 gap-2 grid-cols-2">
						{/* flex gap-3 rounded flex-wrap md:flex-nowrap */}
						<div className="contact-card text-6xl text-light-highlight">
							<FaGithub />
						</div>
						<div className="contact-card text-6xl text-light-highlight">
							<FaLinkedin />
						</div>
						<div className="contact-card text-6xl text-light-highlight">
							<IoMdMail />
						</div>
						<div className="contact-card text-6xl text-light-highlight">
							<FaGithub />
						</div>
					</div>
				</section>
				<AnimationStopper />
			</main>
		</>
	);
};

export default AboutPage;
