import Link from "next/link";
import { type FC } from "react";
import { GoHomeFill } from "react-icons/go";
import Menu from "@/components/Menu";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
	return (
		<nav className="flex absolute top-0 left-0 z-10 w-full bg-whie items-center justify-between h-16 px-10">
			<Link href={"/"}>
				<GoHomeFill className="text-light cursor-pointer" size={"1.5em"} />
			</Link>
			<Menu />
		</nav>
	);
};

export default Navbar;
