"use client";
import { v4 as uuidv4 } from "uuid";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import DisplayLogo from "./DisplayLogo";
import InvoiceClient from "./FormFields/InvoiceClient";
import InvoiceCurrency from "./FormFields/InvoiceCurrency";
import InvoiceDate from "./FormFields/InvoiceDate";
import InvoiceDueDate from "./FormFields/InvoiceDueDate";
import InvoiceItem from "./FormFields/InvoiceItem";
import InvoiceNumber from "./FormFields/InvoiceNumber";
import InvoiceProvider from "./FormFields/InvoiceProvider";
import InvoiceTotal from "./FormFields/InvoiceTotal";
import { Button, Modal } from "flowbite-react";

import { useState } from "react";

interface InvoiceItem {
  description: string;
  quantity: number;
  cost: number;
}

const Form = () => {
  const [invNumber, setInvNumber] = useState(1);
  const [invDate, setInvDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [invoiceName, setInvoiceName] = useState<string>("");
  const [selectedCurrency, setSelectedCurrency] = useState("$");
  const [tax, setTax] = useState<string>("");
  const [discount, setDiscount] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [businessDetails, setBusinessDetails] = useState({
    serviceProvider: "",
    client: "",
  });

  const [invItems, setInvItems] = useState<InvoiceItem[]>([
    { description: "", quantity: 0, cost: 0 },
  ]);
  const [isHovered, setIsHovered] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const uploadCompanyLogo = (file: File) => {
    setSelectedImage(file);
  };

  const handleAddNewInvoiceItem = () => {
    setInvItems([...invItems, { description: "", quantity: 0, cost: 0 }]);
  };

  const handleDeleteInvoiceItem = (index: number) => {
    const updatedItems = [...invItems];
    updatedItems.splice(index, 1);
    setInvItems(updatedItems);
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
        [name]: name === "quantity" || name === "cost" ? Number(value) : value,
      };
      return newItems;
    });
  };

  const downloadInvoiceAsPDF = () => {
    const invoiceInputs: any = document.getElementById("invoiceContent");

    html2canvas(invoiceInputs).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("invoice.pdf");
    });
  };

  const calculateAmount = (invQuantity: number, invCost: number) => {
    return (invQuantity * invCost).toFixed(2);
  };

  const subTotal = invItems.reduce((total, currItem) => {
    return total + currItem.cost * currItem.quantity;
  }, 0);

  const discountAmount = (Number(discount) / 100) * subTotal;
  const totalAfterDiscount = subTotal - discountAmount;
  const salesTaxAmount = (Number(tax) / 100) * subTotal;
  const totalAmountDue = totalAfterDiscount + salesTaxAmount;

  return (
    <>
      <form
        className="bg-white p-5 w-full rounded-lg drop-shadow-lg sm:w-[80%]"
        id="invoiceContent"
      >
        <div className="grid place-items-center my-5">
          <input
            className="text-3xl border-0 text-center focus:outline-0"
            type="text"
            name=""
            id=""
            placeholder="Invoice"
            value={invoiceName}
            onChange={(e) => setInvoiceName(e.target.value)}
          />
        </div>
        <section className="grid grid-cols-1 border-3 gap-4 border border-gray-300 rounded-lg p-4 sm:grid-cols-5">
          {selectedImage ? (
            <div
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                alt="Logo"
                width="100%"
                src={URL.createObjectURL(selectedImage)}
              />
              {isHovered && (
                <div
                  className="absolute top-[2%] right-[20%] bg-slate-50 rounded-md p-2"
                  onClick={() => setSelectedImage(null)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </div>
              )}
            </div>
          ) : (
            <DisplayLogo uploadCompanyLogo={uploadCompanyLogo} />
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
              className="relative grid grid-cols-1 border-3 gap-4 border border-gray-300 rounded-lg p-4 mt-6 sm:grid-cols-6"
              key={index}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
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
                  required
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
                  min="1"
                  step="1"
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
                  min="1"
                  step="1"
                  id="cost"
                  name="cost"
                  value={item.cost}
                  onChange={(event) => handleInvoiceItemChange(event, index)}
                />
              </div>
              <div>
                <h3>Amount</h3>
                <h4>{`${selectedCurrency} ${calculateAmount(
                  item.quantity,
                  item.cost
                )}`}</h4>
              </div>
              {isHovered && (
                <div
                  className="absolute right-[10%] top-2"
                  onClick={() => handleDeleteInvoiceItem(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-red-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}

          <button
            className="bg-cyan-800 text-white p-2 rounded-lg mt-4"
            onClick={handleAddNewInvoiceItem}
          >
            Add Item
          </button>
        </section>
        <InvoiceTotal
          subTotal={subTotal}
          selectedCurrency={selectedCurrency}
          tax={tax}
          setTax={setTax}
          discount={discount}
          setDiscount={setDiscount}
          totalAmount={totalAmountDue}
        />
      </form>

      <button
        className="bg-cyan-900 rounded-xl p-3 text-white text-xl w-full sm:w-[20%]"
        onClick={downloadInvoiceAsPDF}
      >
        Download Invoice{" "}
      </button>
    </>
  );
};

export default Form;
