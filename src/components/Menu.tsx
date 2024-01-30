"use client";
import { useRouteChange } from "@/contexts/RouteChangedContext";
import {
	config,
	animated,
	useChain,
	useSpringRef,
	useTransition,
	easings,
} from "@react-spring/web";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Menu() {
	const router = useRouter();
	const pathaname = usePathname();
	const { dispatch, state } = useRouteChange();

	const navRef = useSpringRef();
	const menuItemsRef = useSpringRef();

	const transitions = useTransition(state.menuActive, {
		from: { opacity: 1, transform: "translateY(-100%)", borderRadius: "20%" },
		enter: { opacity: 1, transform: "translateY(0%)", borderRadius: "0%" },
		leave: {
			opacity: 1,
			transform: "translateY(-100%)",
			borderRadius: "20%",
		},
		config: {
			easing: easings.easeInOutSine,
			duration: 450,
		},
		ref: navRef,
	});

	const items = ["Home", "About", "Projects", "Contact"];

	const itemTransitions = useTransition(state.menuActive ? items : [], {
		from: { opacity: 0, transform: "translateY(100%)" },
		enter: { opacity: 1, transform: "translateY(0px)" },
		leave: { opacity: 0, transform: "translateY(-100%)" },
		config: { mass: 1, tension: 210, friction: 20 },
		ref: menuItemsRef,
		trail: 100,
	});

	useChain(state.menuActive ? [navRef, menuItemsRef] : [menuItemsRef, navRef]);

	const handleNavigate = (link: string) => {
		const route = link.toLowerCase() === "home" ? "/" : link.toLowerCase();
		if (pathaname !== route) {
			dispatch({
				type: "SET_ROUTE_CHANGED",
				payload: true,
			});
			dispatch({
				type: "TOGGLE_MENU",
				payload: false,
			});
			setTimeout(() => {
				router.push(route);
			}, 1500);
		}
	};

	return (
		<div className="text-light ">
			{transitions(
				(style, value) =>
					value && (
						<animated.nav
							style={style}
							className={
								"h-dscreen z-1 absolute w-screen top-0 left-0 bg-primary flex items-center justify-center gap-5"
							}
						>
							<ul className="text-light flex flex-col gap-2 text-3xl tracking-wider translate-y-5 overflow-hidden uppercase  text-center font-satoshi-bold">
								{itemTransitions(
									(styles, item, _, index) =>
										item && (
											<div className="flex overflow-hidden text-center pb-1">
												<animated.li style={styles}>
													<animated.span
														className={`transition-all cursor-pointer group relative `}
														onClick={() => {
															handleNavigate(item);
														}}
													>
														{item}
														<div className="  	absolute top-1/2 h-1 w-0 group-hover:w-full transition-all bg-light"></div>
													</animated.span>
												</animated.li>
											</div>
										)
								)}
							</ul>
						</animated.nav>
					)
			)}
		</div>
	);
}
