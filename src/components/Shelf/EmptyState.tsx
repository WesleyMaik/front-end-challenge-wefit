import styled from "styled-components";
import empty from "@/assets/empty-state.webp";
import { Button } from "../Button";

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	background-color: var(--white);
	padding: 1rem;
	border-radius: 8px;

	.title {
		font-size: 1.25rem;
		font-weight: 700;
	}

	hr {
		width: 100%;
		max-width: 300px;
	}

	button {
		font-size: 12px;
	}
`;

function EmptyState() {
	function handleRefresh() {
		window.location.reload();
	}

	return (
		<Wrapper>
			<h1 className="title">Parece que não há nada por aqui :(</h1>
			<img src={empty} width={180} />
			<hr />
			<Button title="Regarregar a página" type="button" onClick={handleRefresh}>
				Recarregar a página
			</Button>
		</Wrapper>
	);
}

export default EmptyState;
