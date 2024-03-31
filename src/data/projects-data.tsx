import { ReactNode } from "react";
import { IconType } from "react-icons";
import { SiDart, SiFlutter, SiNestjs } from "react-icons/si";

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
			"Mobile app built with flutter and backend with nest js, where users can add different type of receips/bills and get the generated pdf in their email",
		live: "",
		github: "https://github.com/pathu-221/thomas-flutter-app.git",
		techStack: (
			<>
				<SiFlutter /> <SiNestjs /> <SiDart />
			</>
		),
	},
	// {
	// 	title: "ThomasKlitzke - Flutter app",
	// 	images: [
	// 		"images/thomas/thomas 1.png",
	// 		"images/thomas/thomas 2.png",
	// 		"images/thomas/thomas 3.png",
	// 		"images/thomas/thomas 4.png",
	// 		"images/thomas/thomas 5.png",
	// 	],
	// 	description:
	// 		"Mobile app built with flutter and backend with nest js, where users can add different type of receips/bills and get the generated pdf in their email",
	// 	live: "",
	// 	github: "https://github.com/pathu-221/thomas-flutter-app.git",
	// 	techStack: (
	// 		<>
	// 			<SiFlutter /> <SiNestjs /> <SiDart />
	// 		</>
	// 	),
	// },
	// {
	// 	title: "ThomasKlitzke - Flutter app",
	// 	images: [
	// 		"images/thomas/thomas 1.png",
	// 		"images/thomas/thomas 2.png",
	// 		"images/thomas/thomas 3.png",
	// 		"images/thomas/thomas 4.png",
	// 		"images/thomas/thomas 5.png",
	// 	],
	// 	description:
	// 		"Mobile app built with flutter and backend with nest js, where users can add different type of receips/bills and get the generated pdf in their email",
	// 	live: "",
	// 	github: "https://github.com/pathu-221/thomas-flutter-app.git",
	// 	techStack: (
	// 		<>
	// 			<SiFlutter /> <SiNestjs /> <SiDart />
	// 		</>
	// 	),
	// },
];
