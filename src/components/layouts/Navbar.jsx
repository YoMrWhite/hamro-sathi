import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.png';

function Navbar() {
	const [open, setOpen] = useState(false);
	const handleClick = () => setOpen(!open);

	return (
		<nav className="w-full fixed top-0 left-0 bg-black text-white text-base font-normal z-10 flex items-center justify-between py-3 px-8 md:flex-col md:py-1 lg:flex-row lg:py-0">
			<Link to="/" className="flex items-center md:mb-2 z-10 lg:mt-1">
				<img className="w-[80px] md:mb-2 lg:mb-0" src={Logo} alt="Logo Image" />
			</Link>

			<div
				onClick={handleClick}
				className="absolute right-4 top-7 cursor-pointer lg:hidden"
			>
				{!open ? (
					<FaBars size={20} className="cursor-pointer" />
				) : (
					<FaTimes size={20} className="cursor-pointer" />
				)}
			</div>

			<ul
				className={`w-full flex flex-col items-start bg-black absolute top-12 left-0 mt-3 pl-4  md:items-center md:pl-0 lg:static lg:flex lg:flex-row lg:justify-end lg:mb-4 ${
					open ? 'top-0' : 'hidden'
				}`}
			>
				<li className="my-3 md:my-2 lg:mx-3 lg:mt-3">
					<Link
						className="text-white hover:text-gray-400 duration-300"
						to="/"
						onClick={handleClick}
					>
						Home
					</Link>
				</li>
				<li className="my-3 md:my-2 lg:mx-3 lg:mt-3">
					<Link
						className="text-white hover:text-gray-400 duration-200"
						to="/hotels"
						onClick={handleClick}
					>
						Book a Hotel
					</Link>
				</li>
				<li className="my-3 md:my-2 lg:mx-3 lg:mt-3">
					<Link
						className="text-white hover:text-gray-400 duration-200"
						to="/vehicles"
						onClick={handleClick}
					>
						Book / Rent Vehicle
					</Link>
				</li>
				<li className="my-3 md:my-2 lg:mx-3 lg:mt-3">
					<Link
						className="text-white hover:text-gray-400 duration-200"
						to="/guides"
						onClick={handleClick}
					>
						Hire a Guide
					</Link>
				</li>
				<li className="my-3 md:my-2 lg:mx-3 lg:mt-3">
					<Link
						className="text-white hover:text-gray-400 duration-300"
						to="/"
						onClick={handleClick}
					>
						Login/Register
					</Link>
				</li>
				<li className="my-3 md:my-2 lg:mx-3 lg:mt-3">
					<Link
						className="text-white hover:text-gray-400 duration-300"
						to="/"
						onClick={handleClick}
					>
						Gallery
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
