import { AiFillStar } from 'react-icons/ai';
import Card from '../components/shared/Card';
import { Store } from 'react-notifications-component';

function Guide({ guides }) {
	const hanldeAdd = () => {
		Store.addNotification({
			title: 'Hiring successful. Good luck.',
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
		<div className="mx-w-[700px] mx-auto lg:w-[1000px] mt-[80px]">
			{guides.map((guide) => (
				<Card key={guide.id}>
					<div className="flex flex-col lg:flex-row md:flex-row">
						<div>
							<img
								className="w-[500px] h-[200px] object-cover"
								src={guide.img}
								alt="Guide"
							/>
						</div>
						<div className="mt-3 md:mt-0 md:px-3 md:ml-3 lg:ml-4">
							<div className="lg:flex items-center justify-between mb-3">
								<h1 className="text-2xl font-semibold lg:flex lg:items-center">
									{guide.name}
									<span className="text-lg font-medium ml-4">
										Rs {guide.price} / day
									</span>
								</h1>
								<div className="flex lg:ml-2">
									<AiFillStar className="text-2xl text-yellow-300 cursor-pointer" />
									<AiFillStar className="text-2xl text-yellow-300 cursor-pointer" />
									<AiFillStar className="text-2xl text-yellow-300 cursor-pointer" />
									<AiFillStar className="text-2xl text-yellow-300 cursor-pointer" />
									<AiFillStar className="text-2xl text-yellow-300 cursor-pointer" />
								</div>
							</div>
							<p className="font-medium mb-2">
								{guide.experience} years of experience
							</p>
							<p className="text-justify">{guide.description}</p>
							<button
								className="bg-black text-white py-2 px-6 mt-3 hover:bg-black/80 rounded-md"
								onClick={hanldeAdd}
							>
								Hire
							</button>
						</div>
					</div>
				</Card>
			))}
		</div>
	);
}

export default Guide;
