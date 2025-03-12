import React from "react";

const ConfirmationForm = ({ onSubmit, paymentData, onBack }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const confirmationData = {
      confirmedAt: new Date(),
    };

    onSubmit(confirmationData);
  };

  const handleBack = () => {
    // Call the onBack prop to go back to the previous step
    if (typeof onBack === "function") {
      onBack();
    }
  };

  return (
    <div className="p-4 sm:px-6 sm:pt-0 sm:pb-4">
      <h2 className="text-xl font-bold text-gray-700 mb-6">
        Confirm your payment details
      </h2>
      {/* <p className="text-gray-500 mb-6 text-sm">
        Please review your information carefully before proceeding
      </p> */}

      {/* {status.status === "success" && (
        <div className="mb-6 bg-green-50 p-2 sm:p-4 rounded-lg flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-3 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-green-700">{status.message}</span>
        </div>
      )} */}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="relative group">
            <label className="text-gray-600 mb-1 block text-sm font-medium absolute z-2 -top-3 left-2 rounded-2xl px-2">
              Fee Type
            </label>
            <hr className="border-1 absolute border-gray-50 z-1 mx-2 w-20" />
            <input
              type="text"
              value={paymentData.feeType || ""}
              readOnly
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 outline-none cursor-not-allowed"
            />
          </div>

          <div className="relative">
            <label className="text-gray-600 mb-1 block text-sm font-medium absolute z-2 -top-3 left-2 rounded-2xl px-2">
              Your Name
            </label>
            <hr className="border-1 absolute border-gray-50 z-1 mx-2 w-24" />
            <input
              type="text"
              value={paymentData.name || ""}
              readOnly
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 outline-none cursor-not-allowed"
            />
          </div>

          <div className="relative">
            <label className="text-gray-600 mb-1 block text-sm font-medium absolute z-2 -top-3 left-2 rounded-2xl px-2">
              Phone No
            </label>
            <hr className="border-1 absolute border-gray-50 z-1 mx-2 w-20" />
            <div className="flex">
              <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 rounded-l-lg border border-r-0 border-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </span>
              <input
                type="text"
                value={paymentData.phone || ""}
                readOnly
                className="flex-1 w-full px-4 py-3 rounded-r-lg bg-gray-50 border border-gray-300 outline-none cursor-not-allowed"
              />
            </div>
          </div>

          <div className="relative">
            <label className="text-gray-600 mb-1 block text-sm font-medium absolute z-2 -top-3 left-2 rounded-2xl px-2">
              NIC/Passport
            </label>
            <hr className="border-1 absolute border-gray-50 z-1 mx-2 w-24" />
            <div className="flex">
              <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 rounded-l-lg border border-r-0 border-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                  />
                </svg>
              </span>
              <input
                type="text"
                value={paymentData.nicPassport || ""}
                readOnly
                className="flex-1 w-full px-4 py-3 rounded-r-lg bg-gray-50 border border-gray-300 outline-none cursor-not-allowed"
              />
            </div>
          </div>

          <div className="relative group">
            <label className="text-gray-600 mb-1 block text-sm font-medium absolute z-2 -top-3 left-2 rounded-2xl px-2">
              Card Type
            </label>
            <hr className="border-1 absolute border-gray-50 z-1 mx-2 w-20" />
            <input
              type="text"
              value={paymentData.cardType || ""}
              readOnly
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 outline-none cursor-not-allowed"
            />
          </div>

          <div className="relative">
            <label className="text-gray-600 mb-1 block text-sm font-medium absolute z-2 -top-3 left-2 rounded-2xl px-2">
              Paying Amount
            </label>
            <hr className="border-1 absolute border-gray-50 z-1 mx-2 w-28" />
            <div className="flex">
              <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 rounded-l-lg border border-r-0 border-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <input
                type="text"
                value={paymentData.amount || ""}
                readOnly
                className="flex-1 w-full px-4 py-3 rounded-r-lg bg-gray-50 border border-gray-300 outline-none cursor-not-allowed"
              />
            </div>
          </div>

          <div className="relative">
            <label className="text-gray-600 mb-1 block text-sm font-medium absolute z-2 -top-3 left-2 rounded-2xl px-2">
              Payment Reference
            </label>
            <hr className="border-1 absolute border-gray-50 z-1 mx-2 w-36" />
            <input
              type="text"
              value={paymentData.reference || ""}
              readOnly
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 outline-none cursor-not-allowed"
            />
          </div>

          <div className="relative">
            <label className="text-gray-600 mb-1 block text-sm font-medium absolute z-2 -top-3 left-2 rounded-2xl px-2">
              Email
            </label>
            <hr className="border-1 absolute border-gray-50 z-1 mx-2 w-16" />
            <div className="flex">
              <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 rounded-l-lg border border-r-0 border-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <input
                type="text"
                value={paymentData.email || ""}
                readOnly
                className="flex-1 w-full px-4 py-3 rounded-r-lg bg-gray-50 border border-gray-300 outline-none cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        {/* <div className="bg-yellow-50 border border-yellow-200 p-2 sm:p-4 rounded-lg mb-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Important information
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  By confirming this payment, you agree to the terms and
                  conditions. This transaction cannot be reversed once
                  confirmed.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
          <button
            type="button"
            onClick={handleBack}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-200 w-full md:w-auto flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            BACK
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition duration-200 w-full md:w-auto flex items-center justify-center shadow-lg"
          >
            CONFIRM PAYMENT
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConfirmationForm;
