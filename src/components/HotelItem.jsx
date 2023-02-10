import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Card from './shared/Card';

function HotelItem({ hotel }) {
	return (
		<Card>
			<div className="w-full flex flex-col items-center md:grid md:grid-cols-1fr-2fr lg:grid lg:grid-cols-1fr-2fr ">
				<img className="w-[300px]" src={hotel.img[0]} alt="" />
				<div className="px-0 py-2 md:mx-3 lg:px-4">
					<div className="flex items-center justify-between mb-3">
						<h1 className="text-black text-3xl font-bold ">{hotel.title}</h1>
						<div className="flex ml-4">
							<AiFillStar className="text-2xl text-yellow-300 lg:text-3xl cursor-pointer" />
							<AiFillStar className="text-2xl text-yellow-300 lg:text-3xl cursor-pointer" />
							<AiFillStar className="text-2xl text-yellow-300 lg:text-3xl cursor-pointer" />
							<AiFillStar className="text-2xl text-yellow-300 lg:text-3xl cursor-pointer" />
							<AiFillStar className="text-2xl text-yellow-300 lg:text-3xl cursor-pointer" />
						</div>
					</div>
					<p className="text-justify mb-3">{hotel.description}</p>
					<div className="flex justify-between items-center">
						<p className="text-xl font-semibold">NPR {hotel.price}</p>
						<Link to={`/hotels/${hotel.id}`}>
							<button className="bg-black p-2 rounded-sm text-white hover:bg-black/60">
								Check it out
							</button>
						</Link>
					</div>
				</div>
			</div>
		</Card>
	);
}

export default HotelItem;
