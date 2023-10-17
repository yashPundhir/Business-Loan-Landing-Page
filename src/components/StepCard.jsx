/* eslint-disable react/prop-types */
// import React from "react";

const StepCard = ({ data, imgSrc, imgClass, divClass }) => {
	return (
		<div
			className={`flex flex-col justify-center items-center gap-5 p-10 border-2 rounded-2xl shadow-2xl ${divClass}`}
		>
			<img src={imgSrc} alt="image" className={`${imgClass}`} />
			<span className={`text-[30px] mt-1 font-semibold `}>{data}</span>
		</div>
		// <div
		// 	className={`flex flex-row justify-center items-center gap-5 p-10 border-2 rounded-2xl ${divClass} shadow-2xl`}
		// >
		// 	<span className={`text-[50px] font-semibold ${numClass}`}>{num}</span>
		// 	<span className={`text-2xl mt-1 font-semibold ${dataClass}`}>{data}</span>
		// </div>
	);
};

export default StepCard;
