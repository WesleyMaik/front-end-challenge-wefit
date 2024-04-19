import styled from "styled-components";
import { Item, ItemProps } from "@/components/Item";

import spinner from "@/assets/icons/load-spinner.webp";

type ShelfProps = {
	items: ItemProps[];
	isLoading?: boolean;
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
	flex-wrap: wrap;

	.item {
		width: auto;
		flex-basis: calc(33% - 3rem);
	}

	@media screen and (max-width: 1024px) {
		flex-direction: column;

		.item {
			flex-basis: 100%;
		}
	}
`;

const LoadingWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;

	.spinner {
		animation: spin ease-out 0.5s infinite;
	}
`;

function Shelf({ items, isLoading }: ShelfProps) {
	if (isLoading) {
		return (
			<LoadingWrapper>
				<img src={spinner} width={50} className="spinner" />
			</LoadingWrapper>
		);
	}

	return (
		<Wrapper>
			{items.map(({ id, price, title, imageUrl }) => (
				<Item
					key={id}
					id={id}
					price={price}
					title={title}
					imageUrl={imageUrl}
				/>
			))}
		</Wrapper>
	);
}

export default Shelf;
