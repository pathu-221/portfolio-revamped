import { Spring, animated, config } from "@react-spring/web";
import { ReactNode, useState } from "react";

interface AnimatedButtonProps {
	children: ReactNode;
	handleClick?: () => any;
}

import type { FC } from "react";

const AnimatedButton: FC<AnimatedButtonProps> = ({ children, handleClick }) => {
	// const [isPressed, setPressed] = useState(false);
	const [pressed, setPressed] = useState(false);
	const [hover, setHover] = useState(false);

	return (
		<Spring
			from={{ scale: 1 }}
			to={{ scale: pressed ? 0.8 : hover ? 1.2 : 1 }}
			config={config.default}
		>
			{(styles) => (
				<animated.button
					style={styles}
					className={"bg-primary rounded px-4 py-2 text-sm"}
					onMouseEnter={() => setHover(true)}
					onMouseDown={() => setPressed(true)}
					onClick={() => {
						setPressed(false);
						if (handleClick) handleClick();
					}}
					onMouseLeave={() => {
						setPressed(false);
						setHover(false);
					}}
				>
					{children}
				</animated.button>
			)}
		</Spring>
	);
};

export default AnimatedButton;
