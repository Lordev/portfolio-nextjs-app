import { Github, Twitter, Mail, Linkedin } from '@/components/svg';
import { SocialLinksCollection } from '@/lib/types/SocialLinkType';

const socialLinks: SocialLinksCollection = {
	github: {
		icon: Github,
		href: 'https://github.com/Lordev/',
	},
	twitter: {
		icon: Twitter,
		href: 'https://twitter.com/yourprofile',
	},
	mail: {
		icon: Mail,
		href: 'mailto:lorenzo.sallons.dev@gmail.com',
	},
	linkedin: {
		icon: Linkedin,
		href: 'https://www.linkedin.com/in/lorenzo-sallons-383945176/?originalSubdomain=nl',
	},
};

export type SocialLink = (typeof socialLinks)[keyof typeof socialLinks];

export default socialLinks;
