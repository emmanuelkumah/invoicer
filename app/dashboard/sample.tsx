import React from "react";

const sample = () => {
  return (
    <div>
      {/*  <section>
        <h2 className="text-2xl text-center my-3">Invoice Details</h2>
        <div className="grid grid-cols-1 border-3 gap-4 sm:grid-cols-5">
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
          <div className="flex flex-col">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an option
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
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
      <section>
        <h2 className="text-2xl text-center my-3">Item Details</h2>
        <div className="grid grid-cols-1 border-3 gap-4 sm:grid-cols-6 sm:gap-3">
          <div className="sm:col-span-3">
            <label htmlFor="item">Item</label>
            <div className="flex relative rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 sm:w-full">
              <input
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                type="text"
                name=""
                id="item"
                placeholder="Description of item "
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="quantity">Quantity</label>
            <div className="flex relative rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 sm:w-full">
              <input
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                type="number"
                name=""
                id="quantity"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="rate">Cost</label>
            <div className="flex relative rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 sm:w-full">
              <input
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                type="number"
                name=""
                id="cost"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between sm:items-center">
            <h3 className="text-2xl">Amount</h3>
            <p>3000</p>
          </div>
        </div>
        <button className="bg-indigo-500 rounded-md p-3 text-white my-3 hover:bg-green-900">
          Add Item
        </button>
      </section>
      <section className="flex flex-col sm:flex-row">
        <div className="flex justify-between items-center">
          <h3 className="text-3xl">SubTotal:</h3>
          <p className="text-2xl px-2">3000</p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <label htmlFor="tax">Tax</label>
          <div className="flex relative rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 sm:mx-4">
            <input
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              type="number"
              name=""
              id="tax"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center mt-5 sm:mt-0">
          <label htmlFor="discount">Discount</label>
          <div className="flex relative rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 sm:mx-4">
            <input
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              type="number"
              name=""
              id="discount"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between mt-5 sm:mt-0 sm:items-center">
          <h2 className="text-3xl">Total:</h2>
          <p className="text-3xl px-3">$4000</p>
        </div>
      </section>
      <section className="flex flex-row gap-4 mt-4 sm:gap-8 sm:my-8">
        <button className="bg-stone-300	 rounded-xl p-3 text-cyan-900 text-xl w-full sm:w-[20%]">
          Preview
        </button>
        <button className="bg-cyan-900 rounded-xl p-3 text-white text-xl w-full sm:w-[20%]">
          Generate{" "}
        </button>
      </section>*/}
    </div>
  );
};

export default sample;
