import React from "react";

const ProgressBar = ({ currentStep }) => {
  const steps = ["Information", "Confirmation", "Payment Status"];

  return (
    <div className="max-w-3xl mx-auto px-6 py-4">
      <div className="relative">
        <div className="absolute top-5 w-full flex justify-between px-2 sm:px-10">
          {steps.map(
            (_, index) =>
              index < steps.length - 1 && (
                <div
                  key={`line-${index}`}
                  className={`h-1 flex-grow ml-2 mr-4 sm:ml-16 sm:mr-20 transition-colors duration-300 ease-in-out rounded-full
                  ${currentStep > index ? "bg-yellow-300" : "bg-gray-200"}`}
                ></div>
              )
          )}
        </div>

        {/* Steps with Circles */}
        <div className="flex items-start justify-between relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Step Circle */}
              <div
                className={`rounded-full h-10 w-10 flex items-center justify-center shadow-md transition-all duration-300 ease-in-out
                  ${
                    currentStep >= index
                      ? "bg-yellow-1 text-white"
                      : "bg-gray-100 text-gray-400"
                  }`}
              >
                {index === 0 && (
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
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
                {index === 1 && (
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
                {index === 2 && (
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
                )}
              </div>

              {/* Step Label */}
              <span
                className={`mt-2 text-xs sm:text-sm font-medium transition-colors duration-300 ease-in-out
                  ${currentStep >= index ? "text-brown-1" : "text-gray-500"}`}
              >
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
