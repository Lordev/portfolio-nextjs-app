import * as React from 'react';
import { SVGProps } from 'react';
const CssIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={500}
		height={500}
		viewBox="0 0 375 375"
		{...props}
	>
		<defs>
			<clipPath id="a">
				<path d="M19.688 0h336v375h-336Zm0 0" />
			</clipPath>
		</defs>
		<g clipPath="url(#a)">
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M355.637 0 326 335.527 187.687 375 49.375 335.527 19.738 0ZM106.684 217.105h39.52l.964 24.672 40.52 13.801 40.519-13.8 2.934-44.41h-86.907l-2.007-39.473h90.921l2.934-39.473H99.777l-2.972-39.473h180.8l-4.937 78.946-6.95 113.488-78.03 25.672-78.032-25.672Zm0 0"
			/>
		</g>
	</svg>
);
export default CssIcon;
