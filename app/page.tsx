import {About} from "@/components/about";
import {Contact} from "@/components/contact";
import {Experience} from "@/components/experience";
import {HeroSection} from "@/components/hero";
import {Projects} from "@/components/projects";
import {Skills} from "@/components/skills";

export default function Home() {
	return (
		<div>
			<HeroSection />
			<About />
			<Skills />
			<Projects />
			<Experience />
			<Contact />
		</div>
	);
}
