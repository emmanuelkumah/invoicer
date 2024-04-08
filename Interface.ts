export interface Item {
  description: string;
  quantity: number;
  cost: number;
}

export interface Invoice {
  number: string;
  date: string;
  dueDate: string;
  billFrom: string;
  billTo: string;
  currency: string;
  tax: string;
  discount: string;
  invoiceItem: Item[];
}
