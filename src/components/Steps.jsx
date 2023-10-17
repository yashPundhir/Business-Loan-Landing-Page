// import React from "react";

import StepCard from "./StepCard";
import eligible from "../assets/eligible.png";
import verify from "../assets/img9.jpg";
import funds from "../assets/img12.jpg";

const Steps = () => {
	return (
		<div className="md:py-20 pt-0 pb-20 flex flex-col justify-center items-center gap-10 max-w-7xl px-20 mx-auto">
			<div className="text-[40px] font-semibold text-center md:text-left">
				Get A Loan In <span className="text-blue-600">3 Easy Steps</span>
			</div>
			<div className="flex flex-row justify-center flex-wrap items-center gap-10">
				<StepCard
					num="01"
					data="Check Loan Eligibility"
					imgSrc={eligible}
					imgClass="w-[300px]"
					divClass="max-w-[400px] text-center lg:flex-1"
				/>
				<StepCard
					num="02"
					data="Upload KYC & Verify Bank Document"
					imgSrc={verify}
					imgClass="w-[240px]"
					divClass="max-w-[400px] text-center lg:flex-1"
				/>
				<StepCard
					num="03"
					data="Receive Funds"
					imgSrc={funds}
					imgClass="w-[340px]"
					divClass="max-w-[400px] text-center lg:flex-1"
				/>
			</div>
		</div>
	);
};

export default Steps;
