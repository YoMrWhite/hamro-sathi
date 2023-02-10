import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function ShowcaseCarousel({ slides }) {
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

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
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
			<div className="flex top-4 justify-center py-2">
				{slides.map((slide, slideIndex) => (
					<div
						key={slideIndex}
						onClick={() => goToSlide(slideIndex)}
						className="text-2xl cursor-pointer"
					>
						<RxDotFilled />
					</div>
				))}
			</div>
		</div>
	);
}

export default ShowcaseCarousel;
