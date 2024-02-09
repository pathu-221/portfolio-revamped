import { Metadata } from "next";
import dynamic from "next/dynamic";
import { type FC } from "react";

const ProjectPage = dynamic(() => import("@/components/client/Project"), {
	ssr: false,
});

interface ProjectsPageProps {}

const ProjectsPage: FC<ProjectsPageProps> = () => {
	return <ProjectPage />;
};

export const metadata: Metadata = {
	title: "Projects | Pratham Aggarwal",
};

export default ProjectsPage;
