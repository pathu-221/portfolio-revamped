import Navbar from "@/components/Navbar";
import AnimationStopper from "@/components/animation/AnimationStopper";
import type { FC } from "react";

interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = () => {
	return (
		<>
			<main className="main-page h-screen min-h-screen w-screen flex items-center justify-center">
				<section className="text-left w-full min-h-full h flex flex-col md:flex-row p-10 md:p-0">
					<aside className="md:pt-32 pt-8 text-center md:text-right md:p-8 md:bg-dark-highlight md:min-h-full md:flex-[.25]">
						<h1 className="text-light font-bold text-3xl">About me</h1>
					</aside>
					<div className="md:flex-[.75] md:pt-44 md:p-10 box-border text-justify text-light overflow-x-hidden pt-8">
						<p className="text-sm">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
							aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
							eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
							est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
							velit, sed quia non numquam eius modi tempora incidunt ut labore
							et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
							veniam, quis nostrum exercitationem ullam corporis suscipit
							laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
							vel eum iure r
						</p>
						<br />
						<p>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
							aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
						</p>
					</div>
				</section>
				<AnimationStopper />
			</main>
		</>
	);
};

export default AboutPage;
