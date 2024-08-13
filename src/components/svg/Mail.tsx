import * as React from 'react';
import { SVGProps } from 'react';
const Mail = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={800}
		height={800}
		fill="currentColor"
		viewBox="0 0 24 24"
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M20 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h16Zm-.747 2H4.747l6.633 5.237a1 1 0 0 0 1.24 0L19.253 6ZM3 7.169V17a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7.169l-7.141 5.638a3 3 0 0 1-3.718 0L3 7.168Z"
			clipRule="evenodd"
		/>
	</svg>
);
export default Mail;
