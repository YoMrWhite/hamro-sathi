import Hotel1 from '../components/assets/hotel-1.1.jpeg';
import Hotel1_2 from '../components/assets/hotel-1.2.jpg';
import Hotel1_3 from '../components/assets/hotel-1.3.jpg';
import Hotel2 from '../components/assets/hotel-2.1.jpeg';
import Hotel2_2 from '../components/assets/hotel-2.2.jpg';
import Hotel2_3 from '../components/assets/hotel-2.3.jpg';
import Hotel3 from '../components/assets/hotel-3.1.jpeg';
import Hotel3_2 from '../components/assets/hotel-3.2.jpg';
import Hotel3_3 from '../components/assets/hotel-3.3.jpg';

const HotelData = [
	{
		id: 1,
		title: 'Hotel Shangrilla',
		location: 'Kuri, Kalinchowk',
		price: 1200,
		img: [Hotel1, Hotel1_2, Hotel1_3],
		circleImg:
			'https://momento360.com/e/u/30707d1116b9485a91ccd6e36c549e00?utm_campaign=embed&utm_source=other&heading=11.3&pitch=1&field-of-view=75&size=medium&display-plan=true',
		description: `Shangrila hotel is one of the best hotel in Kuri Bazar. It has two stories 2 buildings and 1 single story with 5 attached bathrooms and 10 normal rooms with 50 people's capacity. We provide you luxurious room, hygienic local foods and drinks with a warm campfire, DJ music, and free WiFi, stunning Himalayan and landscape scenery views.`,
	},
	{
		id: 2,
		title: 'Miracle View Resort',
		location: 'Kuri, Kalinchowk',
		price: 5000,
		img: [Hotel2, Hotel2_2, Hotel2_3],
		circleImg:
			'https://momento360.com/e/u/ec29bbf7f3c5412280bbd08a54afb3a5?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true',
		description: `Miracle View Resort Kalinchowk has a restaurant, bar, a garden and terrace in kalinchowk.. The resort features family rooms. Featuring a private bathroom with a shower and slippers, some accommodations at the resort also feature a balcony. An Asian breakfast is available each morning at Miracle View Resort Kalinchowk. Staff at the accommodation are available to give advice at the 24-hour front desk. Dhulikhel is 49.9 km from Miracle View Resort Kalinchowk.`,
	},
	{
		id: 3,
		title: 'Tripura Resort Pvt Ltd',
		location: 'Kuri, Kalinchowk',
		price: 4500,
		img: [Hotel3, Hotel3_2, Hotel3_3],
		circleImg:
			'https://momento360.com/e/u/2a57320bdf164311b38deb7a83df97c2?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true',
		description: `Tripura resort is only 150 KM from international airport and hotel is vastly spacious, it is spread in 15 acres land. Tripura resort is deliberately positioned on the top of Kuri Bazar hill in Dolakha District, Thus offering the best view of the tremendous show upfront. The spot is unique showcase the nature at her best, catapults its dwellers back to the romantic self and promises of the splendid stay.`,
	},
];

export default HotelData;
