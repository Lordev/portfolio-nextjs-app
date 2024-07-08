import * as React from 'react';
import { SVGProps } from 'react';
const NextJsIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={500}
		height={500}
		viewBox="0 0 375 375"
		fill="currentColor"
		{...props}
	>
		<path d="M280.86 29.383C160.73-41.2 8.081 45.008 6.753 184.187 5.457 320.09 149.39 407.871 269.25 348.055L138.383 155.656v119.09c0 13.195-25.266 13.195-25.266 0V115.098c0-10.473 19.469-11.336 24.988-2.23l149.16 224.925c112.051-72.117 110.54-239.7-6.406-308.41Zm-16.852 225.383-25.348-38.688V110.16c0-9.875 25.348-9.875 25.348 0Zm0 0" />
	</svg>
);
export default NextJsIcon;
