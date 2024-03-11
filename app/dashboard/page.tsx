"use client";
import { v4 as uuidv4 } from "uuid";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
useState;
const AppPage = () => {
  const [invoiceNumber, setInvoiceNumber] = useState<number>(1);

  const addNewItem = () => {
    console.log("adding new item");
  };
  return (
    <form className="bg-white p-5 w-full">
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="flex flex-row gap-4">
          <label htmlFor="invoiceNumber">Invoice number</label>
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900  focus:ring-0 sm:text-sm sm:leading-6"
              type="number"
              name=""
              id="invoiceNumber"
              min="1"
              step="1"
              value={invoiceNumber}
              //   onChange={(e) => setInvoiceNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="font-bold" htmlFor="from">
            From{" "}
          </label>
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              type="text"
              name="from"
              id="invoiceNumber"
              placeholder="Who is this invoice from"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="font-bold" htmlFor="bill">
            Bill to
          </label>
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              type="text"
              name="bill"
              id="bill"
              placeholder="Who is this invoice to?"
            />
          </div>
        </div>
        <section className="flex flex-col">
          <div className="flex flex-col">
            <label className="font-bold" htmlFor="bill">
              Payment terms{" "}
            </label>
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                type="text"
                name="bill"
                id="bill"
                placeholder="Payment terms"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="font-bold" htmlFor="bill">
              Due Date
            </label>
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                type="date"
                name="bill"
                id="bill"
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col border px-3">
          <div className="flex flex-col">
            <h4 className="text-4xl ">Amount : $500</h4>
            <div className="flex gap-3 w-[50%]">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  type="number"
                  name=""
                  id=""
                  size={50}
                />
              </div>

              <span>X</span>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  type="number"
                  size={10}
                />
              </div>
            </div>
          </div>
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              type="text"
              name="bill"
              id="bill"
              placeholder="Description of product or service"
            />
          </div>
          <button
            className="w-1/2 rounded-lg bg-slate-700 text-yellow-50 mt-5 py-3"
            onClick={addNewItem}
          >
            Add new item
          </button>
        </section>
        <section className="flex flex-col gap-4">
          <div className="flex flex-row gap-3">
            <label htmlFor="">Tax rate</label>
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                type="number"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <label htmlFor="">Discount rate</label>
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                type="number"
                name=""
                id=""
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3>Subtotal </h3>
            <span>Total Value </span>
          </div>
          <div>
            <h3>Discount </h3>
            <span>Total Value </span>
          </div>
          <h2>
            Total : <span>Total amount</span>
          </h2>
        </section>
      </div>
    </form>
  );
};

export default AppPage;
