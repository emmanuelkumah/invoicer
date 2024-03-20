"use client";
import { v4 as uuidv4 } from "uuid";
import DisplayLogo from "./DisplayLogo";
import AddDynamicInvoiceItem from "./FormFields/AddDynamicInvoiceItem";
import InvoiceClient from "./FormFields/InvoiceClient";
import InvoiceCurrency from "./FormFields/InvoiceCurrency";
import InvoiceDate from "./FormFields/InvoiceDate";
import InvoiceDueDate from "./FormFields/InvoiceDueDate";
import InvoiceItem from "./FormFields/InvoiceItem";
import InvoiceNumber from "./FormFields/InvoiceNumber";
import InvoiceProvider from "./FormFields/InvoiceProvider";
import InvoiceTotal from "./FormFields/InvoiceTotal";
import { useState } from "react";

interface InvoiceItem {
  description: string;
  quantity: number;
  cost: number;
}

const Form = () => {
  const [invNumber, setInvNumber] = useState(0);
  const [invDate, setInvDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("$");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [businessDetails, setBusinessDetails] = useState({
    serviceProvider: "",
    client: "",
  });

  const [invItems, setInvItems] = useState<InvoiceItem[]>([
    { description: "", quantity: 0, cost: 0 },
  ]);

  const getLogo = (file: File) => {
    setSelectedImage(file);
  };

  const handleAddNewInvoiceItem = () => {
    setInvItems([...invItems, { description: "", quantity: 0, cost: 0 }]);
  };

  const handleInvoiceItemChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = event.target;

    setInvItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index] = {
        ...newItems[index],
        [name]:
          name === "quantity" || name === "cost" ? parseFloat(value) : value,
      };
      return newItems;
    });
  };
  const handleFormSubmission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <form
      className="bg-white p-5 w-full rounded-lg drop-shadow-lg sm:w-[80%]"
      onSubmit={handleFormSubmission}
    >
      <section className="grid grid-cols-1 border-3 gap-4 border border-gray-300 rounded-lg p-4 sm:grid-cols-5">
        {selectedImage ? (
          <div>
            <img
              alt="Logo"
              width="100%"
              src={URL.createObjectURL(selectedImage)}
            />
            <br />
            <button
              className="bg-slate-400 p-2 rounded-md hover:bg-slate-600"
              onClick={() => setSelectedImage(null)}
            >
              Remove
            </button>
          </div>
        ) : (
          <DisplayLogo getLogo={getLogo} />
        )}
        <InvoiceNumber invNumber={invNumber} setInvNumber={setInvNumber} />

        <InvoiceDate invDate={invDate} setInvDate={setInvDate} />
        <InvoiceDueDate dueDate={dueDate} setDueDate={setDueDate} />
        <InvoiceCurrency
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
        />
      </section>
      <section>
        <h3 className="mt-9 pb-2">Business Details</h3>

        <div className="grid grid-cols-1 border-3 gap-4 border border-gray-300 rounded-lg p-4 sm:grid-cols-2">
          <InvoiceProvider
            businessDetails={businessDetails}
            setBusinessDetails={setBusinessDetails}
          />
          <InvoiceClient
            businessDetails={businessDetails}
            setBusinessDetails={setBusinessDetails}
          />
        </div>
      </section>
      <section>
        <h3 className="mt-9 pb-2">Item Details</h3>
        {invItems.map((item, index) => (
          <div
            className="grid grid-cols-1 border-3 gap-4 border border-gray-300 rounded-lg p-4 mt-6 sm:grid-cols-6"
            key={index}
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
                name="description"
                value={item.description}
                onChange={(event) => handleInvoiceItemChange(event, index)}
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
                onChange={(event) => handleInvoiceItemChange(event, index)}
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
                onChange={(event) => handleInvoiceItemChange(event, index)}
              />
            </div>
            <div>
              <h3>Amount</h3>
              <h4>USD 5000</h4>
            </div>
          </div>
        ))}

        <button
          className="bg-cyan-800 text-white p-2 rounded-lg mt-4"
          onClick={handleAddNewInvoiceItem}
        >
          Add Item
        </button>
      </section>
      <InvoiceTotal />
      <section className="flex flex-row gap-4 mt-4 sm:gap-8 sm:my-8">
        <button className="bg-stone-300	 rounded-xl p-3 text-cyan-900 text-xl w-full sm:w-[20%]">
          Preview
        </button>
        <button className="bg-cyan-900 rounded-xl p-3 text-white text-xl w-full sm:w-[20%]">
          Generate{" "}
        </button>
      </section>
    </form>
  );
};

export default Form;
