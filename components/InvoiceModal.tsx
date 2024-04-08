"use client";

import { Button, Modal, Table } from "flowbite-react";
import { useState } from "react";

interface ModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  invItems: any;
  subTotal: number;
  totalAmount: number;
  discount: number;
  taxAmount: number;
  selectedCurrency: string;
  selectedImage: any;
  businessDetails: any;
  invNumber: number;
  invDate: string;
  dueDate: string;
}
const InvoiceModal: React.FC<ModalProps> = ({
  openModal,
  setOpenModal,
  invItems,
  subTotal,
  totalAmount,
  discount,
  taxAmount,
  selectedCurrency,
  selectedImage,
  businessDetails,
  invNumber,
  invDate,
  dueDate,
}) => {
  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Invoice Details</Modal.Header>
        <Modal.Body>
          <div>
            <div className="flex flex-row justify-between">
              <img
                alt="Logo"
                width="50%"
                height="50%"
                src={URL.createObjectURL(selectedImage)}
              />
              <div className="flex flex-col">
                <h3 className="text-3xl">Invoice</h3>
                <p>Invoice Number:{invNumber}</p>
                <p className="text-xl">{businessDetails.serviceProvider}</p>
                <p>{invDate}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between my-5 bg-slate-300 rounded-md p-2">
              <p className="text-xl font-light">
                From:
                <span className="px-2 font-semibold">
                  {businessDetails.serviceProvider}
                </span>
              </p>
              <p className="text-xl font-light">
                Bill to:
                <span className="px-2 font-semibold">
                  {businessDetails.client}
                </span>
              </p>
            </div>

            <Table striped>
              <Table.Head>
                <Table.HeadCell>Item name</Table.HeadCell>
                <Table.HeadCell>Quantity</Table.HeadCell>
                <Table.HeadCell>Cost</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {invItems.map((item: any, index: number) => (
                  <Table.Row
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    key={index}
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {item.description}
                    </Table.Cell>
                    <Table.Cell>{item.quantity}</Table.Cell>
                    <Table.Cell>{item.cost}</Table.Cell>
                  </Table.Row>
                ))}
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell></Table.Cell>

                  <Table.Cell className="font-bold">Sub total</Table.Cell>
                  <Table.Cell>
                    {" "}
                    {selectedCurrency}
                    {subTotal}
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell></Table.Cell>

                  <Table.Cell className="font-bold">Tax</Table.Cell>
                  <Table.Cell>
                    {" "}
                    {selectedCurrency}
                    {taxAmount}
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell></Table.Cell>

                  <Table.Cell className="font-bold">Discount</Table.Cell>
                  <Table.Cell>
                    {selectedCurrency}
                    {discount}
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell></Table.Cell>

                  <Table.Cell className="text-2xl font-semibold">
                    Total
                  </Table.Cell>
                  <Table.Cell className="text-2xl font-semibold">
                    {selectedCurrency}
                    {totalAmount.toFixed(2)}
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Download </Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default InvoiceModal;
