import styled from "styled-components";

export type LogoProps = {
	color?: string;
};

const Link = styled.a`
	display: block;
	text-decoration: none;
`;

const Wrapper = styled.h1<LogoProps>`
	font-size: 1.25rem;
	font-weight: 700;
	color: ${(prop) => prop.color || "#fff"};
`;

export default function Logo(props: LogoProps) {
	return (
		<Link
			title="Logo da WeMovie"
			href={import.meta.env.BASE_URL}
			target="_self"
		>
			<Wrapper {...props}>WeMovies</Wrapper>
		</Link>
	);
}
