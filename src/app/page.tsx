import { Metadata } from "next";
import dynamic from "next/dynamic";
const HomePage = dynamic(() => import("@/components/client/Home"), {
	ssr: false,
});

export default function Home() {
	return (
		<>
			<HomePage />
		</>
	);
}

export const metadata: Metadata = {
	title: "Home | Pratham Aggarwal",
};
