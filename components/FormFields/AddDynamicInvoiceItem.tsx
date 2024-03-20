import React from "react";

type AddItemProps = {
  key: number;
  item: { description: string; quantity: number; cost: number };
  handleInvoiceItemChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => string;
};

const AddDynamicInvoiceItem: React.FC<AddItemProps> = ({
  item,
  key,
  handleInvoiceItemChange,
}) => {
  return (
    <div
      className="grid grid-cols-1 border-3 gap-4 border border-gray-300 rounded-lg p-4 mt-6 sm:grid-cols-6"
      key={key}
    >
      <div className="sm:col-span-3">
        <label
          htmlFor="item"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Item
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          id="item"
          name="itemName"
          value={item.description}
          onChange={(event) => handleInvoiceItemChange(event, key)}
        />
      </div>
      <div>
        <label
          htmlFor="quantity"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Quantity
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="number"
          id="quantity"
          name="quantity"
          value={item.quantity}
          onChange={(event) => handleInvoiceItemChange(event, key)}
        />
      </div>
      <div>
        <label
          htmlFor="cost"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Cost
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="number"
          id="cost"
          name="cost"
          value={item.cost}
          onChange={(event) => handleInvoiceItemChange(event, key)}
        />
      </div>
      <div>
        <h3>Amount</h3>
        <h4>USD 5000</h4>
      </div>
    </div>
  );
};

export default AddDynamicInvoiceItem;
