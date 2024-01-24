"use client";
import AnimatedButton from "@/components/AnimatedButton";
import Links from "@/components/Links";
import AnimatedLetters from "@/components/animation/AnimatedLetters";
import AnimationStopper from "@/components/animation/AnimationStopper";
import { useRouteChange } from "@/contexts/RouteChangedContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
	const { dispatch, state } = useRouteChange();
	const router = useRouter();
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
					<div className="w-full flex mt-3 items-center justify-center gap-5">
						<AnimatedButton handleClick={() => handleClick("/projects")}>
							<Link href="/projects">View projects</Link>
						</AnimatedButton>
						<AnimatedButton handleClick={() => handleClick("/about")}>
							<Link href="/about">About me </Link>
						</AnimatedButton>
					</div>
					{/* <AnimatedButton /> */}
				</section>
				<AnimationStopper />
			</main>
			<Links />
		</>
	);
}
