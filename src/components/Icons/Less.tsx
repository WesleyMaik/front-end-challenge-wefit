import { IconProps } from "@/types/IconProps";

function Less(props: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="18"
			height="18"
			fill="none"
			viewBox="0 0 18 18"
			{...props}
		>
			<path
				fill="currentColor"
				d="M4.5 8.1v1.8h9V8.1h-9zM9 0C4.032 0 0 4.032 0 9s4.032 9 9 9 9-4.032 9-9-4.032-9-9-9zm0 16.2c-3.969 0-7.2-3.231-7.2-7.2 0-3.969 3.231-7.2 7.2-7.2 3.969 0 7.2 3.231 7.2 7.2 0 3.969-3.231 7.2-7.2 7.2z"
			></path>
		</svg>
	);
}

export default Less;
