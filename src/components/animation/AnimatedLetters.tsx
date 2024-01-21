"use client";
import { useTrail, animated, useTransition } from "@react-spring/web";
import { type FC } from "react";

interface AnimatedLettersProps {
	text: string;
}

const AnimatedLetters: FC<AnimatedLettersProps> = ({ text }) => {
	const letters = text.split("");
	const animatedLetters = useTransition(letters, {
		from: { transform: "translateY(100%)" },
		enter: { transform: "translateY(0)" },
		trail: 10,
		delay: 500,
	});

	return animatedLetters((styles, item, _, index) => (
		<animated.span className="whitespace-pre" style={styles}>
			{letters[index]}
		</animated.span>
	));
};

export default AnimatedLetters;
