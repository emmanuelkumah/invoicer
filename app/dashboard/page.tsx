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
    <form className="bg-white p-5 w-full rounded-lg">
      <section>
        <h2 className="text-2xl text-center my-3">Invoice Details</h2>
        <div className="grid grid-cols-1 border-3 gap-4 sm:grid-cols-4">
          <div>
            <input type="file" name="" id="" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="invoiceNo">Invoice Number</label>
            <div className="flex relative rounded-lg shadow-sm ring-1 ring-inset ring-gray-300">
              <span className="flex items-center bg-slate-500 text-cyan-50 border-0 px-2 rounded-l-lg">
                #
              </span>
              <input
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900  focus:ring-0 sm:text-sm sm:leading-6"
                type="number"
                name="invoiceNumber"
                id="invoiceNumber"
                min="1"
                step="1"
                value={invoiceNumber}
                onChange={() => console.log("change nu")}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="invDate">Invoice Date</label>
            <div className="flex relative rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
              <input
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900  focus:ring-0 sm:text-sm sm:leading-6"
                type="date"
                name="invDate"
                id="invDate"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="dueDate">Due Date</label>
            <div className="flex relative rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
              <input
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900  focus:ring-0 sm:text-sm sm:leading-6"
                type="date"
                name="dueDate"
                id="dueDate"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl text-center my-3">Business Information</h2>
        <div className="grid grid-cols-1 border-3 gap-4 sm:grid-cols-2">
          <div className="flex flex-col">
            <label className="font-bold py-2" htmlFor="serviceProvider">
              Service Provider
            </label>
            <div className="flex relative rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
              <input
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                type="text"
                name="serviceProvider"
                id="serviceProvider"
                placeholder="Who is this invoice from ?"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="font-bold py-2" htmlFor="client">
              Client
            </label>
            <div className="flex relative rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
              <input
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                type="text"
                name="client"
                id="client"
                placeholder="Who is this invoice to?"
              />
            </div>
          </div>{" "}
        </div>
      </section>
      <section>Item Details</section>
      <section>Sub Totals</section>
      <section>
        <button>Preview</button>
        <button>Generate </button>
      </section>
    </form>
  );
};

export default AppPage;
