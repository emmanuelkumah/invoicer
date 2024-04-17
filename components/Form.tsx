"use client";

import DisplayLogo from "./DisplayLogo";
//import InvoiceItem from "./FormFields/InvoiceItem";
import InvoiceTotal from "./FormFields/InvoiceTotal";
import { Invoice, Item } from "@Interface";
import { Button, Label, Select, TextInput } from "flowbite-react";
import { IoCalendarNumber } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";
import { FaRegUserCircle } from "react-icons/fa";
import { PiNewspaperFill } from "react-icons/pi";
import { AiOutlinePercentage } from "react-icons/ai";

import { useState } from "react";
import InvoiceModal from "./InvoiceModal";

const Form = () => {
  const [invoiceDetails, setInvoiceDetails] = useState<Invoice>({
    number: "1",
    date: "",
    dueDate: "",
    billFrom: "",
    billTo: "",
    currency: "",
    tax: "",
    discount: "",
    invoiceItem: [
      {
        description: "",
        quantity: 0,
        cost: 0,
      },
    ],
  });

  // console.log(invoiceDetails);

  // const [tax, setTax] = useState<string>("");
  // const [discount, setDiscount] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const uploadCompanyLogo = (file: File) => {
    setSelectedImage(file);
  };

  const addNewInvoiceItem = () => {
    setInvoiceDetails({
      ...invoiceDetails,
      invoiceItem: [
        ...invoiceDetails.invoiceItem,
        {
          description: "",
          quantity: 0,
          cost: 0,
        },
      ],
    });
  };

  const handleDeleteInvoiceItem = (index: number) => {
    const invoiceItems = invoiceDetails.invoiceItem;
    const updatedItems = [...invoiceItems];
    updatedItems.splice(index, 1);
    setInvoiceDetails({
      ...invoiceDetails,
      invoiceItem: [...updatedItems],
    });
    //setInvItems(updatedItems);
  };
  const handleInvoiceItemChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = event.target;
    const newInvoiceItem = [...invoiceDetails.invoiceItem];

    const updatedItem = {
      ...newInvoiceItem[index],
      [name]: name === "quantity" || name === "cost" ? Number(value) : value,
    };

    newInvoiceItem[index] = updatedItem;
    setInvoiceDetails({ ...invoiceDetails, invoiceItem: newInvoiceItem });
  };

  const calculateAmount = (invQuantity: number, invCost: number) => {
    return (invQuantity * invCost).toFixed(2);
  };

  const subTotal = invoiceDetails.invoiceItem.reduce((total, currItem) => {
    return total + currItem.cost * currItem.quantity;
  }, 0);

  const discountAmount = (Number(invoiceDetails.discount) / 100) * subTotal;
  const totalAfterDiscount = subTotal - discountAmount;
  const salesTaxAmount = (Number(invoiceDetails.tax) / 100) * subTotal;
  const totalAmountDue = totalAfterDiscount + salesTaxAmount;

  // const handleInvoiceSubmission = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   submittedInvoiceDetails = {
  //     invDate: invDate,
  //     invNumber: invNumber,
  //     invItems: invItems,
  //     businessDetails: businessDetails,
  //   };
  //   setOpenModal(true);
  // };

  return (
    <>
      <form
        className="bg-white p-5 w-full rounded-lg drop-shadow-lg sm:w-[80%]"
        // onSubmit={(event) => handleInvoiceSubmission(event)}
      >
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
          <div>
            <Label
              htmlFor="number"
              value="Invoice Number"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            />

            <TextInput
              placeholder="invoice"
              type="number"
              autoFocus
              min="1"
              step="1"
              id="number"
              addon="#"
              value={invoiceDetails.number}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInvoiceDetails({ ...invoiceDetails, number: e.target.value })
              }
            />
          </div>

          <div>
            <Label
              htmlFor="date"
              value="Invoice Date"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            />

            <TextInput
              type="date"
              autoFocus
              min="2024-01-04"
              id="date"
              icon={IoCalendarNumber}
              value={invoiceDetails.date}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInvoiceDetails({
                  ...invoiceDetails,
                  date: e.target.value,
                })
              }
            />
          </div>
          <div>
            <Label
              htmlFor="due-date"
              value="Due Date"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            />

            <TextInput
              type="date"
              autoFocus
              min="1"
              step="1"
              id="due-date"
              icon={IoCalendarNumber}
              value={invoiceDetails.dueDate}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInvoiceDetails({
                  ...invoiceDetails,
                  dueDate: e.target.value,
                })
              }
            />
          </div>
          <div>
            <Label htmlFor="currency" value="Currency" />
            <Select
              id="currency"
              required
              value={invoiceDetails.currency}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setInvoiceDetails({
                  ...invoiceDetails,
                  currency: e.target.value,
                })
              }
            >
              <option defaultValue="US$">USD</option>
              <option value="CA$">CAD</option>
              <option value="£">GBP</option>
              <option value="GH₵">GHS</option>
            </Select>
          </div>
        </section>
        <section>
          <h3 className="mt-9 pb-2">Business Details</h3>

          <div className="grid grid-cols-1 border-3 gap-4 border border-gray-300 rounded-lg p-4 sm:grid-cols-2">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="billFrom" value="Bill From" />
              </div>
              <TextInput
                id="billFrom"
                type="text"
                icon={FaRegUserCircle}
                placeholder="Who is this invoice from?"
                value={invoiceDetails.billFrom}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInvoiceDetails({
                    ...invoiceDetails,
                    billFrom: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="billTo" value="Bill To" />
              </div>
              <TextInput
                id="billTo"
                type="text"
                icon={FaRegUserCircle}
                placeholder="Who is this invoice to?"
                value={invoiceDetails.billTo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInvoiceDetails({
                    ...invoiceDetails,
                    billTo: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </section>
        <section>
          <h3 className="mt-9 pb-2">Item Details</h3>
          {invoiceDetails.invoiceItem.map((item, index) => (
            <div
              className="relative grid grid-cols-1 border-3 gap-4 border border-gray-300 rounded-lg p-4 mt-6 sm:grid-cols-6"
              key={index}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="max-w-lg sm:col-span-3">
                <div className="mb-2 block">
                  <Label htmlFor="item" value="Item" />
                </div>
                <TextInput
                  id="item"
                  type="text"
                  placeholder="Item Description"
                  name="description"
                  required
                  icon={PiNewspaperFill}
                  value={item.description}
                  onChange={(event) => handleInvoiceItemChange(event, index)}
                />
              </div>
              <div className="max-w-sm">
                <div className="mb-2 block">
                  <Label htmlFor="quantity" value="Quantity" />
                </div>
                <TextInput
                  id="quantity"
                  min="1"
                  type="number"
                  name="quantity"
                  required
                  value={item.quantity}
                  onChange={(event) => handleInvoiceItemChange(event, index)}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="cost" value="Cost" />
                </div>
                <TextInput
                  id="cost"
                  type="number"
                  name="cost"
                  min="0"
                  required
                  value={item.cost}
                  onChange={(event) => handleInvoiceItemChange(event, index)}
                />
              </div>
              <div>
                <h3>Amount</h3>
                <h4>
                  {`${invoiceDetails.currency} ${calculateAmount(
                    item.quantity,
                    item.cost
                  )}`}
                </h4>
              </div>
              {isHovered && (
                <div
                  className="absolute right-[5%] bottom-[5%] sm:top-[50%]"
                  onClick={() => handleDeleteInvoiceItem(index)}
                >
                  <TiDelete size={30} color="red" />
                </div>
              )}
            </div>
          ))}

          <Button onClick={addNewInvoiceItem} color="dark" className="my-4">
            Add Item
          </Button>
        </section>
        <section className="flex flex-col">
          <div className="text-xl">
            {`Subtotal is:  ${invoiceDetails.currency} ${subTotal.toFixed(2)}`}
          </div>

          <div className="grid grid-col-1 sm:grid-cols-4 sm:gap-4">
            <div>
              <Label htmlFor="tax" value="Tax Percent" />

              <TextInput
                id="tax"
                type="number"
                icon={AiOutlinePercentage}
                value={invoiceDetails.tax}
                onChange={(event) =>
                  setInvoiceDetails({
                    ...invoiceDetails,
                    tax: event.target.value,
                  })
                }
              />
            </div>
            <div>
              <Label htmlFor="discount" value="Discount Percent" />

              <TextInput
                id="discount"
                type="number"
                icon={AiOutlinePercentage}
                value={invoiceDetails.discount}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setInvoiceDetails({
                    ...invoiceDetails,
                    discount: event.target.value,
                  })
                }
              />
            </div>
            <h3 className="text-xl mt-5 col-span-2">
              {`Total Amount Due: ${
                invoiceDetails.currency
              }${totalAmountDue.toFixed(2)}`}
            </h3>
          </div>
        </section>
      </form>
      <Button className="my-8" onClick={() => setOpenModal(true)}>
        Preview invoice
      </Button>

      {/* {openModal && (
        <InvoiceModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          invItems={invItems}
          subTotal={subTotal}
          totalAmount={totalAmountDue}
          discount={discountAmount}
          taxAmount={salesTaxAmount}
          selectedCurrency={selectedCurrency}
          selectedImage={selectedImage}
          businessDetails={businessDetails}
          invNumber={invNumber}
          invDate={invDate}
          dueDate={dueDate}
        />
      )}  */}
    </>
  );
};

export default Form;
