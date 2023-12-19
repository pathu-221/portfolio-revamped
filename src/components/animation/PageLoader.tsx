"use client";
import { useRouteChange } from "@/contexts/RouteChangedContext";
import { animated, useTransition } from "@react-spring/web";

import type { FC } from "react";

interface PageLoaderProps {
	active?: boolean;
}

const PageLoader: FC<PageLoaderProps> = () => {
	const { state } = useRouteChange();
	const transitions = useTransition(state.isRouteChanged, {
		from: { opacity: 1, transform: "translateY(-100%)", borderRadius: "50%" },
		enter: { opacity: 1, transform: "translateY(0%)", borderRadius: "0%" },
		leave: {
			opacity: 1,
			transform: "translateY(100%)",
			borderRadius: "50%",
		},
	});

	return (
		<main className="p-4 z-50 fixed top-0 left-0  ">
			{transitions(
				(style, value) =>
					value && (
						<animated.nav
							style={style}
							className={
								"h-screen w-screen absolute top-0 left-0 bg-gray-700 flex items-center justify-center gap-5"
							}
						>
							<h1 className="text-3xl font-bold">Loading...</h1>
						</animated.nav>
					)
			)}
		</main>
	);
};

export default PageLoader;
