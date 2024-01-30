import { useRouteChange } from "@/contexts/RouteChangedContext";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FC } from "react";
import { animated, useTransition } from "@react-spring/web";
const AnimatedButton = dynamic(() => import("@/components/AnimatedButton"), {
	ssr: false,
});

interface HomePageButtonsProps {}

const HomePageButtons: FC<HomePageButtonsProps> = () => {
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
	const buttonAnimation = useTransition(null, {
		from: { transform: "translateY(100%)" },
		enter: { transform: "translateY(0px)" },
		delay: 1000,
	});
	return (
		<div className="flex overflow-hidden w-full items-center justify-center p-3 gap-5">
			{buttonAnimation((styles, item) => (
				<animated.div
					style={styles}
					className="flex overflow-hidden w-full items-center justify-center p-3 gap-5"
				>
					<div className="animate-slide-up delay-700">
						<AnimatedButton handleClick={() => handleClick("/projects")}>
							View projects
						</AnimatedButton>
					</div>

					<div className="animate-slide-up-1">
						<AnimatedButton handleClick={() => handleClick("/about")}>
							About me
						</AnimatedButton>
					</div>
				</animated.div>
			))}
		</div>
	);
};

export default HomePageButtons;
