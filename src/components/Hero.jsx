// import React from "react";
import tick from "../assets/tick2.svg";

import Form from "./Form";

const Hero = () => {
	return (
		<div
			className="flex md:flex-row flex-col justify-between items-center gap-10 md:gap-10 lg:gap-28 max-w-7xl mx-auto md:px-10 px-0 md:py-20 pt-8 pb-14"
			id="hero"
		>
			<div className=" flex flex-col justify-center md:items-start items-center text-center md:text-left gap-4 px-5 md:px-0">
				<div className="md:text-[55px] text-[45px] font-semibold md:leading-[60px] leading-[55px]  ">
					Empowering Entrepreneurs With{" "}
					<span className="text-blue-600">Financial Support</span>
				</div>
				<div className="md:text-xl text-lg mt-2">
					Every business needs capital to grow and we ensure you get the best of
					what you need. Whether you are launching or expanding your business,
					we pledge to give you best business loan offers.
				</div>
				<div>
					<div className="flex flex-row justify-start items-center gap-1.5">
						<img src={tick} alt="tick" className="w-5" />
						<span className="md:text-[20px] text-[15px] font-semibold">
							No Application Fee
						</span>
					</div>
					<div className="flex flex-row justify-start items-center gap-1.5">
						<img src={tick} alt="tick" className="w-5" />
						<span className="md:text-[20px] text-[15px] font-semibold">
							Approved in Less than 24 Hours
						</span>
					</div>
					<div className="flex flex-row justify-start items-center gap-1.5">
						<img src={tick} alt="tick" className="w-5" />
						<span className="md:text-[20px] text-[15px] font-semibold">
							No Upfront Costs
						</span>
					</div>
				</div>
			</div>
			<div className="lg:w-[497px] w-auto">
				<Form />
			</div>
		</div>
	);
};

export default Hero;
