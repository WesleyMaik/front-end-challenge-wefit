import styled from "styled-components";
import { Cart } from "@/components/Icons";
import { useCart } from "@/hooks/useCart";

const Link = styled.a`
	display: block;
	text-decoration: none;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5rem;
	color: var(--white);

	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;

		p {
			font-size: 14px;
			margin: 0;
		}

		span {
			font-size: 12px;
			color: var(--gray);
		}

		@media screen and (max-width: 1024px) {
			p {
				display: none;
			}
		}
	}
`;

function CartButton() {
	const { count } = useCart();

	return (
		<Link title="Botão do Carrinho" href="/?cart" target="_self">
			<Wrapper>
				<div className="content">
					<p>Meu carrinho</p>
					<span>{count} itens</span>
				</div>
				<Cart />
			</Wrapper>
		</Link>
	);
}

export default CartButton;
