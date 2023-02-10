import { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

function Carousel({
	children: slides,
	autoSlide = false,
	autoSlideInterval = 3000,
}) {
	const [curr, setCurr] = useState(0);

	const prev = () =>
		setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

	const next = () =>
		setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

	useEffect(() => {
		if (!autoSlide) return;
		const slideInterval = setInterval(next, autoSlideInterval);
		return () => clearInterval(slideInterval);
	}, []);

	return (
		<div className="overflow-hidden relative h-[568px] rounded-md">
			<div
				className="flex transition-transform ease-out duration-500"
				style={{ transform: `translateX(-${curr * 100}%)` }}
			>
				{slides}
			</div>
			<div className="absolute inset-0 flex items-center justify-between p-4">
				<button
					onClick={prev}
					className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
				>
					<BsChevronCompactLeft size={40} />
				</button>
				<button
					onClick={next}
					className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
				>
					<BsChevronCompactRight size={40} />
				</button>
			</div>

			<div className="absolute bottom-4 right-0 left-0">
				<div className="flex items-center justify-center gap-2">
					{slides.map((_, i) => (
						<div
							className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? 'p-2' : 'bg-opacity-50'}
            `}
						/>
					))}
				</div>
			</div>
		</div>

		// <div className="w-screen lg:w-[1400px] h-[780px]  py-4 relative">
		// 	<div
		// 		style={{
		// 			backgroundImage: `url(${slides[currentIndex]})`,
		// 			objectFit: 'cover',
		// 			// width: '400px',
		// 		}}
		// 		className="w-full h-full bg-center bg-cover duration-500 rounded-md"
		// 	></div>
		// 	{/* Left Arrow */}
		// 	<div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 bg-[#f4f4f4] text-black hover:bg-white hover:text-black cursor-pointer">
		// 		<BsChevronCompactLeft onClick={prevSlide} size={25} />
		// 	</div>
		// 	{/* Right Arrow */}
		// 	<div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 bg-[#f4f4f4] text-black hover:bg-white hover:text-black cursor-pointer">
		// 		<BsChevronCompactRight onClick={nextSlide} size={25} />
		// 	</div>
		// </div>
	);
}

export default Carousel;
