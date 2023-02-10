import { useParams } from 'react-router-dom';
import Carousel from '../components/shared/Carousel';
import HotelDetails from '../components/HotelDetails';
import CircleImg from '../components/shared/CircleImg';

function Hotel({ hotels }) {
	const params = useParams();

	const hotel = hotels.find((item, index) => {
		return item.id === Number(params.id);
	});

	return (
		<div>
			<section className="grid grid-cols-1 w-full lg:w-[1400px] lg:mx-auto lg:mt-[70px] lg:grid-cols-2fr-1fr gap-0 lg:gap-2">
				<Carousel hotel={hotel} />
				<div className="mt-0 lg:mt-4">
					<CircleImg hotel={hotel} />
				</div>
			</section>
			<HotelDetails hotel={hotel} />
		</div>
	);
}

export default Hotel;
