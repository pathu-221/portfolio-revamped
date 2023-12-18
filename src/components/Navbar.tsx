import type { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
	return (
		<nav className="flex absolute top-0 left-0 z-10 w-full bg-whie items-center justify-start h-16 px-10 border-b border-black">
			<h2 className="text-xl uppercase font-bold font-satoshi-light text-gray-900">
				Pratham Aggarwal
			</h2>
		</nav>
	);
};

export default Navbar;
