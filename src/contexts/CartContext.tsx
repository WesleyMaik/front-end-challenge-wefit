import { createContext, ReactNode, useState } from "react";
import { ItemProps } from "@/components/Item";

export type CartContextProps = {
	items: CartItems[];
	addItem: (newItem: ItemProps) => void;
	removeItem: (prop: { id: string }) => void;
	count: number;
};

type CartItems = ItemProps & {
	quantity: number;
};

export type CartProviderProps = {
	children: ReactNode;
	items: CartItems[];
};

const CartContext = createContext({} as CartContextProps);

function CartProvider({
	children,
	items: initialItems = [],
}: CartProviderProps) {
	const [items, setItems] = useState(initialItems);

	const addItem = (newItem: ItemProps) => {
		const newItems = (() => {
			const index = items.findIndex((item) => item.id == newItem.id);

			if (index == -1) {
				return [...items, { ...newItem, quantity: 1 }];
			}

			const selected = items[index];
			const quantity = selected.quantity;

			items[index] = { ...selected, quantity: quantity + 1 };

			return [...items];
		})();

		setItems(newItems);
	};

	const removeItem = ({ id }: { id: string }) => {
		const newItems = (() => {
			const index = items.findIndex((item) => item.id == id);

			if (index == -1) {
				return items;
			}

			items.splice(index, 1);

			return [...items];
		})();

		setItems(newItems);
	};

	const count =
		items.reduce(
			(previous, current) => (previous += current?.quantity || 1),
			0
		) || 0;

	return (
		<CartContext.Provider
			value={{
				items,
				addItem,
				removeItem,
				count,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export { CartContext, CartProvider };
