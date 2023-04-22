import React from 'react';

import { SiSimplenote } from 'react-icons/si';
import { GiParachute } from 'react-icons/gi';
import { HiShieldCheck } from 'react-icons/hi';

const Value = () => {
	return (
		<div className="mb-[4rem] mt-[6rem]">
			<h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block">
				The value that holds us true and to account
			</h1>

			<div className="grid gap-[10rem] grid-cols-3 items-center">
				<div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
					<div className="flex items-center gap-3">
						<div className="imgDiv p-[4px] rounded-[0.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
							<SiSimplenote className="text-blueColor" />
						</div>
						<span className="font-semibold text-textColor text-[18px]">
							Simplicity
						</span>
					</div>

					<p className="text-[13px] text-textColor opacity-[0.7] py-[1rem] font-semibold">
						Things being made beautiful simple are at the heart of
						everything we do.
					</p>
				</div>

				<div className="singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]">
					<div className="flex items-center gap-3">
						<div className="imgDiv p-[4px] rounded-[0.8rem] bg-[#f7d1e1] h-[40px] w-[40px] flex items-center justify-center">
							<GiParachute className="text-blueColor" />
						</div>
						<span className="font-semibold text-textColor text-[18px]">
							Trust
						</span>
					</div>

					<p className="text-[13px] text-textColor opacity-[0.7] py-[1rem] font-semibold">
						We are committed to building trust and being open and
						transparent.
					</p>
				</div>

				<div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
					<div className="flex items-center gap-3">
						<div className="imgDiv p-[4px] rounded-[0.8rem] bg-[#f3f2ad] h-[40px] w-[40px] flex items-center justify-center">
							<HiShieldCheck className="text-blueColor" />
						</div>
						<span className="font-semibold text-textColor text-[18px]">
							Safety
						</span>
					</div>

					<p className="text-[13px] text-textColor opacity-[0.7] py-[1rem] font-semibold">
						We work on the basis of creating trust which can be
						nurtured through authenticity.
					</p>
				</div>
			</div>

			<div className="card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px]">
				<div>
					<h1 className="text-blueColor text-[30px] font-bold">
						Ready To switch a career
					</h1>
					<h2 className="text-textColor text-[25px] font-bold">
						Let's get started
					</h2>
				</div>
				<button className="border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor ">
					Get Started{' '}
				</button>
			</div>
		</div>
	);
};

export default Value;
