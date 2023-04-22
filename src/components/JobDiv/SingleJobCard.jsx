import { BiTimeFive } from 'react-icons/bi';

const SingleJobCard = ({ jobData }) => {
	return (
		<div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
			<span className="flex justify-between items-center gap-4">
				<h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
					{jobData.jobTitle}
				</h1>
				<span className="flex items-center gap-1 text-[12px] text-[#ccc]">
					<BiTimeFive /> {jobData.jobPostingTime}
				</span>
			</span>

			<h6 className="text-[#ccc]">{jobData.jobLocation}</h6>

			<p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
				{jobData.jobDescription}
			</p>

			<div className="company flex items-center gap-2">
				<img
					src={jobData.companyLogo}
					alt={jobData.companyName}
					className="w-[10%]"
				/>
				<span className="text-[14px] py-[1rem] block group-hover:text-white">
					{jobData.companyName}
				</span>
			</div>

			<button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white">
				Apply Now
			</button>
		</div>
	);
};

export default SingleJobCard;
