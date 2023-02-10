import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ReactNotifications } from 'react-notifications-component';
import 'animate.css';
import 'react-notifications-component/dist/theme.css';
import Navbar from './components/layouts/Navbar';
import Showcase from './components/Showcase';
import Carousel1 from './components/assets/kuri.jpg';
import Carousel2 from './components/assets/kuri2.jpg';
import Carousel3 from './components/assets/kuri3.webp';
import HotelList from './pages/HotelList';
import HotelData from './data/HotelData';
import GuideData from './data/GuideData';
import VehicleData from './data/VehicleData';
import Hotel from './pages/Hotel';
import Footer from './components/layouts/Footer';
import Guide from './pages/Guide';
import Vehicle from './pages/Vehicle';

function App() {
	const slides = [Carousel1, Carousel2, Carousel3];

	const [hotel, setHotel] = useState(HotelData);
	const [guide, setGuide] = useState(GuideData);
	const [vehicle, setVehicle] = useState(VehicleData);

	return (
		<>
			<ReactNotifications />
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Showcase slides={slides} />
						</>
					}
				/>
				<Route
					path="/hotels"
					element={
						<>
							<HotelList hotels={hotel} />
						</>
					}
				/>
				<Route
					path="/hotels/:id"
					element={
						<>
							<Hotel hotels={hotel} />
						</>
					}
				/>
				<Route
					path="/vehicles"
					element={
						<>
							<Vehicle vehicles={vehicle} />
						</>
					}
				/>
				<Route
					path="/guides"
					element={
						<>
							<Guide guides={guide} />
						</>
					}
				/>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
