"use client";
import AnimatedButton from "@/components/AnimatedButton";
import AnimatedLetters from "@/components/animation/AnimatedLetters";
import AnimationStopper from "@/components/animation/AnimationStopper";
import RevealFromBottom from "@/components/animation/RevealFromBottom";
import { useRouteChange } from "@/contexts/RouteChangedContext";
import { useRouter } from "next/navigation";
import { type FC } from "react";

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
			<section className="flex flex-col items-center text-justify p-6 lg:p-0">
				<h1 className="font-bold font-satoshi-bold text-3xl mb-4 text-primary text-left md:w-3/4 flex overflow-hidden">
					<AnimatedLetters text="About me" />
				</h1>
				<div className="text-light md:w-3/4 lg:pl-8 ">
					<div className="flex text-justify flex-col gap-3 mt-3 lg:border-l-light relative lg:border-l-2 lg:pl-3 lg:text-sm text-xs overflow-hidden">
						<p className="flex flex-wrap">
							<RevealFromBottom>
								Nor again is there anyone who loves or pursues or desires to
								obtain pain of itself, because it is pain, but because
								occasionally
							</RevealFromBottom>
							<RevealFromBottom>
								circumstances occur in which toil and pain can procure him some
								great pleasure. To take a trivial example, which of us ever
							</RevealFromBottom>
							<RevealFromBottom>
								undertakes laborious physical exercise, exceptNo one rejects,
								dislikes, or avoids pleasure itself, because it is pleasure, but
							</RevealFromBottom>
							<RevealFromBottom>
								because those who do not know how to pursue pleasure rationally
								encounter consequences that are extremely painful.
							</RevealFromBottom>
						</p>
						<p>
							<RevealFromBottom>
								Nor again is there anyone who loves or pursues or desires to
								obtain pain of itself, because it is pain, but because
								occasionally
							</RevealFromBottom>
							<RevealFromBottom>
								circumstances occur in which toil and pain can procure him some
								great pleasure. To take a trivial example, which of us ever
							</RevealFromBottom>
							<RevealFromBottom>
								undertakes laborious physical exercise, exceptNo one rejects,
								dislikes, or avoids pleasure itself, because it is pleasure, but
							</RevealFromBottom>
							<RevealFromBottom>
								because those who do not know how to pursue pleasure rationally
								encounter consequences that are extremely painful.
							</RevealFromBottom>
						</p>
					</div>
					<div className="w-full flex items-center justify-center mt-3">
						<AnimatedButton handleClick={() => handleClick("/projects")}>
							View projects
						</AnimatedButton>
					</div>
				</div>
			</section>
			<AnimationStopper />
		</main>
	);
};

export default AboutPage;
