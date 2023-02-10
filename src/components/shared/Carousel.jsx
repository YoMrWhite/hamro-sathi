import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

function Carousel({ hotel }) {
	const slides = [...hotel.img];

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	return (
		<div className="w-full h-[600px] lg:m-auto py-4 relative">
			<div
				style={{
					backgroundImage: `url(${slides[currentIndex]})`,
					objectFit: 'cover',
				}}
				className="w-full h-full bg-center bg-cover duration-500 rounded-md"
			></div>
			{/* Left Arrow */}
			<div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 bg-[#f4f4f4] text-black hover:bg-white hover:text-black cursor-pointer">
				<BsChevronCompactLeft onClick={prevSlide} size={25} />
			</div>
			{/* Right Arrow */}
			<div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 bg-[#f4f4f4] text-black hover:bg-white hover:text-black cursor-pointer">
				<BsChevronCompactRight onClick={nextSlide} size={25} />
			</div>
		</div>
	);
}

export default Carousel;
