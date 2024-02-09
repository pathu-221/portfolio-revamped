import { Metadata } from "next";
import dynamic from "next/dynamic";
import { type FC } from "react";

const Contact = dynamic(() => import("@/components/client/Contact"), {
	ssr: false,
});

interface ContactPageProps {}

const ContactPage: FC<ContactPageProps> = () => {
	return <Contact />;
};

export const metadata: Metadata = {
	title: "Contact | Pratham Aggarwal",
};
export default ContactPage;
