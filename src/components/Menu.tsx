"use client";
import { useRouteChange } from "@/contexts/RouteChangedContext";
import {
	animated,
	useChain,
	useSpringRef,
	useTransition,
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
	const copyrightTrasitionRef = useSpringRef();

	const transitions = useTransition(state.menuActive, {
		from: { opacity: 1, transform: "translateY(-100%)", borderRadius: "20%" },
		enter: { opacity: 1, transform: "translateY(0%)", borderRadius: "0%" },
		leave: {
			opacity: 1,
			transform: "translateY(-100%)",
			borderRadius: "20%",
		},
		ref: navRef,
	});

	const items = ["Home", "About", "Projects", "Contact"];

	const itemTransitions = useTransition(state.menuActive ? items : [], {
		from: { opacity: 0, transform: "translateY(20px)" },
		enter: { opacity: 1, transform: "translateY(0px)" },
		leave: { opacity: 0, transform: "translateY(-20px)" },
		config: { mass: 1, tension: 210, friction: 20 },
		ref: menuItemsRef,
		trail: 100,
	});

	const copyrightTrasition = useTransition(state.menuActive, {
		from: { opacity: 0, transform: "translateX(-100%)" },
		enter: { opacity: 1, transform: "translateX(0%)" },
		leave: {
			opacity: 0,
			transform: "translateX(-100%)",
		},
	});

	useChain(
		state.menuActive
			? [navRef, menuItemsRef, copyrightTrasitionRef]
			: [menuItemsRef, navRef, copyrightTrasitionRef]
	);

	const [hoveredItem, setHoveredItem] = useState(-1);

	const handleNavigate = (link: string) => {
		const route = link.toLowerCase() === "home" ? "/" : link.toLowerCase();

		if (pathaname != route) {
			setHoveredItem(-1);
			dispatch({
				type: "SET_ROUTE_CHANGED",
				payload: true,
			});
			dispatch({
				type: "TOGGLE_MENU",
				payload: false,
			});
		}
		setTimeout(() => {
			router.push(route);
		}, 1500);
	};

	return (
		<div className="text-light ">
			{transitions(
				(style, value) =>
					value && (
						<animated.nav
							style={style}
							className={
								"h-screen z-1 absolute w-screen top-0 left-0 bg-primary flex items-center justify-center gap-5"
							}
						>
							<ul className="text-white flex flex-col gap-5 text-3xl uppercase text-justify font-bold font-satoshi-bold">
								{itemTransitions(
									(styles, item, _, index) =>
										item && (
											<animated.li
												onMouseEnter={() => setHoveredItem(index)}
												onMouseLeave={() => setHoveredItem(-1)}
												style={styles}
											>
												<animated.span
													className={`transition-all  cursor-pointer ${
														hoveredItem !== index &&
														hoveredItem !== -1 &&
														"opacity-50"
													}`}
													onClick={() => {
														handleNavigate(item);
													}}
												>
													<Link href={""}>{item}</Link>
												</animated.span>
											</animated.li>
										)
								)}
							</ul>
							{copyrightTrasition(
								(styles, value) =>
									value && (
										<animated.div
											style={styles}
											className="absolute bottom-6 left-6 text-sm"
										>
											© Pratham Aggarwal | 2024 All rights reserved
										</animated.div>
									)
							)}
						</animated.nav>
					)
			)}
		</div>
	);
}
