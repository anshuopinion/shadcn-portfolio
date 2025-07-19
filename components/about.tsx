import {Button} from "@/components/ui/button";
import Image from "next/image";
import {FaReact, FaNodeJs} from "react-icons/fa";
import {SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb} from "react-icons/si";

interface AboutProps {
	title?: string;
	description?: string;
	mainImage?: {
		src: string;
		alt: string;
	};
	secondaryImage?: {
		src: string;
		alt: string;
	};
	breakout?: {
		src: string;
		alt: string;
		title?: string;
		description?: string;
		buttonText?: string;
		buttonUrl?: string;
	};
	companiesTitle?: string;
	companies?: Array<{
		icon: React.ElementType;
		alt: string;
	}>;
	achievementsTitle?: string;
	achievementsDescription?: string;
	achievements?: Array<{
		label: string;
		value: string;
	}>;
}

const defaultCompanies = [
	{
		icon: FaReact,
		alt: "React",
	},
	{
		icon: SiTypescript,
		alt: "TypeScript",
	},
	{
		icon: SiNextdotjs,
		alt: "Next.js",
	},
	{
		icon: SiTailwindcss,
		alt: "Tailwind CSS",
	},
	{
		icon: FaNodeJs,
		alt: "Node.js",
	},
	{
		icon: SiMongodb,
		alt: "MongoDB",
	},
];

const defaultAchievements = [
	{label: "Years Experience", value: "3+"},
	{label: "Projects Completed", value: "20+"},
	{label: "GitHub Repositories", value: "50+"},
	{label: "Technologies", value: "15+"},
];

const About: React.FC<AboutProps> = ({
	title = "About Me",
	description = "I am a passionate Web Developer with expertise in modern web technologies. I specialize in building responsive, user-friendly applications using React, Next.js, and TypeScript. My journey in web development has been driven by a constant desire to learn and create impactful digital solutions.",
	mainImage = {
		src: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=1000",
		alt: "Anshu Raj - Web Developer",
	},
	secondaryImage = {
		src: "https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=1000",
		alt: "My Development Setup",
	},
	breakout = {
		src: "https://github.com/anshuopinion.png",
		alt: "Anshu Raj GitHub Profile",
		title: "Let's Work Together",
		description: "I'm always open to discussing new projects, creative ideas, and opportunities to be part of your visions.",
		buttonText: "Download CV",
		buttonUrl: "/your-cv.pdf", // Add your CV file path here
	},
	companiesTitle = "Tech Stack & Tools",
	companies = defaultCompanies,
	achievementsTitle = "Experience Overview",
	achievementsDescription = "Throughout my journey as a web developer, I've worked with various technologies and completed numerous projects, continuously expanding my skill set and expertise.",
	achievements = defaultAchievements,
}: AboutProps = {}) => {
	return (
		<div className='container mx-auto' id='about'>
			<div className='mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left'>
				<h1 className='text-5xl font-semibold'>{title}</h1>
				<p className='text-muted-foreground'>{description}</p>
			</div>
			<div className='grid gap-7 lg:grid-cols-3'>
				<div className='relative w-full h-[620px] lg:col-span-2 rounded-xl overflow-hidden'>
					<Image src={mainImage.src} alt={mainImage.alt} fill className='object-cover' sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
				</div>
				<div className='flex flex-col gap-7 md:flex-row lg:flex-col'>
					<div className='flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto'>
						<div className='relative w-16 h-16'>
							<Image src={breakout.src} alt={breakout.alt} fill className='object-cover rounded-full border-2 border-muted-foreground/20' />
						</div>
						<div>
							<p className='mb-2 text-lg font-semibold'>{breakout.title}</p>
							<p className='text-muted-foreground'>{breakout.description}</p>
						</div>
						<Button variant='outline' className='mr-auto' asChild>
							<a href={breakout.buttonUrl} target='_blank'>
								{breakout.buttonText}
							</a>
						</Button>
					</div>
					<div className='relative w-full h-[300px] md:w-1/2 lg:w-full rounded-xl overflow-hidden'>
						<Image
							src={secondaryImage.src}
							alt={secondaryImage.alt}
							fill
							className='object-cover'
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						/>
					</div>
				</div>
			</div>
			<div className='py-32'>
				<p className='text-center'>{companiesTitle} </p>
				<div className='mt-8 flex flex-wrap justify-center gap-8'>
					{companies.map((company, idx) => {
						const Icon = company.icon;
						return (
							<div className='flex items-center gap-3' key={company.alt + idx}>
								<Icon className='h-8 w-8 md:h-10 md:w-10 text-foreground/70 hover:text-foreground transition-colors' />
							</div>
						);
					})}
				</div>
			</div>
			<div className='relative overflow-hidden rounded-xl bg-muted p-10 md:p-16'>
				<div className='flex flex-col gap-4 text-center md:text-left'>
					<h2 className='text-4xl font-semibold'>{achievementsTitle}</h2>
					<p className='max-w-xl text-muted-foreground'>{achievementsDescription}</p>
				</div>
				<div className='mt-10 flex flex-wrap justify-between gap-10 text-center'>
					{achievements.map((item, idx) => (
						<div className='flex flex-col gap-4' key={item.label + idx}>
							<p>{item.label}</p>
							<span className='text-4xl font-semibold md:text-5xl'>{item.value}</span>
						</div>
					))}
				</div>
				<div className='pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] bg-[size:80px_80px] opacity-15 md:block'></div>
			</div>
		</div>
	);
};

export {About};
