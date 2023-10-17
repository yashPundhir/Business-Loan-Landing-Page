// import React from 'react'
import cardData from "../utils/constants.js";
import Card from "./Card.jsx";

const Features = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-10 md:py-20 pb-20 pt-0 px-20 max-w-7xl mx-auto">
			<div className="text-[40px] font-semibold text-center md:text-left">
				Features & Benefits
			</div>
			<div className="flex flex-row flex-wrap justify-center items-center gap-10">
				{cardData.map((item, index) => (
					<div key={index}>
						<Card img={item.img} data={item.data} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Features;
