import Navbar from "@/components/Navbar";
import AnimationStopper from "@/components/animation/AnimationStopper";
import type { FC } from "react";

interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = () => {
	return (
		<main className="main-page h-screen min-h-screen flex items-center justify-center bg-gray-100">
			<section className="">
				<h1 className="font-bold font-satoshi-bold text-3xl mb-4">About me</h1>
				<div className="text-light">
					<div className="flex text-justify flex-col gap-3 mt-3">
						<p>
							But I must explain to you how all this mistaken idea of denouncing
							pleasure and praising pain was born and I will give you a complete
							account of the system, and expound the actual teachings of the
							great explorer of the truth, the master-builder of human
							happiness. No one rejects, dislikes, or avoids pleasure itself,
							because it is pleasure, but because those who do not know how to
							pursue pleasure rationally encounter consequences that are
							extremely painful.
						</p>
						<p>
							Nor again is there anyone who loves or pursues or desires to
							obtain pain of itself, because it is pain, but because
							occasionally circumstances occur in which toil and pain can
							procure him some great pleasure. To take a trivial example, which
							of us ever undertakes laborious physical exercise, except to
							obtain some advantage from it? But who has any right to find fault
							with a man who chooses to enjoy a pleasure that has no annoying
							consequences, or one who avoids a pain that produces no resultant
							pleasure
						</p>
					</div>
				</div>
			</section>
			<AnimationStopper />
		</main>
	);
};

export default AboutPage;
