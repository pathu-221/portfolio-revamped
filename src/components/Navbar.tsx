"use client";
import Link from "next/link";
import { type FC } from "react";
import { GoHomeFill } from "react-icons/go";
import Menu from "@/components/Menu";
import { useRouteChange } from "@/contexts/RouteChangedContext";
import { usePathname, useRouter } from "next/navigation";
import { FaSun } from "react-icons/fa";
import { Turn as Hamburger } from "hamburger-react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
	const { dispatch, state } = useRouteChange();
	const router = useRouter();
	const pathaname = usePathname();

	return (
		<nav className="flex absolute top-0 left-0 z-10 w-screen items-center justify-between gap-3 px-0 md:px-10 py-5">
			<Menu />

			{/* <div className="flex items-center w-full glass-effect justify-center m-3"> */}
			{/* <div>
				<FaSun className="text-light cursor-pointer" size={"1.5em"} />
			</div> */}
			<div className="w-full flex items-center justify-between">
				<Link
					href={""}
					onClick={() => {
						if (pathaname !== "/") {
							dispatch({
								type: "SET_ROUTE_CHANGED",
								payload: true,
							});
							setTimeout(() => {
								router.push("/");
							}, 1500);
						}
					}}
				>
					<GoHomeFill className="text-light cursor-pointer" size={"1.5em"} />
				</Link>
				<div className="text-light z-50">
					<Hamburger
						onToggle={() => {
							dispatch({ type: "TOGGLE_MENU", payload: !state.menuActive });
						}}
						color="#FBFBFB"
						size={28}
						toggled={state.menuActive}
					/>
				</div>
			</div>
			{/* </div> */}
		</nav>
	);
};

export default Navbar;
