import logo from "../assets/white-logo.png";

const Navbar = () => {
	return (
		<div className="w-full bg-blue-600">
			<div className="flex flex-row justify-between items-center gap-20 md:gap-0 max-w-7xl mx-auto py-2 pr-8 px-12">
				<div className="">
					<img src={logo} alt="logo" className="py-0 w-[90px]" />
				</div>
				<div className="text-white">
					<button className="btn btn-ghost font-semibold capitalize text-lg">
						Contact Us
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
