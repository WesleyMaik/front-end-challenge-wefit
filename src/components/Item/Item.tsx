import styled from "styled-components";
import imagePlaceholder from "@/assets/image-placeholder.svg";
import AddToCartButton from "./AddToCartButton";
import { FormattedCurrency } from "../FormattedCurrency";

export type ItemProps = {
	id: string;
	title: string;
	price: number;
	imageUrl?: string;
};

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 4px;
	color: var(--black);
	background-color: var(--white);
	padding: 1rem;
	animation: fadeGrow ease 1s forwards;

	&:hover {
		.image {
			transform: scale(1.05);
		}
	}

	.image {
		transition: transform ease 0.2s;
	}

	.title {
		font-size: 12px;
		font-weight: 700;
	}

	.price {
		font-size: 16px;
		font-weight: 700;
	}
`;

function Item({ id, price, title, imageUrl = imagePlaceholder }: ItemProps) {
	return (
		<Wrapper id={`item-${id}`} className="item">
			<img
				className="image"
				alt={title}
				src={imageUrl}
				width={200}
				loading="lazy"
			/>
			<h1 className="title">{title}</h1>
			<h2 className="price">
				<FormattedCurrency value={price} />
			</h2>
			<AddToCartButton />
		</Wrapper>
	);
}

export default Item;
