import styled from "styled-components";
import { Less, Plus } from "@/components/Icons";

export type StepperProps = {
	count: number;
	onIncrease?: () => void;
	onDecrease?: () => void;
};

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	button {
		cursor: pointer;
		background: transparent;
		border: none;
	}

	.count {
		padding: 0.25rem 1rem;
		border: 1px solid #d9d9d9;
		border-radius: 4px;
	}
`;

function Stepper({ count = 0, onDecrease, onIncrease }: StepperProps) {
	function handleIncrease() {
		if (!onIncrease) return;

		onIncrease();
	}

	function handleDecrease() {
		if (!onDecrease) return;

		if (count < 2) return;

		onDecrease();
	}

	return (
		<Wrapper>
			<button type="button" title="Decrementar" onClick={handleDecrease}>
				<span className="sr-only">Decrementar</span>
				<Less color="#009EDD" />
			</button>
			<span className="count">{count}</span>
			<button type="button" title="Acrescentar" onClick={handleIncrease}>
				<span className="sr-only">Acrescentar</span>
				<Plus color="#009EDD" />
			</button>
		</Wrapper>
	);
}

export default Stepper;
