import Navbar from "@/components/Navbar";
import AnimationStopper from "@/components/animation/AnimationStopper";

export default function Home() {
	return (
		<>
			<main className="main-page h-screen w-screen flex items-center justify-center p-3">
				<section className="text-start text-light">
					<div className="flex flex-col justify-center items-center lg:text-start gap-2 lg:justify-start lg:items-start">
						<p className="lg:text-xl lg:text-start"></p>
						<p className="lg:text-xl lg:text-start">
							Hi, <span className="">I am Pratham Aggarwal</span>
						</p>
						<h1 className="lg:text-5xl font-bold text-3xl text-center uppercase font-satoshi lg:tracking-normal sm:tracking-widest text-primary">
							Software Developer
						</h1>
						<p className="text-end lg:text-xl lg:self-end">from India</p>
					</div>
				</section>
				<AnimationStopper />
			</main>
		</>
	);
}
