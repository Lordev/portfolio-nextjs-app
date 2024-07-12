import * as React from 'react';
import { SVGProps } from 'react';
const LeftChevronIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={500}
		height={500}
		viewBox="0 0 375 375"
		{...props}
	>
		<path
			fill="currentColor"
			d="M277.953 17.89c5.23 5.22 5.23 13.68 0 18.93L126.582 187.906 277.953 339.02c5.23 5.19 5.23 13.683 0 18.902-5.23 5.219-13.707 5.219-18.969 0L98.144 197.387c-5.226-5.25-5.226-13.711 0-18.93l160.84-160.566c5.262-5.223 13.739-5.223 18.97 0"
		/>
	</svg>
);
export default LeftChevronIcon;
