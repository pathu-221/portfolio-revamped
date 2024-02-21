import { type FC, useState } from "react";
import { FaGithub, FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { useSpring, animated } from "@react-spring/web";
interface CarouselProps {
	images: string[];
}

const Carousel: FC<CarouselProps> = ({ images }) => {
	const [index, setIndex] = useState(0);

	const nextSlide = () => {
		setIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};
	const prevSlide = () => {
		setIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};
	const { x } = useSpring({
		x: index * -100,
		// config: { mass: 5, tension: 350, friction: 40 },
	});

	return (
		<div className="w-full relative overflow-hidden">
			<animated.div
				style={{
					display: "flex",
					transform: x.interpolate((x) => `translate3d(${x}%,0,0)`),
				}}
				className="w-full flex"
			>
				{images.map((image, i) => (
					<img key={i} src={image} className="" />
				))}
			</animated.div>
			<button
				onClick={() => nextSlide()}
				className="absolute top-1/2 -translate-y-1/2 right-3 z-50 text-primary hover:bg-primary hover:text-light hover:bg-opacity-100 transition-all duration-300 p-2 bg-dark-shade-2 bg-opacity-10 rounded-full "
			>
				<FaAngleRight />
			</button>
			<button
				onClick={() => prevSlide()}
				className="absolute top-1/2 -translate-y-1/2 left-3 z-50 text-primary hover:bg-primary hover:text-light hover:bg-opacity-100 transition-all duration-300 p-2 bg-dark-shade-2 bg-opacity-10 rounded-full "
			>
				<FaAngleLeft />
			</button>
		</div>
	);
};

export default Carousel;
