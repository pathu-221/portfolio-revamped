import { Metadata } from "next";
import dynamic from "next/dynamic";
import { type FC } from "react";

interface AboutPageProps {}
const About = dynamic(() => import("@/components/client/About"), {
	ssr: false,
});

const AboutPage: FC<AboutPageProps> = () => {
	return <About />;
};
export const metadata: Metadata = {
	title: "About | Pratham Aggarwal",
};
export default AboutPage;
