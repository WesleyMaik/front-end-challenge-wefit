import { createContext, ReactNode, useEffect, useState } from "react";
import { ItemProps } from "@/components/Item";
import store from "store2";

export type CartContextProps = {
	items: CartItems[];
	addItem: (newItem: ItemProps) => void;
	removeItem: (prop: { id: string }) => void;
	increaseItem: (prop: { id: string }) => void;
	decreaseItem: (prop: { id: string }) => void;
	count: number;
	subtotal: number;
};

export type CartItems = ItemProps & {
	quantity: number;
};

export type CartProviderProps = {
	children: ReactNode;
	items: CartItems[];
};

const CartContext = createContext({} as CartContextProps);

export const STORE_KEY = "cartItems";

function CartProvider({
	children,
	items: initialItems = [],
}: CartProviderProps) {
	const [items, setItems] = useState(() => {
		if (store.has(STORE_KEY)) {
			const storedItems = store.get(STORE_KEY) as CartItems[];
			return storedItems;
		}

		return initialItems;
	});

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

	const increaseItem = ({ id }: { id: string }) => {
		const newItems = (() => {
			const index = items.findIndex((item) => item.id == id);

			if (index == -1) {
				return items;
			}

			const currentItem = items[index];
			items[index] = { ...currentItem, quantity: currentItem.quantity + 1 };

			return [...items];
		})();

		setItems(newItems);
	};

	const decreaseItem = ({ id }: { id: string }) => {
		const newItems = (() => {
			const index = items.findIndex((item) => item.id == id);

			if (index == -1) {
				return items;
			}

			const currentItem = items[index];
			items[index] = { ...currentItem, quantity: currentItem.quantity - 1 };

			return [...items];
		})();

		setItems(newItems);
	};

	const count =
		items.reduce(
			(previous, current) => (previous += current?.quantity || 1),
			0
		) || 0;

	const subtotal =
		items.reduce(
			(previous, current) => (previous += current.price * current.quantity),
			0
		) || 0;

	useEffect(() => {
		store.set(STORE_KEY, items);
	}, [items]);

	return (
		<CartContext.Provider
			value={{
				items,
				addItem,
				removeItem,
				count,
				decreaseItem,
				increaseItem,
				subtotal,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export { CartContext, CartProvider };
