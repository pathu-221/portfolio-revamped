import { type FC, type ReactNode } from "react";
import {
	animated,
	useIsomorphicLayoutEffect,
	useSpring,
} from "@react-spring/web";

interface BackdropProps {
	onClick: Function;
	children: ReactNode;
	visible?: boolean;
}

const Backdrop: FC<BackdropProps> = ({
	onClick,
	children,
	visible = false,
}) => {
	const [style, api] = useSpring(() => {
		return {
			from: {
				opacity: 0,
			},
			to: {
				opacity: 1,
			},
			leave: { opacity: 0 },
		};
	});
	// useIsomorphicLayoutEffect(() => {
	// 	api.start({
	// 		from: { opacity: 0 },
	// 		to: { opacity: 1 },
	// 	});
	// }, []);
	return (
		<div
			// style={style}
			onClick={(e) => {
				onClick();
			}}
			className="absolute top-0 left-0 w-screen h-screen bg-black overflow-x-hidden overflow-y-scroll p-5 z-10 bg-opacity-60 flex items-center justify-center"
		>
			{children}
		</div>
	);
};

export default Backdrop;
