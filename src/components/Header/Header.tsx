import styled from "styled-components";
import { Logo } from "@/components/Logo";
import { CartButton } from "@/components/Cart";

export type HeaderProps = {
	justifyContent?: JustifyContent;
};

type JustifyContent =
	| "flex-start"
	| "flex-end"
	| "space-between"
	| "space-around";

const Wrapper = styled.header<HeaderProps>`
	min-height: 88px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: ${(props) => props.justifyContent || "space-between"};
`;

function Header() {
	return (
		<Wrapper>
			<Logo />
			<CartButton />
		</Wrapper>
	);
}

export default Header;
