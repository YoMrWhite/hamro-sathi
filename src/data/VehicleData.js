import Vehicle1 from '../components/assets/jeep.webp';
import Vehicle2 from '../components/assets/car.webp';
import Vehicle3 from '../components/assets/bike.jpg';
import Vehicle4 from '../components/assets/bus.jpg';
import Vehicle5 from '../components/assets/plane.jpg';

const VehicleData = [
	{
		id: 1,
		name: 'Jeep',
		category: 'Rent / Hire',
		price: 4000,
		img: Vehicle1,
	},
	{
		id: 2,
		name: 'Car',
		category: 'Rent / Hire',
		price: 3000,
		img: Vehicle2,
	},
	{
		id: 3,
		name: 'Bike',
		category: 'Rent',
		price: 1200,
		img: Vehicle3,
	},
	{
		id: 4,
		name: 'Bus',
		category: 'Book / Reserve',
		price: 3000,
		img: Vehicle4,
	},
	{
		id: 5,
		name: 'Plane',
		category: 'Book',
		img: Vehicle5,
	},
];

export default VehicleData;
