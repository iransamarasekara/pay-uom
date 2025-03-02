import React, { useEffect, useState } from "react";

const PaymentStatus = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Redirecting to card details page...");
    }, 3000);

    // Progress bar animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 4;
        clearInterval(interval);
        return 100;
      });
    }, 120);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full mx-auto mb-8 max-w-md p-8 rounded-lg sm:bg-white sm:shadow-lg">
      <div className="flex items-center justify-center mb-6">
        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-yellow-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
        Processing Your Payment
      </h2>
      <p className="text-center text-gray-600 mb-6">
        We're preparing your payment information. You'll be automatically
        redirected to the card details page in a moment.
      </p>

      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-yellow-600 h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="flex items-center justify-center text-sm text-gray-500">
        <svg
          className="animate-spin -ml-1 mr-3 h-4 w-4 text-yellow-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Please do not close this window
      </div>
    </div>
  );
};

export default PaymentStatus;
