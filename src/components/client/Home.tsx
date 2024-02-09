"use client";
import { type FC } from "react";
import AnimatedLetters from "../animation/AnimatedLetters";
import HomePageButtons from "../HomePageButtons";
import AnimationStopper from "../animation/AnimationStopper";
import Links from "../Links";

interface HomePageComponentProps {}

const HomePageComponent: FC<HomePageComponentProps> = () => {
	return (
		<main className="main-page w-screen flex items-center justify-center p-3">
			<section className="text-start text-light">
				<div className="flex flex-col text-start gap-2 justify-start items-start font-satoshi">
					<p className="lg:text-xl lg:text-start overflow-hidden flex">
						<AnimatedLetters text="Hi, I am Pratham Aggarwal" />
					</p>
					<h1 className="lg:text-5xl font-bold text-3xl text-center flex uppercase font-satoshi lg:tracking-normal sm:tracking-widest text-primary overflow-hidden">
						<AnimatedLetters text="software developer" />
					</h1>
					<p className="text-end lg:text-xl self-end overflow-hidden flex">
						<AnimatedLetters text="from, India" />
					</p>
				</div>
				<HomePageButtons />
				{/* <AnimatedButton /> */}
			</section>
			<AnimationStopper />
			<Links />
		</main>
	);
};

export default HomePageComponent;
