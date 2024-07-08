import * as React from 'react';
import { SVGProps } from 'react';
const HtmlIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={500}
		height={500}
		viewBox="0 0 375 375"
		{...props}
	>
		<path
			fill="currentColor"
			d="M187.5 0C291.055 0 375 83.945 375 187.5S291.055 375 187.5 375 0 291.055 0 187.5 83.945 0 187.5 0"
		/>
		<path
			fill="#fff"
			d="m156.094 234.21-82.946-36.058v-19.968l82.946-35.895v23.52l-57.867 22.125 57.867 22.945v23.332M163.77 250.055l29.964-125.121h17.414l-30.293 125.12H163.77M218.824 234.305v-23.368l57.938-22.78-57.938-22.524V142.44l83.028 35.895v19.805l-83.028 36.164"
		/>
	</svg>
);
export default HtmlIcon;
