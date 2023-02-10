import Card from '../components/shared/Card';
import { Store } from 'react-notifications-component';

function Vehicle({ vehicles }) {
	const hanldeAdd = (category) => {
		Store.addNotification({
			title: `${category} is successful. Good luck.`,
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
		<div className="mx-auto lg:w-[1200px] mt-[80px] lg:grid lg:grid-cols-3">
			{vehicles.map((vehicle) => (
				<Card key={vehicle.id}>
					<div className="flex flex-col lg:flex-col md:flex-row">
						<div>
							<img
								className="w-[500px] h-[200px] object-cover"
								src={vehicle.img}
								alt="Guide"
							/>
						</div>
						<div className="mt-3 md:mt-0 md:ml-5 flex flex-col items-start lg:mt-3 lg:ml-0">
							<h1 className="text-2xl font-semibold">{vehicle.name}</h1>
							<p className="text-lg font-medium">Rs {vehicle.price} per day</p>
							<button
								className="bg-black text-white py-2 px-6 mt-3 md:mt-5 hover:bg-black/80 rounded-md"
								onClick={() => hanldeAdd(vehicle.category)}
							>
								{vehicle.category}
							</button>
						</div>
					</div>
				</Card>
			))}
		</div>
	);
}

export default Vehicle;
