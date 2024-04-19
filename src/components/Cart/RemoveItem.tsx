import styled from "styled-components";
import { Trash } from "../Icons";
import { useCart } from "@/hooks/useCart";

type RemoveItemProps = {
	id: string;
};

const Button = styled.button`
	cursor: pointer;
	background-color: transparent;
	border: none;
`;

function RemoveItem({ id }: RemoveItemProps) {
	const { removeItem } = useCart();

	function handleRemoveItem() {
		return removeItem({ id });
	}

	return (
		<Button title="Remover item" type="button" onClick={handleRemoveItem}>
			<span className="sr-only">Remover item</span>
			<Trash color="#009EDD" />
		</Button>
	);
}

export default RemoveItem;
