import { IconProps } from "@/types/IconProps";

function Cart(props: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="22"
			fill="none"
			viewBox="0 0 24 22"
			{...props}
		>
			<path
				fill="currentColor"
				d="M17.684 8.28l-4.779-7.11A1.082 1.082 0 0012 .714c-.35 0-.698.152-.905.466l-4.779 7.1H1.091C.49 8.28 0 8.767 0 9.363c0 .098.01.196.044.293l2.77 10.047c.251.91 1.091 1.583 2.095 1.583h14.182a2.19 2.19 0 002.105-1.583l2.771-10.047.033-.293a1.09 1.09 0 00-1.09-1.083h-5.226zm-8.957 0L12 3.51l3.273 4.77H8.727zM12 16.95c-1.2 0-2.182-.975-2.182-2.167 0-1.193.982-2.168 2.182-2.168s2.182.975 2.182 2.168A2.181 2.181 0 0112 16.95z"
			></path>
		</svg>
	);
}

export default Cart;
