import { Button } from "@/components/Button";
import { CartItems, STORE_KEY } from "@/contexts/CartContext";
import store from "store2";

type FinishButtonProps = {
	items: CartItems[];
	onFinishOrder: (prop: boolean) => void;
};

function FinishButton({ items, onFinishOrder }: FinishButtonProps) {
	function handleFinishOrder() {
		if (!items.length) {
			return;
		}

		store.remove(STORE_KEY);

		onFinishOrder(true);
	}

	return (
		<Button title="Finalizar Pedido" type="button" onClick={handleFinishOrder}>
			Finalizar Pedido
		</Button>
	);
}

export default FinishButton;
