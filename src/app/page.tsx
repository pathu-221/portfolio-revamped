"use client";
import { useEffect } from "react";
import AnimatedButton from "@/components/AnimatedButton";
import Links from "@/components/Links";
import Navbar from "@/components/Navbar";
import AnimationStopper from "@/components/animation/AnimationStopper";
import {
	animated,
	useSpring,
	useSpringRef,
	useTransition,
	useTrail,
} from "@react-spring/web";

export default function Home() {
	return (
		<>
			<main className="main-page h-screen w-screen flex items-center justify-center p-3">
				<section className="text-start text-light">
					<div className="flex flex-col text-start gap-2 justify-start items-start font-satoshi">
						<p className="lg:text-xl lg:text-start"></p>
						<p className="lg:text-xl lg:text-start">
							Hi, <span className="">I am Pratham Aggarwal</span>
						</p>
						<div className="overflow-hidden">
							<h1 className="lg:text-5xl font-bold text-3xl text-center uppercase font-satoshi lg:tracking-normal sm:tracking-widest text-primary">
								Software Developer
							</h1>
						</div>
						<p className="text-end lg:text-xl self-end">from India</p>
					</div>
					{/* <AnimatedButton /> */}
				</section>
				<AnimationStopper />
			</main>
			<Links />
		</>
	);
}
