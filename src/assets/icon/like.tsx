import type { SVGProps } from 'react'

export const LikeIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width='22'
			height='20'
			viewBox='0 0 22 20'
			stroke='inherit'
			fill=''
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M6.5 1C3.46244 1 1 3.46245 1 6.5C1 12 7.5 17 11 18.1631C14.5 17 21 12 21 6.5C21 3.46245 18.5375 1 15.5 1C13.6398 1 11.9953 1.92345 11 3.3369C10.0047 1.92345 8.36015 1 6.5 1Z'
				fill='inherit'
				stroke='inherit'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
