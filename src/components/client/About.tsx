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
				<div className="text-light md:w-3/4 lg:pl-8 ">
					<div className="flex text-justify flex-col gap-3 mt-3 lg:border-l-light relative lg:border-l-2 lg:pl-3 lg:text-sm text-xs overflow-hidden">
						<p className="flex flex-wrap">
							<RevealFromBottom>
								Hello there! I'm a software developer who loves to play with
								React JS, Flutter, Nest JS, and Laravel.
							</RevealFromBottom>
							<RevealFromBottom>
								I create cool mobile apps with Flutter and build web
								applications using tech like Laravel, Nest JS, and Next JS –
								basically, I'm the digital superhero you never knew you needed.
							</RevealFromBottom>
						</p>
						<p>
							<RevealFromBottom>
								When I'm not diving into code, I'm deep into anime marathons and
								devouring interesting articles. Let's make coding fun – one bug
							</RevealFromBottom>
							<RevealFromBottom>
								at a time! I call India home and have a thing for learning from
								the tech gurus. So, whether it's coding or crushing it at the
								gym, I'm always up for an adventure.
							</RevealFromBottom>
							<RevealFromBottom>
								Let's make coding fun – one bug at a time!
							</RevealFromBottom>
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
