import styled from "styled-components";
import { Item, ItemProps } from "@/components/Item";

import LoadingState from "./LoadingState";
import EmptyState from "./EmptyState";

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

function Shelf({ items, isLoading }: ShelfProps) {
	if (isLoading) {
		return <LoadingState />;
	}

	if (!isLoading && items.length == 0) {
		return <EmptyState />;
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
