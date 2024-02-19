import { useTransition, animated } from "@react-spring/web";
import type { FC, ReactNode } from "react";

interface RevealFromBottomProps {
	classNames?: string;
	children: ReactNode;
}

const RevealFromBottom: FC<RevealFromBottomProps> = ({
	classNames,
	children,
}) => {
	const animation = useTransition(null, {
		from: { transform: "translateY(100%)" },
		enter: { transform: "translateY(0px)" },
		delay: 1000,
	});
	return (
		<span className={`${classNames ? classNames : ""} flex overflow-hidden`}>
			{animation((styles, item) => (
				<animated.span className="whitespace-pre" style={styles}>
					{children}
				</animated.span>
			))}
		</span>
	);
};

export default RevealFromBottom;
