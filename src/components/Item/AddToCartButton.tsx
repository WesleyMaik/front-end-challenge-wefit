import { Button } from "@/components/Button";
import { CartPlus } from "@/components/Icons";
import { useRef } from "react";
import styled from "styled-components";

type AddToCartButtonProps = {
	onClick?: () => void;
	count?: number;
};

const Wrapper = styled.span`
	display: flex;
	align-items: center;
	gap: 8px;

	.icon {
		display: flex;
		align-items: center;
		gap: 4px;
		font-size: 12px;
	}

	.title {
		font-weight: 700;
		text-transform: uppercase;
	}
`;

function AddToCartButton({ onClick, count = 0 }: AddToCartButtonProps) {
	const buttonRef = useRef<HTMLButtonElement>(null);

	function handleClick() {
		if (onClick) onClick();

		buttonRef.current?.classList.add("success");

		setTimeout(() => {
			buttonRef.current?.classList.remove("success");
		}, 500);
	}

	return (
		<Button
			title="Adicionar ao carrinho"
			type="button"
			onClick={handleClick}
			width="100%"
			ref={buttonRef}
		>
			<Wrapper>
				<span className="icon">
					<CartPlus />
					<span>{count}</span>
				</span>
				<span className="title">Adicionar ao carrinho</span>
			</Wrapper>
		</Button>
	);
}

export default AddToCartButton;
