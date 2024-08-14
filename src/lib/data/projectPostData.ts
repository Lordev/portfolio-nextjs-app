import { ProjectPostsData } from '@/lib/types';

export const projectPostData: ProjectPostsData[] = [
	{
		id: '1',
		title: 'Strategysphere Advisors',
		subtitle: 'Consulting office',
		description:
			'I created this modern website for Strategysphere Advisors, a consulting office.',
		projectTags: [
			'Typescript',
			'React',
			'NextJs',
			'TailwindCss',
			'Sanity.io',
			'Figma',
		],
		imageData: {
			imageURL: '/images/frame-strategysphere.png',
			width: 750,
			height: 425,
		},
		modalProps: {
			sliderImages: [
				'/images/strategysphere-advisors-slide-01.jpg',
				'/images/strategysphere-advisors-slide-02.jpg',
				'/images/strategysphere-advisors-slide-03.jpg',
				'/images/strategysphere-advisors-slide-04.jpg',
			],
			title: 'Strategysphere Advisors',
			description:
				'I developed a modern, responsive website for Strategysphere Advisors, handling full-stack development with TypeScript, React, and Next.js. The design visuals was created using Figma. I integrated Sanity.io as a headless CMS for the blog section, enabling easy updates and scalability',
			repositoryUrl:
				'https://github.com/Lordev/strategysphere-advisors-website/tree/main/workspace/MyWorkspace.code-workspace/Projects/company-template',
			websiteUrl: 'https://strategysphere-advisors.vercel.app/',
		},
	},
	{
		id: '2',
		title: 'Radiant Festival',
		subtitle: 'Festival in Amsterdam',
		description:
			'I designed the Radiant Festival website with a vibrant jungle theme using Figma.',
		projectTags: [
			'Typescript',
			'React',
			'NextJs',
			'TailwindCss',
			'Stripe',
			'Figma',
		],
		imageData: {
			imageURL: '/images/frame-radiant-festival.png',
			width: 750,
			height: 425,
		},
		modalProps: {
			sliderImages: [
				'/images/radiant-festival-slide-01@800x400.jpg',
				'/images/radiant-festival-slide-02.jpg',
				'/images/radiant-festival-slide-03.jpg',
				'/images/radiant-festival-slide-04.jpg',
			],
			title: 'Radiant Festival',
			description:
				'I designed and developed the Radiant Festival website, bringing a vibrant jungle theme to life for this Amsterdam-based event. The entire visual experience was meticulously planned and crafted in Figma before being implemented into code. I used TailwindCSS for dynamic styling and integrated Stripe as the payment system for secure ticket purchasing, ensuring a seamless and user-friendly transaction process.',
			repositoryUrl: 'https://github.com/Lordev/radiant-festival-website',
			websiteUrl: 'https://radiant-festival.vercel.app/',
		},
	},
	{
		id: '3',
		title: 'SP _01 headset design',
		subtitle: 'Elegance in Every Stroke',
		description:
			'A mockup of a modern headset design (the SP_01) with a focus on user interaction.',
		projectTags: [
			'Typescript',
			'React',
			'NextJS',
			'ThreeJS',
			'Framer Motion',
			'TailwindCSS',
			'Spline',
			'Figma',
		],
		imageData: {
			imageURL: '/images/frame-sp-01.png',
			width: 750,
			height: 425,
		},
		modalProps: {
			sliderImages: [
				'/images/sp-01-slide-01.jpg',
				'/images/sp-01-slide-02.jpg',
				'/images/sp-01-slide-03.jpg',
			],
			title: 'SP _01 headset design',
			description:
				'I developed the SP _01 headset design website, showcasing an elegant 3D headphone mockup with a focus on user interaction. The site features 3D manipulation to enhance the modern shopping experience. I used Blender to compress and optimize the Spline design, integrated Three.js for interactive 3D elements, and applied Framer Motion for smooth animations.',
			repositoryUrl: 'https://github.com/Lordev/sp-01-model',
			websiteUrl: 'https://sp-01-model.vercel.app/',
		},
	},
	{
		id: '4',
		title: "Cher's Beauty Sallons",
		subtitle: 'Elegance in Every Stroke',
		description:
			'I designed this elegant makeup artist website with a modern look and feel.',
		projectTags: ['HTML', 'SCSS', 'Javascript', 'Gulp', 'Parcel', 'Figma'],
		imageData: {
			imageURL: '/images/frame-chers-beauty-sallons.png',
			width: 750,
			height: 425,
		},
		modalProps: {
			sliderImages: [
				'/images/chers-beauty-sallons-slide-01@800x450.jpg',
				'/images/chers-beauty-sallons-slide-02.jpg',
				'/images/chers-beauty-sallons-slide-03.jpg',
			],
			title: "Cher's Beauty Sallons",
			description: `I designed and developed the website for Cher's Beauty Salons, creating an elegant and sophisticated online presence that reflects the brand's dedication to beauty and style. The site features a refined color palette and smooth, user-friendly navigation, crafted to appeal to clients seeking a luxurious experience.`,
			repositoryUrl: 'https://github.com/Lordev/chers-beauty-web',
			websiteUrl: 'https://chers-beauty-sallons.vercel.app/',
		},
	},
];
