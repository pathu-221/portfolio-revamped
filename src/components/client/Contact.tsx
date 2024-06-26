"use client";
import { type FC } from "react";
import AnimatedLetters from "../animation/AnimatedLetters";
import InteractiveScaleAnimation from "../animation/InteractiveScaleAnimation";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { animated, useTransition } from "@react-spring/web";
import { HiMiniDocumentText } from "react-icons/hi2";
import AnimationStopper from "../animation/AnimationStopper";
interface ContactPageProps {}

const ContactPage: FC<ContactPageProps> = () => {
	const items = [
		{
			link: "https://github.com/pathu-221",
			title: "Github",
			element: <FaGithub />,
		},
		{
			link: "https://www.linkedin.com/in/pratham-aggarwal-48516b120/",
			title: "LinkedIn",
			element: <FaLinkedin />,
		},
		{
			link: "mailto:prathamaggarwal235@gmail.com",
			title: "E Mail",
			element: <IoMdMail />,
		},
		{
			link: "https://drive.google.com/file/d/1cOCMoRm7EYaAeZ3vnsnchZEL-NCbjt5o/view?usp=sharing",
			title: "Resume",
			element: <HiMiniDocumentText />,
		},
	];
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
		<main className="main-page flex items-center justify-center overflow-x-hidden">
			<section className="flex flex-col items-center text-justify w-screen pt-[-80px] p-4">
				<h1 className="font-bold font-satoshi-bold text-3xl mb-4 text-primary text-left md:w-3/4 flex overflow-hidden">
					<AnimatedLetters text="Contact Me" />
				</h1>
				<div className="md:w-3/4 w-full grid md:grid-cols-4 gap-4 grid-cols-2">
					{contactAnimation((styles, item, _, index) => (
						<InteractiveScaleAnimation scaleUp={1.07}>
							<animated.a
								className="contact-card flex flex-col w-full aspect-square text-6xl text-light-highlight"
								style={styles}
								href={item.link}
								target="_blank"
							>
								{item.element}
								<p className="text-base mt-2">{item.title}</p>
							</animated.a>
						</InteractiveScaleAnimation>
					))}
				</div>
			</section>
			<AnimationStopper />
		</main>
	);
};

export default ContactPage;
