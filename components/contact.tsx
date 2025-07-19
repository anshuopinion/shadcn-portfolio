import React from "react";
import {Github, LinkedinIcon, Twitter, Mail, Globe} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";

interface ContactProps {
	title?: string;
	description?: string;
	email?: string;
	web?: {label: string; url: string};
}

const Contact = ({
	title = "Get In Touch",
	description = "I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to collaborate or just want to say hi!",

	email = "anshuopinion@gmail.com",
	web = {label: "github.com/anshuopinion", url: "https://github.com/anshuopinion"},
}: ContactProps) => {
	return (
		<div id='contact' className='container py-12 mx-auto'>
			<div className='mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:gap-20'>
				<div className='mx-auto flex max-w-sm flex-col justify-between gap-10'>
					<div className='text-center lg:text-left'>
						<h1 className='mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl'>{title}</h1>
						<p className='text-muted-foreground'>{description}</p>
					</div>
					<div className='mx-auto w-fit lg:mx-0'>
						<h3 className='mb-6 text-center text-2xl font-semibold lg:text-left'>Let&apos;s Connect</h3>
						<div className='flex flex-col gap-4'>
							<a href={`mailto:${email}`} className='flex items-center gap-2 hover:text-primary transition-colors'>
								<Mail className='h-5 w-5' />
								<span>{email}</span>
							</a>
							<a href={web.url} target='_blank' className='flex items-center gap-2 hover:text-primary transition-colors'>
								<Github className='h-5 w-5' />
								<span>{web.label}</span>
							</a>
							<a href='https://linkedin.com/in/your-linkedin' target='_blank' className='flex items-center gap-2 hover:text-primary transition-colors'>
								<LinkedinIcon className='h-5 w-5' />
								<span>LinkedIn</span>
							</a>
							<a href='https://twitter.com/your-twitter' target='_blank' className='flex items-center gap-2 hover:text-primary transition-colors'>
								<Twitter className='h-5 w-5' />
								<span>Twitter</span>
							</a>
						</div>
					</div>
				</div>
				<div className='mx-auto flex max-w-3xl flex-col gap-6 rounded-lg border p-10'>
					<div className='flex gap-4'>
						<div className='grid w-full items-center gap-1.5'>
							<Label htmlFor='firstname'>First Name</Label>
							<Input type='text' id='firstname' placeholder='First Name' />
						</div>
						<div className='grid w-full items-center gap-1.5'>
							<Label htmlFor='lastname'>Last Name</Label>
							<Input type='text' id='lastname' placeholder='Last Name' />
						</div>
					</div>
					<div className='grid w-full items-center gap-1.5'>
						<Label htmlFor='email'>Email</Label>
						<Input type='email' id='email' placeholder='Email' />
					</div>
					<div className='grid w-full items-center gap-1.5'>
						<Label htmlFor='subject'>Subject</Label>
						<Input type='text' id='subject' placeholder='Subject' />
					</div>
					<div className='grid w-full gap-1.5'>
						<Label htmlFor='message'>Message</Label>
						<Textarea placeholder='Type your message here.' id='message' />
					</div>
					<Button className='w-full'>Send Message</Button>
				</div>
			</div>
		</div>
	);
};

export {Contact};
