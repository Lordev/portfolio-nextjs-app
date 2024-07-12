import * as React from 'react';
import { SVGProps } from 'react';
const RightChevronIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={500}
		height={500}
		viewBox="0 0 375 375"
		{...props}
	>
		<path
			fill="currentColor"
			d="M97.047 357.11c-5.23-5.22-5.23-13.684 0-18.934L248.418 187.09 97.047 35.977c-5.23-5.188-5.23-13.684 0-18.903 5.23-5.219 13.707-5.219 18.969 0l160.84 160.535c5.226 5.25 5.226 13.715 0 18.934l-160.84 160.566c-5.262 5.22-13.739 5.22-18.97 0"
		/>
	</svg>
);
export default RightChevronIcon;
