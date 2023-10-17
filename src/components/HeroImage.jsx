// import React from 'react'
import heroimage from "../assets/img55.jpg";

const HeroImage = () => {
	return (
		<div className="rounded-lg  md:p-0 pt-14 w-full flex justify-center items-center ">
			<div className="p-4 bg-gray-200 rounded-lg">
				<img
					className="aspect-[3/2] w-fit rounded-lg px-10 py-10  bg-white object-contain lg:aspect-auto lg:h-[550px] lg:object-center"
					// src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
					src={heroimage}
					alt="heroimage"
				/>
			</div>
		</div>
	);
};

export default HeroImage;
