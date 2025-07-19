import {ExternalLink, Github} from "lucide-react";

import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Image from "next/image";

const Projects = () => {
	return (
		<div id="projects" className='container mx-auto'>
			<div className='mx-auto flex max-w-5xl flex-col items-center gap-6 text-center'>
				<h1 className='mb-6 text-4xl font-semibold text-pretty lg:text-5xl'>Featured Projects</h1>
				<p className='text-muted-foreground'>Here are some of my notable projects that showcase my skills and experience</p>

				<div className='mt-10 grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3'>
					<Card className='overflow-hidden'>
						<CardContent className='pt-6'>
							<div className='relative h-48 mb-4'>
								<Image src='https://images.unsplash.com/photo-1618788372246-79faff0c3742' alt='E-commerce Dashboard' fill className='object-cover rounded-lg' />
							</div>
							<h2 className='mb-2 text-xl font-semibold'>E-commerce Dashboard</h2>
							<p className='text-sm text-muted-foreground mb-4'>A modern e-commerce admin dashboard built with Next.js and Tailwind CSS.</p>
							<div className='flex gap-4'>
								<Button variant='outline' className='flex gap-2' asChild>
									<a href='https://github.com/yourusername/project1' target='_blank'>
										<Github className='h-4 w-4' /> Code
									</a>
								</Button>
								<Button className='flex gap-2' asChild>
									<a href='https://project1-demo.com' target='_blank'>
										<ExternalLink className='h-4 w-4' /> Demo
									</a>
								</Button>
							</div>
						</CardContent>
					</Card>

					<Card className='overflow-hidden'>
						<CardContent className='pt-6'>
							<div className='relative h-48 mb-4'>
								<Image src='https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7' alt='Social Media App' fill className='object-cover rounded-lg' />
							</div>
							<h2 className='mb-2 text-xl font-semibold'>Social Media App</h2>
							<p className='text-sm text-muted-foreground mb-4'>A full-stack social media application with real-time messaging and notifications.</p>
							<div className='flex gap-4'>
								<Button variant='outline' className='flex gap-2' asChild>
									<a href='https://github.com/yourusername/project2' target='_blank'>
										<Github className='h-4 w-4' /> Code
									</a>
								</Button>
								<Button className='flex gap-2' asChild>
									<a href='https://project2-demo.com' target='_blank'>
										<ExternalLink className='h-4 w-4' /> Demo
									</a>
								</Button>
							</div>
						</CardContent>
					</Card>

					<Card className='overflow-hidden'>
						<CardContent className='pt-6'>
							<div className='relative h-48 mb-4'>
								<Image src='https://images.unsplash.com/photo-1555421689-491a97ff2040' alt='Task Management App' fill className='object-cover rounded-lg' />
							</div>
							<h2 className='mb-2 text-xl font-semibold'>Task Management App</h2>
							<p className='text-sm text-muted-foreground mb-4'>A collaborative task management tool with drag-and-drop interface.</p>
							<div className='flex gap-4'>
								<Button variant='outline' className='flex gap-2' asChild>
									<a href='https://github.com/yourusername/project3' target='_blank'>
										<Github className='h-4 w-4' /> Code
									</a>
								</Button>
								<Button className='flex gap-2' asChild>
									<a href='https://project3-demo.com' target='_blank'>
										<ExternalLink className='h-4 w-4' /> Demo
									</a>
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};

export {Projects};
