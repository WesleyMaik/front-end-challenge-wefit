import { useCart } from "@/hooks/useCart";
import styled from "styled-components";
import { RemoveItem, Stepper } from ".";
import { Button } from "@/components/Button";
import { FormattedCurrency } from "@/components/FormattedCurrency";

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	border-radius: 4px;
	padding: 1rem;
	background-color: var(--white);

	.head {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		align-items: center;
		font-size: 14px;
		font-weight: 700;
		text-align: left;
		text-transform: uppercase;
		color: var(--gray);

		p {
			width: 100%;
		}
	}

	.item {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 0.5rem;

		& > * {
			width: 100%;
		}

		img {
			width: 100%;
			max-width: 100px;
			object-fit: contain;
		}

		.name {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 1rem;
			font-weight: 700;

			h1 {
				font-size: 14px;
			}

			p {
				font-size: 16px;
			}
		}

		.subtotal {
			font-weight: 700;
		}

		.remove {
			display: flex;

			button {
				margin-left: auto;
			}
		}
	}

	hr {
		width: 100%;
	}

	.summary {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;

		button {
			font-size: 14px;
			font-weight: 700;
			text-transform: uppercase;
		}

		.total {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 1rem;

			.label {
				font-size: 14px;
				color: var(--gray);
				text-transform: uppercase;
				font-weight: 700;
			}

			.value {
				font-size: 24px;
				font-weight: 700;
			}
		}
	}

	@media screen and (max-width: 1024px) {
		.head {
			display: none;
		}

		.item {
			display: grid;
			grid-template-rows: repeat(2, 1fr);
			grid-column-gap: 0px;
			grid-row-gap: 0px;

			img {
				grid-area: 1 / 1 / 3 / 2;
			}

			.name {
				grid-area: 1 / 2 / 2 / 3;

				.content {
					display: flex;
					flex-direction: row;
					align-items: center;
					gap: 1rem;
				}
			}

			.quantity {
				grid-area: 2 / 2 / 3 / 3;
			}

			.subtotal {
				grid-area: 2 / 3 / 3 / 4;
				display: flex;
				flex-direction: column;
				gap: 0.25rem;

				.label {
					font-size: 12px;
					color: var(--gray);
				}
			}

			.remove {
				grid-area: 1 / 3 / 2 / 4;

				button {
					margin-right: auto;
				}
			}
		}

		.summary {
			flex-direction: column-reverse;

			button,
			.total {
				width: 100%;
			}

			.total {
				justify-content: space-between;
			}
		}
	}
`;

function Resume() {
	const { items, subtotal, decreaseItem, increaseItem } = useCart();

	return (
		<Wrapper>
			<div className="head">
				<p>Produto</p>
				<p>QTD</p>
				<p>Subtotal</p>
				<p></p>
			</div>
			{items.map(({ id, price, title, imageUrl, quantity }) => (
				<div className="item">
					<img
						title={title}
						alt={title}
						src={imageUrl}
						width={100}
						loading="lazy"
					/>
					<div className="name">
						<div className="content">
							<h1>{title}</h1>
							<p>
								<FormattedCurrency value={price} />
							</p>
						</div>
					</div>
					<div className="quantity">
						<Stepper
							count={quantity}
							onIncrease={() => increaseItem({ id })}
							onDecrease={() => decreaseItem({ id })}
						/>
					</div>
					<div className="subtotal">
						<span className="label m-only">Subtotal</span>
						<FormattedCurrency value={price * quantity} />
					</div>
					<div className="remove">
						<RemoveItem id={id} />
					</div>
				</div>
			))}
			<hr />
			<div className="summary">
				<Button title="Finalizar Pedido" type="button">
					Finalizar Pedido
				</Button>
				<div className="total">
					<p className="label">Total</p>
					<p className="value">
						<FormattedCurrency value={subtotal} />
					</p>
				</div>
			</div>
		</Wrapper>
	);
}

export default Resume;
