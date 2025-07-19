import {Github, Linkedin, Mail, Twitter} from "lucide-react";
import Link from "next/link";

import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";

const Footer = () => {
	return (
		<footer className='border-t'>
			<div className='container mx-auto flex flex-col gap-4 py-8 md:flex-row md:gap-8'>
				<div className='flex flex-col gap-4 md:gap-6 md:flex-1'>
					<Link href='/' className='flex items-center space-x-2'>
						<span className='font-bold'>Anshu Raj</span>
					</Link>
					<p className='text-sm text-muted-foreground max-w-xs'>A passionate web developer creating modern and responsive applications.</p>
					<div className='flex gap-4'>
						<Button variant='ghost' size='icon' asChild>
							<a href='https://github.com/anshuopinion' target='_blank'>
								<Github className='h-4 w-4' />
								<span className='sr-only'>GitHub</span>
							</a>
						</Button>
						<Button variant='ghost' size='icon' asChild>
							<a href='https://twitter.com/your-twitter' target='_blank'>
								<Twitter className='h-4 w-4' />
								<span className='sr-only'>Twitter</span>
							</a>
						</Button>
						<Button variant='ghost' size='icon' asChild>
							<a href='https://linkedin.com/in/your-linkedin' target='_blank'>
								<Linkedin className='h-4 w-4' />
								<span className='sr-only'>LinkedIn</span>
							</a>
						</Button>
						<Button variant='ghost' size='icon' asChild>
							<a href='mailto:anshuopinion@gmail.com'>
								<Mail className='h-4 w-4' />
								<span className='sr-only'>Email</span>
							</a>
						</Button>
					</div>
				</div>
				<div className='flex flex-1 gap-8 sm:gap-12 md:gap-16'>
					<nav className='flex flex-col gap-4 text-sm'>
						<h3 className='font-semibold'>Pages</h3>
						<Link className='text-muted-foreground hover:text-foreground' href='#home'>
							Home
						</Link>
						<Link className='text-muted-foreground hover:text-foreground' href='#about'>
							About
						</Link>
						<Link className='text-muted-foreground hover:text-foreground' href='#skills'>
							Skills
						</Link>
					</nav>
					<nav className='flex flex-col gap-4 text-sm'>
						<h3 className='font-semibold'>More</h3>
						<Link className='text-muted-foreground hover:text-foreground' href='#projects'>
							Projects
						</Link>
						<Link className='text-muted-foreground hover:text-foreground' href='#experience'>
							Experience
						</Link>
						<Link className='text-muted-foreground hover:text-foreground' href='#contact'>
							Contact
						</Link>
					</nav>
				</div>
			</div>
			<div className='container flex flex-col gap-4 py-6 text-center text-sm text-muted-foreground md:flex-row md:gap-6'>
				<p>© 2025 Anshu Raj. All rights reserved.</p>
				<Separator className='hidden md:block' orientation='vertical' />
				<p>Built with Next.js, Tailwind CSS, and Shadcn UI</p>
			</div>
		</footer>
	);
};

export {Footer};
