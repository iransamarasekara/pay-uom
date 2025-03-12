import { useState } from "react";

const PaymentForm = ({ onSubmit, status, paymentData }) => {
  const [formData, setFormData] = useState({
    feeType: paymentData?.feeType || "",
    name: paymentData?.name || "",
    phone: paymentData?.phone || "",
    nicPassport: paymentData?.nicPassport || "",
    cardType: paymentData?.cardType || "",
    amount: paymentData?.amount || "",
    reference: paymentData?.reference || "",
    email: paymentData?.email || "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });

    // Validate field on blur
    validateField(name, formData[name]);
  };

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "feeType":
        if (!value) error = "Fee type is required";
        break;
      case "name":
        if (!value) error = "Name is required";
        else if (value.length < 3)
          error = "Name must be at least 3 characters long";
        break;
      case "phone":
        if (!value) error = "Phone number is required";
        else if (!/^\d{10,15}$/.test(value.replace(/\D/g, "")))
          error = "Please enter a valid phone number";
        break;
      case "nicPassport":
        if (!value) error = "NIC/Passport is required";
        else if (value.length < 5) error = "Please enter a valid ID number";
        break;
      case "cardType":
        if (!value) error = "Card type is required";
        break;
      case "amount":
        if (!value) error = "Amount is required";
        else if (isNaN(value) || parseFloat(value) <= 0)
          error = "Please enter a valid amount";
        break;
      case "reference":
        if (!value) error = "Payment reference is required";
        break;
      case "email":
        if (!value) error = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Please enter a valid email address";
        break;
      default:
        break;
    }

    // Only set error if field has been touched
    if (touched[name] || Object.keys(touched).length > 3) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
    }

    return !error;
  };

  const validateForm = () => {
    let isValid = true;

    // Validate all fields and set touched state for all
    const touchedFields = {};
    Object.keys(formData).forEach((field) => {
      touchedFields[field] = true;
      const fieldIsValid = validateField(field, formData[field]);
      if (!fieldIsValid) {
        isValid = false;
      }
    });

    setTouched(touchedFields);

    return isValid;
  };

  const handleVerify = () => {
    if (validateForm()) {
      console.log("Form verified:", formData);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      onSubmit(formData); // Call the onSubmit function passed from parent
    } else {
      console.log("Form has errors, please fix them");
    }
  };

  return (
    <div className="p-4 sm:px-6 sm:pt-0 sm:pb-4">
      <h2 className="text-xl font-bold text-gray-700 mb-6">
        Please enter your payment details
      </h2>
      {/* <p className="text-gray-500 mb-6 text-sm">
        All fields are required and information will be secured and encrypted
      </p> */}

      {status.status === "processing" && (
        <div className="mb-6 bg-blue-50 p-4 rounded-lg flex items-center">
          <svg
            className="animate-spin h-5 w-5 mr-3 text-yellow-500"
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
          <span className="text-yellow-700">{status.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="relative group">
            <label className="text-gray-600 mb-1 block text-sm font-medium absolute z-2 -top-3 left-2 rounded-2xl px-2">
              Fee Type <span className="text-red-500">*</span>
            </label>
            <hr className="border-1 absolute border-white z-1 mx-2 w-24" />
            <div className="relative">
              <select
                name="feeType"
                value={formData.feeType}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={status.status === "processing"}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.feeType
                    ? "border-red-500"
                    : "border-gray-300 focus:border-yellow-500"
                } transition duration-200 outline-none bg-white appearance-none`}
              >
                <option value="" disabled>
                  Select Fee Type
                </option>
                <option value="Hostel Fee">Hostel Fee</option>
                <option value="Library Fee">Library Fee</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            {errors.feeType && (
              <p className="text-red-500 text-xs mt-1">{errors.feeType}</p>
            )}
          </div>

          <div className="relative">
            <label className="text-gray-600 mb-1 block text-sm font-medium absolute z-2 -top-3 left-2 rounded-2xl px-2">
              Your Name <span className="text-red-500">*</span>
            </label>
            <hr className="border-1 absolute border-white z-1 mx-2 w-24" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={status.status === "processing"}
              placeholder="Enter your full name"
              className={`w-full px-4 py-3 rounded-lg bg-white border ${
                errors.name
                  ? "border-red-500"
                  : "border-gray-300 focus:border-yellow-500"
              } transition duration-200 outline-none`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div className="relative">
            <label className="text-gray-600 mb-1 block text-sm font-medium absolute z-2 -top-3 left-2 rounded-2xl px-2">
              Phone No <span className="text-red-500">*</span>
            </label>
            <hr className="border-1 absolute border-white z-1 mx-2 w-24" />
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
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={status.status === "processing"}
                placeholder="Enter your phone number"
                className={`flex-1 w-full px-4 py-3 rounded-r-lg bg-white border ${
                  errors.phone
                    ? "border-red-500 border-l-0"
                    : "border-gray-300 focus:border-yellow-500 border-l-0"
                } transition duration-200 outline-none`}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          <div className="relative">
            <label className="text-gray-600 mb-1 block text-sm font-medium absolute z-2 -top-3 left-2 rounded-2xl px-2">
              NIC/Passport <span className="text-red-500">*</span>
            </label>
            <hr className="border-1 absolute border-white z-1 mx-2 w-28" />
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
                name="nicPassport"
                value={formData.nicPassport}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={status.status === "processing"}
                placeholder="Enter NIC or Passport number"
                className={`flex-1 w-full px-4 py-3 rounded-r-lg bg-white border ${
                  errors.nicPassport
                    ? "border-red-500 border-l-0"
                    : "border-gray-300 focus:border-yellow-500 border-l-0"
                } transition duration-200 outline-none`}
              />
            </div>
            {errors.nicPassport && (
              <p className="text-red-500 text-xs mt-1">{errors.nicPassport}</p>
            )}
          </div>

          <div className="relative group">
            <label className="text-gray-600 mb-1 block text-sm font-medium absolute z-2 -top-3 left-2 rounded-2xl px-2">
              Card Type <span className="text-red-500">*</span>
            </label>
            <hr className="border-1 absolute border-white z-1 mx-2 w-24" />
            <div className="relative">
              <select
                name="cardType"
                value={formData.cardType}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={status.status === "processing"}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.cardType
                    ? "border-red-500"
                    : "border-gray-300 focus:border-yellow-500"
                } transition duration-200 outline-none bg-white appearance-none`}
              >
                <option value="" disabled>
                  Select Card Type
                </option>
                <option value="visa">Sri Lankan Issued</option>
                <option value="mastercard">Foreign Issued</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            {errors.cardType && (
              <p className="text-red-500 text-xs mt-1">{errors.cardType}</p>
            )}
          </div>

          <div className="relative">
            <label className="text-gray-600 mb-1 block text-sm font-medium absolute z-2 -top-3 left-2 rounded-2xl px-2">
              Paying Amount <span className="text-red-500">*</span>
            </label>
            <hr className="border-1 absolute border-white z-1 mx-2 w-[120px]" />
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
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={status.status === "processing"}
                placeholder="Enter amount"
                className={`flex-1 w-full px-4 py-3 rounded-r-lg bg-white border ${
                  errors.amount
                    ? "border-red-500 border-l-0"
                    : "border-gray-300 focus:border-yellow-500 border-l-0"
                } transition duration-200 outline-none`}
              />
            </div>
            {errors.amount && (
              <p className="text-red-500 text-xs mt-1">{errors.amount}</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-between">
            <div className="w-full relative">
              <label className="text-gray-600 mb-1 block text-sm font-medium absolute z-2 -top-3 left-2 rounded-2xl px-2">
                Payment Reference <span className="text-red-500">*</span>
              </label>
              <hr className="border-1 absolute border-white z-1 mx-2 w-36" />
              <input
                type="text"
                name="reference"
                value={formData.reference}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={status.status === "processing"}
                placeholder="Enter payment reference"
                className={`w-full px-4 py-3 rounded-lg bg-white border ${
                  errors.reference
                    ? "border-red-500"
                    : "border-gray-300 focus:border-yellow-500"
                } transition duration-200 outline-none`}
              />
              {errors.reference && (
                <p className="text-red-500 text-xs mt-1">{errors.reference}</p>
              )}
            </div>
            <div className="">
              <button
                type="button"
                onClick={handleVerify}
                disabled={status.status === "processing"}
                className="bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium py-3 px-4 rounded-lg text-center transition duration-200 w-full md:w-auto flex items-center justify-center disabled:opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
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
                VERIFY
              </button>
            </div>
          </div>

          <div className="relative">
            <label className="text-gray-600 mb-1 block text-sm font-medium absolute z-2 -top-3 left-2 rounded-2xl px-2">
              Email <span className="text-red-500">*</span>
            </label>
            <hr className="border-1 absolute border-white z-1 mx-2 w-16" />
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
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={status.status === "processing"}
                placeholder="Enter email address"
                className={`flex-1 w-full px-4 py-3 rounded-r-lg bg-white border ${
                  errors.email
                    ? "border-red-500 border-l-0"
                    : "border-gray-300 focus:border-yellow-500 border-l-0"
                } transition duration-200 outline-none`}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
          <button
            type="button"
            disabled
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-200 w-full md:w-auto flex items-center justify-center disabled:opacity-50"
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
            disabled={status.status === "processing"}
            className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition duration-200 w-full md:w-auto flex items-center justify-center shadow-lg disabled:opacity-50"
          >
            {status.status === "processing" ? "PROCESSING..." : "NEXT"}
            {status.status !== "processing" && (
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
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
