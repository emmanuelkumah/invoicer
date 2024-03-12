import InvoiceCurrency from "./FormFields/InvoiceCurrency";
import InvoiceDate from "./FormFields/InvoiceDate";
import InvoiceDueDate from "./FormFields/InvoiceDueDate";
import InvoiceNumber from "./FormFields/InvoiceNumber";

const Form = () => {
  return (
    <form className="bg-white p-5 w-full rounded-lg drop-shadow-lg sm:w-[80%]">
      <div className="grid grid-cols-1 border-3 gap-4 border border-gray-300 rounded-lg p-4 sm:grid-cols-5">
        <section>Logo 3</section>

        <InvoiceNumber />
        <InvoiceDate />
        <InvoiceDueDate />
        <InvoiceCurrency/>
      </div>
    </form>
  );
};

export default Form;
