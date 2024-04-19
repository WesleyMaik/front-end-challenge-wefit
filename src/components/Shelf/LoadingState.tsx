import styled from "styled-components";
import spinner from "@/assets/icons/load-spinner.webp";

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;

	.spinner {
		animation: spin ease-out 0.5s infinite;
	}
`;

function LoadingState() {
	return (
		<Wrapper>
			<img src={spinner} width={50} className="spinner" />
		</Wrapper>
	);
}

export default LoadingState;
