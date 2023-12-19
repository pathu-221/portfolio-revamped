"use client";
import Link from "next/link";
import { type FC } from "react";
import { GoHomeFill } from "react-icons/go";
import Menu from "@/components/Menu";
import { useRouteChange } from "@/contexts/RouteChangedContext";
import { usePathname, useRouter } from "next/navigation";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
	const { dispatch } = useRouteChange();
	const router = useRouter();
	const pathaname = usePathname();
	return (
		<nav className="flex absolute top-0 left-0 z-10 w-full bg-whie items-center justify-between h-16 px-10">
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
			<Menu />
		</nav>
	);
};

export default Navbar;
