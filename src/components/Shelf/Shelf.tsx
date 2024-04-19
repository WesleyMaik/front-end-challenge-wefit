import styled from "styled-components";
import { Item, ItemProps } from "@/components/Item";

type ShelfProps = {
	items: ItemProps[];
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

function Shelf({ items }: ShelfProps) {
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
