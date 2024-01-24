"use client";
import AnimatedLetters from "@/components/animation/AnimatedLetters";
import AnimationStopper from "@/components/animation/AnimationStopper";
import { type FC } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { animated, useTransition } from "@react-spring/web";

interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = () => {
	const items = [<FaGithub />, <FaLinkedin />, <IoMdMail />, <FaGithub />];
	const contactAnimation = useTransition(items, {
		from: {
			opacity: 0,
			transform: "translateX(150%)",
		},
		enter: {
			opacity: 1,
			transform: "translateX(0)",
		},
		trail: 100,
		delay: 750,
	});
	return (
		<>
			<main className="main-page flex items-center justify-center overflow-x-hidden">
				<section className="flex flex-col items-center text-justify w-screen pt-[-80px]">
					<h1 className="font-bold font-satoshi-bold text-3xl mb-4 text-primary text-left w-3/4 flex overflow-hidden">
						<AnimatedLetters text="Contact Me" />
					</h1>
					<div className="w-3/4 grid md:grid-cols-4 gap-2 grid-cols-2">
						{contactAnimation((styles, item, _, index) => (
							<animated.div
								className="contact-card w-full aspect-square text-6xl text-light-highlight"
								style={styles}
							>
								{item}
							</animated.div>
						))}
						{/* <div className="flex overflow-hidden">
							<div className="contact-card text-6xl text-light-highlight">
								<FaGithub />
							</div>
						</div>
						<div className="contact-card text-6xl text-light-highlight">
							<FaLinkedin />
						</div>
						<div className="contact-card text-6xl text-light-highlight">
							<IoMdMail />
						</div>
						<div className="contact-card text-6xl text-light-highlight">
							<FaGithub />
						</div> */}
					</div>
				</section>
				<AnimationStopper />
			</main>
		</>
	);
};

export default AboutPage;
