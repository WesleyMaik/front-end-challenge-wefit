import styled from "styled-components";
import empty from "@/assets/empty-state.webp";
import { Button } from "../Button";

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;
	border-radius: 4px;
	padding: 1rem;
	background-color: var(--white);

	h1 {
		font-size: 1.2rem;
	}
`;

function EmptyState() {
	function handleBackToHome() {
		window.location.href = "/";
	}

	return (
		<Wrapper>
			<h1>Não há produtos no seu carrinho :(</h1>
			<img src={empty} width={180} />
			<Button
				title="Voltar à página inicial"
				type="button"
				onClick={handleBackToHome}
			>
				Voltar à página inicial
			</Button>
		</Wrapper>
	);
}

export default EmptyState;
