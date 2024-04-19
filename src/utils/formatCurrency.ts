export type FormatCurrencyOptions = {
	locales?: Intl.LocalesArgument;
	currency?: string;
};

function formatCurrency(number: number, options?: FormatCurrencyOptions) {
	const locales = options?.locales || "pt-br";
	const currency = options?.currency || "BRL";

	return Number(number).toLocaleString(locales, {
		style: "currency",
		currency: currency,
	});
}

export default formatCurrency;
