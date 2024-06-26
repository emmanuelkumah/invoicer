import React from "react";
import { Label, TextInput } from "flowbite-react";
import { AiOutlinePercentage } from "react-icons/ai";

interface InvoiceTotalProps {
  subTotal: number;
  selectedCurrency: string;
  tax: string;
  setTax: React.Dispatch<React.SetStateAction<string>>;
  discount: string;
  setDiscount: React.Dispatch<React.SetStateAction<string>>;
  totalAmount: number;
}

const InvoiceTotal: React.FC<InvoiceTotalProps> = ({
  subTotal,
  selectedCurrency,
  tax,
  setTax,
  totalAmount,
  discount,
  setDiscount,
}) => {
  return (
    <div>
      <h3>{`Subtotal is:  ${selectedCurrency} ${subTotal.toFixed(2)}`}</h3>

      <div className="flex flex-row gap-4">
        <section className="my-2">
          <Label htmlFor="tax" value="Tax Percentage" />

          <TextInput
            id="tax"
            type="number"
            icon={AiOutlinePercentage}
            value={tax}
            onChange={(event) => setTax(event?.target.value)}
          />

          {/* <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"
                />
              </svg>
            </span>
            <input
              type="text"
              id="tax-input"
              className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter tax"
              value={tax}
              onChange={(event) => setTax(event?.target.value)}
            />
          </div> */}
        </section>{" "}
        <section className="my-2">
          <Label htmlFor="discount" value="Discount Percentage" />

          <TextInput
            id="discount"
            type="number"
            icon={AiOutlinePercentage}
            value={discount}
            onChange={(event) => setDiscount(event?.target.value)}
          />
          {/* <label
            htmlFor="number-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Discount
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"
                />
              </svg>
            </span>
            <input
              type="text"
              id="discount-input"
              className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter discount"
              value={discount}
              onChange={(event) => setDiscount(event.target.value)}
            />
          </div> */}
        </section>
      </div>
      <section className="flex  justify-between items-center">
        <h3>Total </h3>
        <p>{`${selectedCurrency}${totalAmount.toFixed(2)}`}</p>
      </section>
    </div>
  );
};

export default InvoiceTotal;
