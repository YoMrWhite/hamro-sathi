import HotelItem from '../components/HotelItem';

function HotelList({ hotels }) {
	return (
		<section className="mx-w-[1100px] mx-auto lg:w-[1100px] flex flex-col items-center mt-[100px]">
			{hotels.map((hotel) => (
				<HotelItem key={hotel.id} hotel={hotel} />
			))}
		</section>
	);
}

export default HotelList;
