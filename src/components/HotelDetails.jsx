import { FaLocationArrow, FaWifi, FaParking } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { MdCleaningServices } from 'react-icons/md';
import { Store } from 'react-notifications-component';

function HotelDetails({ hotel }) {
	const handleBook = () => {
		Store.addNotification({
			title: 'Your booking has been placed.',
			type: 'success',
			container: 'top-right',
			dismiss: {
				duration: 2000,
				onScreen: true,
				pauseOnHover: true,
			},
			animationOut: ['animate__animated animate__fadeOut'],
		});
	};

	return (
		<section className="mt-7">
			<div className="w-full px-5 lg:w-[1300px] mx-auto">
				<div className="flex items-center justify-between">
					<h1 className="text-2xl font-bold py-2 lg:text-3xl">{hotel.title}</h1>
					<div className="flex ml-4">
						<AiFillStar className="text-2xl text-yellow-300 lg:text-3xl cursor-pointer" />
						<AiFillStar className="text-2xl text-yellow-300 lg:text-3xl cursor-pointer" />
						<AiFillStar className="text-2xl text-yellow-300 lg:text-3xl cursor-pointer" />
						<AiFillStar className="text-2xl text-yellow-300 lg:text-3xl cursor-pointer" />
						<AiFillStar className="text-2xl text-yellow-300 lg:text-3xl cursor-pointer" />
					</div>
				</div>
				<p className="flex items-center">
					<FaLocationArrow />
					<span className="ml-3 font-semibold">{hotel.location}</span>
				</p>
				<div className="my-4">
					<p className="font-semibold text-2xl">Rs {hotel.price}</p>
					<p className="text-xl mt-4 text-justify">{hotel.description}</p>
				</div>
				<div className="my-6 text-center md:text-left lg:text-left">
					<h2 className="text-2xl font-semibold">Hotel Highlights</h2>
					<div className="flex flex-col my-4 md:items-start items-center lg:flex-row">
						<div className="flex items-center mr-8">
							<FaWifi size={30} />
							<h3 className="text-lg font-medium ml-3">Free Wifi</h3>
						</div>
						<div className="flex items-center my-5 lg:my-0 lg:mx-8">
							<FaParking size={30} />
							<h3 className="text-lg font-medium ml-3">Free Parking</h3>
						</div>
						<div className="flex items-center lg:ml-8">
							<MdCleaningServices size={30} />
							<h3 className="text-lg font-medium ml-3">Room Service</h3>
						</div>
					</div>
				</div>
				<div className="w-[400px] my-8 flex flex-col items-center ml-5 md:ml-0 md:items-start lg:ml-0 lg:items-start">
					<button
						className="w-[80%] bg-black text-white py-2 px-3 font-semibold rounded-md hover:bg-black/70"
						onClick={handleBook}
					>
						Book Now
					</button>
				</div>
			</div>
		</section>
	);
}

export default HotelDetails;
