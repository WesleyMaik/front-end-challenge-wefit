import { ComponentProps, forwardRef } from "react";
import styled from "styled-components";

export type ButtonProps = {
	title: string;
	type: ButtonType;
	width?: string;
	color?: string;
	background?: string;
} & ComponentProps<"button">;

type ButtonType = "submit" | "reset" | "button";

const Wrapper = styled.button<ButtonProps>`
	cursor: pointer;
	width: ${(prop) => prop.width};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 0.7rem 1.2rem;
	border: none;
	border-radius: 4px;
	color: ${(props) => props.color || "#fff"};
	background-color: ${(props) => props.background || "var(--primary)"};
	transition: all ease 0.2s;

	&:active {
		transform: scale(0.9);
	}

	&.success {
		background-color: var(--success);
	}
`;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function (
	props,
	ref
) {
	return <Wrapper {...props} ref={ref} />;
});

export default Button;
