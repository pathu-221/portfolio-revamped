"use client";
import AnimatedLetters from "@/components/animation/AnimatedLetters";
import AnimationStopper from "@/components/animation/AnimationStopper";
import { type FC } from "react";
import { animated, useTransition } from "@react-spring/web";
import AnimatedButton from "@/components/AnimatedButton";
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
			<section className="flex flex-col items-center text-justify p-6 lg:p-0">
				<h1 className="font-bold font-satoshi-bold text-3xl mb-4 text-primary text-left md:w-3/4 flex overflow-hidden">
					About me
					{/* <AnimatedLetters text="About me" /> */}
				</h1>
				<div className="text-light md:w-3/4 lg:pl-8 ">
					<div className="flex text-justify flex-col gap-3 mt-3 lg:border-l-light relative lg:border-l-2 lg:pl-3 lg:text-sm text-xs overflow-hidden">
						<p>
							Nor again is there anyone who loves or pursues or desires to
							obtain pain of itself, because it is pain, but because
							occasionally circumstances occur in which toil and pain can
							procure him some great pleasure. To take a trivial example, which
							of us ever undertakes laborious physical exercise, exceptNo one
							rejects, dislikes, or avoids pleasure itself, because it is
							pleasure, but because those who do not know how to pursue pleasure
							rationally encounter consequences that are extremely painful.
						</p>
						<p>
							Nor again is there anyone who loves or pursues or desires to
							obtain pain of itself, because it is pain, but because
							occasionally circumstances occur in which toil and pain can
							procure him some great pleasure. To take a trivial example, which
							of us ever undertakes laborious physical exercise, except to
							obtain some advantage from it? But who has any right to find fault
							with a man who chooses to enjoy a pleasure that has no annoying
							consequences, or one who avoids a pain that produces no resultant
							pleasure
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
