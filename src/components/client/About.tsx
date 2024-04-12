"use client";
import { type FC } from "react";
import AnimatedButton from "@/components/AnimatedButton";
import Links from "@/components/Links";
import AnimatedLetters from "@/components/animation/AnimatedLetters";
import AnimationStopper from "@/components/animation/AnimationStopper";
import RevealFromBottom from "@/components/animation/RevealFromBottom";
import { useRouteChange } from "@/contexts/RouteChangedContext";
import { useRouter } from "next/navigation";
interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = () => {
	const paragraph1Words =
		"Hey there! I'm a software developer based in India. I love tinkering with React JS, Flutter, Nest JS, and Laravel to create cool stuff. With Flutter, I build mobile apps, and for web applications, I turn to Laravel, Nest JS, and Next JS. Think of me as your friendly neighborhood coder, here to tackle bugs and make coding a fun adventure!".split(
			" "
		);
	const paragraph2Words =
		'When I\'m not glued to my screen, you can catch me binging anime or getting lost in a good book. "1984" is my top pick; dystopian tales just suck me in.'.split(
			" "
		);
	const paragraph3Words =
		"So, if you're down to chat about coding or swap book recommendations, hit me up! Let's make some magic – whether it's code or on the page.".split(
			" "
		);

	const router = useRouter();
	const { dispatch } = useRouteChange();
	const handleClick = (route: string) => {
		dispatch({
			type: "SET_ROUTE_CHANGED",
			payload: true,
		});
		setTimeout(() => {
			router.push(route);
		}, 1500);
	};

	return (
		<main className="main-page flex items-center justify-center bg-gray-100">
			<section className="flex flex-col items-center text-justify p-4 lg:p-0">
				<h1 className="font-bold font-satoshi-bold text-3xl text-primary text-left md:w-3/4 flex overflow-hidden">
					<AnimatedLetters text="About me" />
				</h1>
				<div className="text-light w-full md:w-3/4 lg:pl-8 ">
					<div className="flex text-justify flex-col gap-3 mt-3 lg:border-l-light lg:border-l-2 lg:pl-3 lg:text-sm text-xs w-full overflow-hidden max-w-full">
						<p className="flex flex-wrap text-justify">
							{paragraph1Words.map((word) => (
								<RevealFromBottom>{`${word} `}</RevealFromBottom>
							))}
						</p>
						<p className="flex flex-wrap text-justify">
							{paragraph2Words.map((word) => (
								<RevealFromBottom>{`${word} `}</RevealFromBottom>
							))}
						</p>
						<p className="flex flex-wrap break-words">
							{paragraph3Words.map((word) => (
								<RevealFromBottom>{`${word} `}</RevealFromBottom>
							))}
						</p>
					</div>
					<div className="w-full flex items-center justify-center mt-3 p-3">
						<RevealFromBottom>
							<div className="w-full p-3">
								<AnimatedButton handleClick={() => handleClick("/projects")}>
									View projects
								</AnimatedButton>
							</div>
						</RevealFromBottom>
					</div>
				</div>
			</section>
			<AnimationStopper />
			<Links />
		</main>
	);
};

export default AboutPage;
