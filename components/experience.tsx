import * as React from "react";

import {Card, CardContent} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";

type TimelineEntry = {
	date: string;
	title: string;
	content: string;
};

const timelineData: TimelineEntry[] = [
	{
		date: "2023 - Present",
		title: "Senior Frontend Developer",
		content:
			"Working as a Senior Frontend Developer at Tech Corp, specializing in React and Next.js applications. Leading a team of developers and architecting scalable web solutions. Key achievements include implementing microservices architecture and reducing load times by 40%.",
	},
	{
		date: "2021 - 2023",
		title: "Full Stack Developer",
		content:
			"Worked at StartupX as a Full Stack Developer, building and maintaining web applications using React, Node.js, and MongoDB. Developed multiple client projects and internal tools. Implemented CI/CD pipelines and improved development workflow.",
	},
	{
		date: "2020 - 2021",
		title: "Junior Web Developer",
		content:
			"Started my professional journey at WebTech Solutions. Worked on various client projects using JavaScript, HTML, and CSS. Gained hands-on experience with React and modern web development practices.",
	},
	{
		date: "2019 - 2020",
		title: "Bachelor's in Computer Science",
		content:
			"Graduated with honors in Computer Science. Coursework included Data Structures, Algorithms, Web Development, and Database Management. Completed several projects including a full-stack e-commerce platform for my final year project.",
	},
	{
		date: "2018",
		title: "Web Development Certification",
		content:
			"Completed comprehensive web development certification covering modern JavaScript, React, Node.js, and database management. Built multiple projects as part of the curriculum.",
	},
];

const Experience = () => {
	return (
		<div id="experience" className='container mx-auto py-32'>
			<div className='text-center mb-10'>
				<h3 className='text-base text-muted-foreground'>My Journey</h3>
				<h1 className='text-foreground mt-2 text-3xl font-bold tracking-tighter sm:text-5xl'>Experience & Education</h1>
			</div>
			<div className='relative mx-auto max-w-4xl'>
				<Separator orientation='vertical' className='bg-muted absolute left-2 top-4' />
				{timelineData.map((entry, index) => (
					<div key={index} className='relative mb-10 pl-8'>
						<div className='bg-foreground absolute left-0 top-3.5 flex size-4 items-center justify-center rounded-full' />
						<h4 className='rounded-xl py-2 text-xl font-bold tracking-tight xl:mb-4 xl:px-3'>{entry.title}</h4>

						<h5 className='text-md -left-34 text-muted-foreground top-3 rounded-xl tracking-tight xl:absolute'>{entry.date}</h5>

						<Card className='my-5 border-none shadow-none'>
							<CardContent className='px-0 xl:px-2'>
								<div className='prose dark:prose-invert text-foreground' dangerouslySetInnerHTML={{__html: entry.content}} />
							</CardContent>
						</Card>
					</div>
				))}
			</div>
		</div>
	);
};

export {Experience};
