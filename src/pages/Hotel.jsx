import { useParams } from 'react-router-dom';
import Carousel from '../components/shared/Carousel';
import HotelDetails from '../components/HotelDetails';
import CircleImg from '../components/shared/CircleImg';

function Hotel({ hotels }) {
	const params = useParams();

	const hotel = hotels.find((item, index) => {
		return item.id === Number(params.id);
	});

	const slides = [...hotel.img];

	return (
		<div>
			<section className="max-w-[1400px] mx-auto mt-[80px] px-3 py-3 grid md:grid-cols-1fr lg:grid-cols-2fr-1fr gap-2">
				<Carousel>
					{slides.map((slide, index) => (
						<img
							key={index}
							src={slide}
							className="w-full h-full object-cover"
						/>
					))}
				</Carousel>
				<div className="">
					<CircleImg hotel={hotel} />
				</div>
			</section>
			<HotelDetails hotel={hotel} />
		</div>
	);
}

export default Hotel;
