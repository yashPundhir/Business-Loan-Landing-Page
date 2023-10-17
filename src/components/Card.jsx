/* eslint-disable react/prop-types */
// import React from "react";

const Card = ({ img, data }) => {
	return (
		<div className="p-10 border-2 w-fit rounded-2xl shadow-2xl bg-base-100">
			<div className="flex flex-row justify-center items-center gap-5">
				<img src={img} alt="safe" className="w-10" />
				<h1 className="text-xl font-semibold">{data}</h1>
			</div>
		</div>
	);
};

export default Card;
