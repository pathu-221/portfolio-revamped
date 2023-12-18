import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<main className="main-page h-screen w-screen flex items-center justify-center p-3">
				<section className="text-start text-light">
					<div className="flex flex-col justify-center items-center lg:text-start gap-2 lg:justify-start lg:items-start">
						<p className="lg:text-2xl lg:text-start">Hi,</p>
						<p className="lg:text-3xl lg:text-start">I am Pratham Aggarwal,</p>
						<h1 className="lg:text-8xl text-6xl text-center uppercase">
							Software Developer
						</h1>
						<p className="text-end lg:text-2xl lg:self-end">from India</p>
					</div>
				</section>
			</main>
		</>
	);
}
