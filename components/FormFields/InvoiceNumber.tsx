"use client";

interface ChildProps {
  invNumber: number;
  setInvNumber: React.Dispatch<React.SetStateAction<number>>;
}
const InvoiceNumber: React.FC<ChildProps> = ({ invNumber, setInvNumber }) => {
  return (
    <section className="my-2">
      <label
        htmlFor="number-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Invoice Number
      </label>
      <div className="flex">
        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6h8m-8 6h8m-8 6h8M4 16a2 2 0 1 1 3.321 1.5L4 20h5M4 5l2-1v6m-2 0h4"
            />
          </svg>
        </span>
        <input
          type="number"
          id="number-input"
          className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="1"
          value={invNumber}
          onChange={() => setInvNumber(invNumber + 1)}
        />
      </div>
    </section>
  );
};

export default InvoiceNumber;
