import styled from "styled-components";
import buy from "@/assets/buy-state.webp";
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

function BoughtState() {
	function handleBackToHome() {
		window.location.href = "./";
	}

	return (
		<Wrapper>
			<h1>Compra realizada com sucesso!</h1>
			<img src={buy} width={180} />
			<Button title="Voltar" type="button" onClick={handleBackToHome}>
				Voltar
			</Button>
		</Wrapper>
	);
}

export default BoughtState;
