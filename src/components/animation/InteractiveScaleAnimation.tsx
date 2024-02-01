import { Spring, animated, config } from "@react-spring/web";
import { ReactNode, type FC, useState } from "react";

interface InteractiveScaleAnimationProps {
	children: ReactNode;
	scaleUp?: number;
	scaleDown?: number;
}
const InteractiveScaleAnimation: FC<InteractiveScaleAnimationProps> = ({
	children,
	scaleUp = 1.3,
	scaleDown = 0.8,
}) => {
	const [pressed, setPressed] = useState(false);
	const [hover, setHover] = useState(false);
	return (
		<Spring
			from={{ scale: 1 }}
			to={{ scale: pressed ? scaleDown : hover ? scaleUp : 1 }}
			config={config.default}
		>
			{(styles) => (
				<animated.span
					style={styles}
					onMouseEnter={() => setHover(true)}
					onMouseDown={() => setPressed(true)}
					onClick={() => {
						setPressed(false);
					}}
					onMouseLeave={() => {
						setPressed(false);
						setHover(false);
					}}
				>
					{children}
				</animated.span>
			)}
		</Spring>
	);
};

export default InteractiveScaleAnimation;
