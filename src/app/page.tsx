"use client";
import Links from "@/components/Links";
import AnimationStopper from "@/components/animation/AnimationStopper";
import { useRouteChange } from "@/contexts/RouteChangedContext";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AnimatedLetters = dynamic(
	() => import("@/components/animation/AnimatedLetters"),
	{ ssr: false }
);

const AnimatedButton = dynamic(() => import("@/components/AnimatedButton"), {
	ssr: false,
});

export default function Home() {
	const { dispatch } = useRouteChange();
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
					<div className="flex overflow-hidden w-full items-center justify-center p-3 gap-5 animate-slide-up delay-700">
						<div className="animate-slide-up delay-700">
							<AnimatedButton handleClick={() => handleClick("/projects")}>
								View projects
							</AnimatedButton>
						</div>

						<div className="animate-slide-up-1">
							<AnimatedButton handleClick={() => handleClick("/about")}>
								<Link href="/about">About me </Link>
							</AnimatedButton>
						</div>
					</div>
					{/* <AnimatedButton /> */}
				</section>
				<AnimationStopper />
			</main>
			<Links />
		</>
	);
}
