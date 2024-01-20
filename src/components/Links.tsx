import { type FC } from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaMailchimp } from "react-icons/fa6";

interface LinksProps {}

const Links: FC<LinksProps> = () => {
	return (
		<div className="absolute right-0  bottom-10 h-40 mr-5 text-light text-xl w-10 flex flex-col gap-3 justify-center items-center">
			<div>
				<FaLinkedin />
			</div>
			<div>
				<FaGithub />
			</div>
			<div>
				<FaEnvelope />
			</div>
			<div className="flex-grow bg-primary w-[10%]"></div>
		</div>
	);
};

export default Links;
