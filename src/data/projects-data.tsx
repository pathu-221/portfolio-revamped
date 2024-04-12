import { ReactNode } from "react";
import { IconType } from "react-icons";
import {
	SiDart,
	SiFlutter,
	SiHtml5,
	SiNestjs,
	SiReact,
	SiVite,
} from "react-icons/si";

export interface Project {
	title: string;
	images: string[];
	description: string;
	live: string;
	techStack: ReactNode;
	github: string;
}

export const projectsData: Project[] = [
	{
		title: "ThomasKlitzke - Flutter app",
		images: [
			"images/thomas/thomas 1.png",
			"images/thomas/thomas 2.png",
			"images/thomas/thomas 3.png",
			"images/thomas/thomas 4.png",
			"images/thomas/thomas 5.png",
		],
		description:
			"Flutter app designed for seamless receipt management. Users can effortlessly upload and customize receipts, generating dynamic PDFs with personalized signatures, logos, and recipient details. With streamlined email delivery and features like address updates and multi-recipient support.",
		live: "",
		github: "https://github.com/pathu-221/thomas-flutter-app.git",
		techStack: (
			<>
				<SiFlutter /> <SiNestjs /> <SiDart />
			</>
		),
	},
	{
		title: "Online grocery store",
		images: [
			"images/grocery/grocery 1.png",
			"images/grocery/grocery 2.png",
			"images/grocery/grocery 3.png",
			"images/grocery/grocery 4.png",
			"images/grocery/grocery 5.png",
		],
		description:
			"Designed and developed a user-friendly online grocery ecommerce application tailored for convenience and efficiency. The platform features an extensive product listing, showcasing a variety of groceries for easy browsing. Implemented advanced sorting and filtering functionalities to streamline the shopping experience. Additionally, seamlessly integrated PayPal for secure and hassle-free payments, ensuring a smooth checkout process. The platform also highlights featured products.",
		live: "https://grocery.prathamaggarwal.me",
		github: "https://github.com/pathu-221/grocery-frontend",
		techStack: (
			<>
				<SiReact /> <SiVite /> <SiHtml5 /> <SiNestjs />
			</>
		),
	},
];
