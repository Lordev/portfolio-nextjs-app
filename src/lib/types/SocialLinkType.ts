import { SVGProps } from 'react';

type SocialLinksType = {
	icon: React.ComponentType<SVGProps<SVGSVGElement>>;
	href: string;
};

export type SocialLinksCollection = {
	[key: string]: SocialLinksType;
};
