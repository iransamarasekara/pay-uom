import React, { useState } from "react";
import { uom_cover, uom_logo } from "../assets";
import ProgressBar from "../components/ProgressBar";
import PaymentForm from "../components/PaymentForm";
import ConfirmationForm from "../components/ConfirmationForm";
import PaymentStatus from "../components/PaymentStatus";

const Home = () => {
  // Track the current step and payment status
  const [currentStep, setCurrentStep] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState({
    status: "pending", // pending, processing, success, failed
    message: "",
    transactionId: "",
    timestamp: null,
  });

  // Store payment data between steps
  const [paymentData, setPaymentData] = useState(null);

  // Handle payment form submission
  const handlePaymentSubmit = (formData) => {
    // Set status to processing
    setPaymentStatus({
      ...paymentStatus,
      status: "processing",
      message: "Processing your payment...",
    });

    // Store the form data
    setPaymentData(formData);

    // Simulate API call to payment gateway
    setTimeout(() => {
      setPaymentStatus({
        status: "success",
        message: "Payment processed successfully!",
        transactionId: "TXN" + Math.floor(Math.random() * 1000000),
        timestamp: new Date(),
        amount: formData.amount,
        feeType: formData.feeType,
        name: formData.name,
      });

      // Move to next step
      setCurrentStep(1);
    }, 2000);
  };

  // Handle confirmation form submission
  const handleConfirmationSubmit = (confirmationData) => {
    // Combine payment data with confirmation data
    const completeData = {
      ...paymentData,
      ...confirmationData,
    };

    // This would typically send the confirmation data to backend
    console.log("Complete payment process:", completeData);

    // Move to final step
    setCurrentStep(2);
  };

  // Reset the payment process
  const handleReset = () => {
    setCurrentStep(0);
    setPaymentData(null);
    setPaymentStatus({
      status: "pending",
      message: "",
      transactionId: "",
      timestamp: null,
    });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
        <img
          src={uom_cover}
          className="w-full h-full object-cover"
          alt="Background"
        />
      </div>
      <div className="relative w-full max-w-4xl bg-white backdrop-blur-sm rounded-lg md:rounded-2xl shadow-xl md:shadow-2xl overflow-hidden">
        {/* Header with logo */}
        <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-800 p-4 sm:p-6 md:p-6 text-center relative">
          <div className="absolute top-4 items-center justify-items-start">
            <div className="bg-white/50 backdrop-blur-sm p-1 sm:p-2 rounded-full">
              <img
                src={uom_logo}
                alt="Organization Logo"
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16"
              />
            </div>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
            Pay Online
          </h1>
          <p className="text-brown-1 mt-1 text-sm sm:text-base">
            Secure payment gateway
          </p>
        </div>

        {/* Progress Steps */}
        <ProgressBar currentStep={currentStep} />

        {/* Conditional rendering based on current step */}
        {currentStep === 0 && (
          <PaymentForm
            onSubmit={handlePaymentSubmit}
            status={paymentStatus}
            paymentData={paymentData}
          />
        )}

        {currentStep === 1 && (
          <ConfirmationForm
            onSubmit={handleConfirmationSubmit}
            status={paymentStatus}
            paymentData={paymentData}
            onBack={() => setCurrentStep(0)}
          />
        )}

        {currentStep === 2 && (
          <PaymentStatus status={paymentStatus} onReset={handleReset} />
        )}

        <div className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 border-t">
          <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-2 sm:gap-0">
            <div className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
              <span>© 2025 University of Moratuwa Payment Gateway</span>
            </div>
            <div className="flex gap-2">
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded-full flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Secure
              </span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 mr-1"
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
                Verified
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
