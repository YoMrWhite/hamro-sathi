import React from 'react';

function CircleImg({ hotel }) {
	return (
		<iframe
			className="rounded-md h-[400px] lg:h-[568px]"
			width="100%"
			src={hotel.circleImg}
		></iframe>
	);
}

export default CircleImg;
