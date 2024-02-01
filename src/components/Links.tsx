"use client";

import { Spring, config, animated } from "@react-spring/web";
import { useState, type FC, ReactNode } from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaMailchimp } from "react-icons/fa6";
import InteractiveScaleAnimation from "./animation/InteractiveScaleAnimation";

interface LinksProps {}

const Links: FC<LinksProps> = () => {
	return (
		<div className="absolute right-0  bottom-10 w-40 mr-3 md:mr-10 text-light text-xl flex gap-3 justify-center items-center">
			<InteractiveScaleAnimation>
				<a href="" target="_blank">
					<FaLinkedin />
				</a>
			</InteractiveScaleAnimation>
			<InteractiveScaleAnimation>
				<a href="" target="_blank">
					<FaGithub />
				</a>
			</InteractiveScaleAnimation>
			<InteractiveScaleAnimation>
				<a href="" target="_blank">
					<FaEnvelope />
				</a>
			</InteractiveScaleAnimation>
			<div className="flex-grow bg-primary h-1"></div>
		</div>
	);
};

export default Links;
