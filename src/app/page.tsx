import dynamic from 'next/dynamic';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import AnimationLoad from '@/components/AnimationLoad';
import Experience from '@/components/Experience';

const BgParticles = dynamic(() => import('@/components/BpParticles'), {
	ssr: false,
});
const Projects = dynamic(() => import('@/components/Projects'), {
	ssr: false,
});

export default function Home() {
	return (
		<main className="overflow-hidden">
			<Menu />
			<AnimationLoad />
			<BgParticles />
			<Hero />
			<Experience />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</main>
	);
}
