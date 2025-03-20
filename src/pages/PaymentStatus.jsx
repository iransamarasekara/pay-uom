import React from "react";
import { uom_cover } from "../assets";

const PaymentStatus = ({
  status = "success",
  paymentId = "#123456789",
  timeDate = "24-01-2025, 21:40",
  refNumber = "000250268276",
  paymentMethod = "Bank Transfer",
  senderName = "Test",
  amount = "LKR 1,500",
  total = "LKR 1,500",
}) => {
  const isSuccess = status === "success";

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
        <img
          src={uom_cover}
          className="w-full h-full object-cover"
          alt="Background"
        />
      </div>
      <div className="relative w-full max-w-md bg-gray-100 border border-yellow-500 rounded-lg overflow-hidden shadow-xl">
        <div className="p-6 text-center border-b-2 border-gray-200">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
            style={{ backgroundColor: isSuccess ? "#F59E0B" : "#EF4444" }}
          >
            {isSuccess ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          <h1 className="text-xl font-bold text-gray-900">
            {isSuccess ? "Payment Successful" : "Payment Failed"}
          </h1>
          <p className="text-gray-500 mt-1">
            {isSuccess
              ? "Thank you for your payment!"
              : "There was an issue with your payment"}
          </p>

          <div className="mt-4 inline-flex items-center px-3 py-1 bg-yellow-500 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <span className="text-white text-sm">{paymentId}</span>
          </div>
        </div>

        <div className="p-4 border-b-2 border-gray-200">
          <div className="grid grid-cols-2 gap-2">
            <div className="text-gray-500">Time / Date</div>
            <div className="text-right text-gray-600">{timeDate}</div>

            <div className="text-gray-500">Ref Number</div>
            <div className="text-right text-gray-600">{refNumber}</div>

            <div className="text-gray-500">Payment Method</div>
            <div className="text-right text-gray-600">{paymentMethod}</div>

            <div className="text-gray-500">Sender Name</div>
            <div className="text-right text-gray-600">{senderName}</div>
          </div>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="text-gray-500">Amount</div>
            <div className="text-right text-gray-600">{amount}</div>

            <div className="text-gray-500 font-medium mt-2">Total</div>
            <div className="text-right text-gray-600 font-medium mt-2">
              {total}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentStatus;
