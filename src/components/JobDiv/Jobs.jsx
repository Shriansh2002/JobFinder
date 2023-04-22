import React from 'react';

import SingleJobCard from './SingleJobCard';

const jobsListData = [
	{
		id: 1,
		jobTitle: 'Web Developer',
		jobPostingTime: '20/04/2023',
		jobLocation: 'USA',
		jobDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, cupiditate!',
		companyName: 'Meta',
		companyLogo:
			'https://companieslogo.com/img/orig/META-4767da84.png?t=1654568366',
	},
	{
		id: 2,
		jobTitle: 'UX Designer',
		jobPostingTime: '22/04/2023',
		jobLocation: 'Berlin',
		jobDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, cupiditate!',
		companyName: 'Amazon',
		companyLogo:
			'https://companieslogo.com/img/orig/AMZN-e9f942e4.png?t=1632523695',
	},
	{
		id: 3,
		jobTitle: 'Marketing Manager',
		jobPostingTime: '15/04/2023',
		jobLocation: 'London',
		jobDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, cupiditate!',
		companyName: 'Google',
		companyLogo:
			'https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227',
	},
	{
		id: 4,
		jobTitle: 'Software Engineer',
		jobPostingTime: '17/04/2023',
		jobLocation: 'Toronto',
		jobDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, cupiditate!',
		companyName: 'Microsoft',
		companyLogo:
			'https://companieslogo.com/img/orig/MSFT-a203b22d.png?t=1633073277',
	},
	{
		id: 5,
		jobTitle: 'Graphic Designer',
		jobPostingTime: '20/02/2023',
		jobLocation: 'New York',
		jobDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, cupiditate!',
		companyName: 'Apple',
		companyLogo:
			'https://companieslogo.com/img/orig/AAPL-bf1a4314.png?t=1632720960',
	},
	{
		id: 6,
		jobTitle: 'Data Analyst',
		jobPostingTime: '12/01/2023',
		jobLocation: 'Sydney',
		jobDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, cupiditate!',
		companyName: 'Tesla',
		companyLogo:
			'https://companieslogo.com/img/orig/TSLA-6da550e5.png?t=1633074393',
	},
	{
		id: 7,
		jobTitle: 'Social Media Manager',
		jobPostingTime: '16/03/2023',
		jobLocation: 'Los Angeles',
		jobDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, cupiditate!',
		companyName: 'Twitter',
		companyLogo:
			'https://companieslogo.com/img/orig/TWTR-358c8f8c.png?t=1647436042',
	},
	{
		id: 8,
		jobTitle: 'Product Manager',
		jobPostingTime: '19/04/2023',
		jobLocation: 'Paris',
		jobDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, cupiditate!',
		companyName: 'Facebook',
		companyLogo:
			'https://companieslogo.com/img/orig/FB-2d2223ad.png?t=1633076955',
	},
	{
		id: 9,
		jobTitle: 'Full Stack Developer',
		jobPostingTime: '22/04/2023',
		jobLocation: 'Melbourne',
		jobDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, cupiditate!',
		companyName: 'Atlassian',
		companyLogo:
			'https://companieslogo.com/img/orig/TEAM-ddb0dd07.png?t=1633504719',
	},
	{
		id: 10,
		jobTitle: 'Data Scientist',
		jobPostingTime: '21/02/2023',
		jobLocation: 'New York',
		jobDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, cupiditate!',
		companyName: 'IBM',
		companyLogo:
			'https://companieslogo.com/img/orig/IBM-57502b16.png?t=1669436923',
	},
];

const Jobs = () => {
	return (
		<div>
			<div className="jobsContainer flex gap-10 justify-center flex-wrap items-center py-10">
				{jobsListData.map((job, _idx) => (
					<SingleJobCard key={_idx} jobData={job} />
				))}
			</div>
		</div>
	);
};

export default Jobs;
