"use client";
import DisplayLogo from "./DisplayLogo";
import InvoiceClient from "./FormFields/InvoiceClient";
import InvoiceCurrency from "./FormFields/InvoiceCurrency";
import InvoiceDate from "./FormFields/InvoiceDate";
import InvoiceDueDate from "./FormFields/InvoiceDueDate";
import InvoiceItem from "./FormFields/InvoiceItem";
import InvoiceNumber from "./FormFields/InvoiceNumber";
import InvoiceProvider from "./FormFields/InvoiceProvider";
import InvoiceTotal from "./FormFields/InvoiceTotal";
import { useState, useRef } from "react";

const Form = () => {
  const [invNumber, setInvNumber] = useState(0);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const getLogo = (file: File) => {
    setSelectedImage(file);
  };

  return (
    <form className="bg-white p-5 w-full rounded-lg drop-shadow-lg sm:w-[80%]">
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

        <InvoiceDate />
        <InvoiceDueDate />
        <InvoiceCurrency />
      </section>
      <section>
        <h3 className="mt-9 pb-2">Business Details</h3>

        <div className="grid grid-cols-1 border-3 gap-4 border border-gray-300 rounded-lg p-4 sm:grid-cols-2">
          <InvoiceProvider />
          <InvoiceClient />
        </div>
      </section>
      <section>
        <h3 className="mt-9 pb-2">Item Details</h3>
        <InvoiceItem />
        <button className="bg-cyan-800 text-white p-2 rounded-lg mt-4">
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
