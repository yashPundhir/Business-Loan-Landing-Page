// import React from 'react'
import lock from "../assets/lock.svg";

const Form = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-8 border-2 md:px-10 md:py-8 p-5 rounded-[20px] bg-base-100 shadow-2xl lg:w-[500px] md:w-[380px] sm:w-[497px] xs:w-[350px] w-[320px]">
			<div className="uppercase text-[32px] font-bold text-center">
				Get A <span className="text-blue-600">Business Loan</span>
			</div>
			<div className="flex flex-col justify-center items-center gap-4">
				<input
					type="text"
					placeholder="Full Name (As per PAN)"
					className="input input-bordered w-full"
				/>
				<input
					type="email"
					placeholder="Email Address"
					className="input input-bordered w-full"
				/>
				<input
					type="number"
					placeholder="Mobile Number"
					className="input input-bordered w-full"
				/>

				<div className="form-control w-full ">
					<label className="label pt-0">
						<span className="label-text text-black dark:text-white text-base">
							Is your business GST registered?
						</span>
					</label>
					<div className="flex flex-row justify-start items-center gap-5">
						<div className="flex flex-row justify-start items-center gap-2">
							<input type="radio" name="radio-1" className="radio" />
							<span>Yes</span>
						</div>
						<div className="flex flex-row justify-start items-center gap-2">
							<input type="radio" name="radio-1" className="radio" />
							<span>No</span>
						</div>
					</div>
				</div>
				<div className="form-control w-full ">
					<label className="label pt-0">
						<span className="label-text text-black dark:text-white text-base">
							Your average monthly sales is? (In Lakhs)
						</span>
					</label>
					<div className="flex flex-row justify-start items-center flex-wrap gap-5">
						<div className="flex flex-row justify-start items-center gap-5">
							<div className="flex flex-row justify-start items-center gap-2">
								<input type="radio" name="radio-1" className="radio" />
								<span>Upto 2 L</span>
							</div>
							<div className="flex flex-row justify-start items-center gap-2">
								<input type="radio" name="radio-1" className="radio" />
								<span>2 L - 4 L</span>
							</div>
						</div>
						<div className="flex flex-row justify-start items-center gap-5">
							<div className="flex flex-row justify-start items-center gap-2">
								<input type="radio" name="radio-1" className="radio" />
								<span>4 L - 10 L</span>
							</div>
							<div className="flex flex-row justify-start items-center gap-2">
								<input type="radio" name="radio-1" className="radio" />
								<span>10 L +</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex flex-col justify-center items-center gap-4">
				<button className="btn bg-blue-600 w-full hover:bg-blue-800 text-white">
					Submit
				</button>
				<div className=" flex items-center justify-center ">
					<img src={lock} alt="lock" className="h-4 w-4" />
					<span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
						Your data is completely secure with us.
					</span>
				</div>
			</div>
		</div>
	);
};

export default Form;
