"use client";
import Links from "@/components/Links";
import AnimatedLetters from "@/components/animation/AnimatedLetters";
import AnimationStopper from "@/components/animation/AnimationStopper";

export default function Home() {
	return (
		<>
			<main className="main-page h-screen w-screen flex items-center justify-center p-3">
				<section className="text-start text-light">
					<div className="flex flex-col text-start gap-2 justify-start items-start font-satoshi">
						<p className="lg:text-xl lg:text-start"></p>
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
					{/* <AnimatedButton /> */}
				</section>
				<AnimationStopper />
			</main>
			<Links />
		</>
	);
}
