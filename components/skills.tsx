import {Code2, Database, Layout, Server, Terminal, Wrench} from "lucide-react";

interface Feature {
	title: string;
	description: string;
	icon: React.ReactNode;
}

interface SkillsProps {
	heading?: string;
	subheading?: string;
	features?: Feature[];
}

const Skills = ({
	heading = "Technical Skills",
	subheading = "What I Can Do",
	features = [
		{
			title: "Frontend Development",
			description: "Expertise in React.js, Next.js, and TypeScript. Building responsive and interactive user interfaces with modern frameworks and tools.",
			icon: <Layout className='size-4 md:size-6' />,
		},
		{
			title: "Backend Development",
			description: "Proficient in Node.js, Express.js, and RESTful APIs. Creating robust server-side applications and efficient database architectures.",
			icon: <Server className='size-4 md:size-6' />,
		},
		{
			title: "Database Management",
			description: "Experience with MongoDB, MySQL, and database design. Implementing efficient data storage and retrieval solutions.",
			icon: <Database className='size-4 md:size-6' />,
		},
		{
			title: "Version Control & DevOps",
			description: "Skilled in Git, GitHub, and deployment workflows. Managing code versions and implementing CI/CD pipelines.",
			icon: <Code2 className='size-4 md:size-6' />,
		},
		{
			title: "Development Tools",
			description: "Proficient with VS Code, npm, and various development tools. Implementing best practices for code quality and efficiency.",
			icon: <Wrench className='size-4 md:size-6' />,
		},
		{
			title: "Command Line & Scripts",
			description: "Comfortable with terminal operations, shell scripting, and automation tools for improved development workflow.",
			icon: <Terminal className='size-4 md:size-6' />,
		},
	],
}: SkillsProps) => {
	return (
		<section className='py-32' id='skills'>
			<div className='container mx-auto max-w-7xl'>
				<p className='mb-4 text-xs text-muted-foreground md:pl-5'>{subheading}</p>
				<h2 className='text-3xl font-medium md:pl-5 lg:text-4xl'>{heading}</h2>
				<div className='mx-auto mt-14 grid gap-x-20 gap-y-8 md:grid-cols-2 md:gap-y-6 lg:mt-20'>
					{features.map((feature, idx) => (
						<div className='flex gap-6 rounded-lg md:block md:p-5' key={idx}>
							<span className='mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12'>{feature.icon}</span>
							<div>
								<h3 className='font-medium md:mb-2 md:text-xl'>{feature.title}</h3>
								<p className='text-sm text-muted-foreground md:text-base'>{feature.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export {Skills};
