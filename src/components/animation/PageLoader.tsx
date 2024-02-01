"use client";
import { useRouteChange } from "@/contexts/RouteChangedContext";
import { animated, useTransition } from "@react-spring/web";

import { type FC, useState } from "react";

interface PageLoaderProps {}

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
								"h-dscreen w-screen absolute top-0 left-0 bg-dark-highlight flex items-center justify-center gap-5 text-light"
							}
						>
							<div className="bg-dark-shade-2 loader"></div>
						</animated.nav>
					)
			)}
		</main>
	);
};

export default PageLoader;
