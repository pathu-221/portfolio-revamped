"use client";
import PageLoader from "@/components/animation/PageLoader";
import { useRouteChange } from "@/contexts/RouteChangedContext";
import {
	animated,
	useChain,
	useSpringRef,
	useTransition,
} from "@react-spring/web";
import { Turn as Hamburger } from "hamburger-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Menu() {
	const [active, setActive] = useState(false);
	const router = useRouter();
	const pathaname = usePathname();
	const { dispatch } = useRouteChange();

	const navRef = useSpringRef();
	const menuItemsRef = useSpringRef();

	const transitions = useTransition(active, {
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

	const itemTransitions = useTransition(active ? items : [], {
		from: { opacity: 0, transform: "translateY(20px)" },
		enter: { opacity: 1, transform: "translateY(0px)" },
		leave: { opacity: 0, transform: "translateY(-20px)" },
		config: { mass: 1, tension: 210, friction: 20 },
		ref: menuItemsRef,
		trail: 100,
	});

	useChain(active ? [navRef, menuItemsRef] : [menuItemsRef, navRef]);

	const [hoveredItem, setHoveredItem] = useState(-1);

	const handleNavigate = (link: string) => {
		const route = link.toLowerCase() === "home" ? "/" : link.toLowerCase();

		if (pathaname != route) {
			setHoveredItem(-1);
			dispatch({
				type: "SET_ROUTE_CHANGED",
				payload: true,
			});
		}
		setTimeout(() => {
			router.push(route);
		}, 1500);
	};

	return (
		<div className="text-light">
			{transitions(
				(style, value) =>
					value && (
						<animated.nav
							style={style}
							className={
								"h-screen w-screen !fixed top-0 left-0 bg-primary flex items-center justify-center gap-5"
							}
						>
							<ul className="text-white flex flex-col gap-5 text-3xl uppercase font-bold font-satoshi-bold text-center">
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
														setActive(false);
														handleNavigate(item);
													}}
												>
													<Link href={""}>{item}</Link>
												</animated.span>
											</animated.li>
										)
								)}
							</ul>
						</animated.nav>
					)
			)}
			<Hamburger
				className="text-light"
				size={28}
				toggled={active}
				toggle={setActive}
			/>
		</div>
	);
}
