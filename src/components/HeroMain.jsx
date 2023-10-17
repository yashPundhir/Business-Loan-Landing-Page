// import React from "react";

import Hero from "./Hero";
import HeroImage from "./HeroImage";

const HeroMain = () => {
	return (
		<div className="flex md:flex-col flex-col-reverse justify-center items-center">
			<Hero />
			<HeroImage />
		</div>
	);
};

export default HeroMain;
