import Link from "next/link";
import {Menu} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";

const routes = [
	{
		href: "#home",
		label: "Home",
	},
	{
		href: "#about",
		label: "About",
	},
	{
		href: "#skills",
		label: "Skills",
	},
	{
		href: "#projects",
		label: "Projects",
	},
	{
		href: "#experience",
		label: "Experience",
	},
	{
		href: "#contact",
		label: "Contact",
	},
];

const Navbar = () => {
	return (
		<header className='sticky mx-auto top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50'>
			<div className='container  mx-auto flex h-14 items-center'>
				<div className='mr-4 hidden md:flex'>
					<Link href='/' className='mr-6 flex items-center space-x-2 font-bold'>
						Anshu Raj
					</Link>
					<nav className='flex items-center space-x-6 text-sm font-medium'>
						{routes.map((route, i) => (
							<Link key={i} href={route.href} className='transition-colors hover:text-foreground/80 text-foreground/60'>
								{route.label}
							</Link>
						))}
					</nav>
				</div>
				<Button variant='outline' className='ml-auto'>
					Download CV
				</Button>
				<Sheet>
					<SheetTrigger asChild className='md:hidden'>
						<Button
							variant='ghost'
							className='ml-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0'
						>
							<Menu className='h-6 w-6' />
							<span className='sr-only'>Toggle Menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side='right'>
						<nav className='flex flex-col items-start space-y-6 text-sm font-medium mt-10'>
							{routes.map((route, i) => (
								<Link key={i} href={route.href} className='transition-colors hover:text-foreground/80 text-foreground/60'>
									{route.label}
								</Link>
							))}
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
};

export {Navbar};
