import formatCurrency from "@/utils/formatCurrency";

type FormattedCurrencyProps = {
	value: number;
};

function FormattedCurrency({ value }: FormattedCurrencyProps) {
	return <span>{formatCurrency(value)}</span>;
}

export default FormattedCurrency;
