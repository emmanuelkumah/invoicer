import React from "react";

interface CurrencyProps {
  selectedCurrency: string;
  setSelectedCurrency: React.Dispatch<React.SetStateAction<string>>;
}

const InvoiceCurrency: React.FC<CurrencyProps> = ({
  selectedCurrency,
  setSelectedCurrency,
}) => {
  return (
    <section className="my-2">
      <label
        htmlFor="currency"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Currency
      </label>
      <select
        id="currency"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={selectedCurrency}
        onChange={(e) => setSelectedCurrency(e.target.value)}
      >
        <option defaultValue="GH₵">Choose a currency</option>
        <option value="$">US$</option>
        <option value="CA$">CA$</option>
        <option value="GH₵">GH₵</option>
        <option value="£">GBP</option>
      </select>
    </section>
  );
};

export default InvoiceCurrency;
