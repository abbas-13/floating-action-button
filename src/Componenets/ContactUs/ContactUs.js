import { useContext, useState } from "react";

import { AuthContext } from "../../Context/Auth";

export const ContactUs = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    textareaInput: "",
    mobileNumber: "",
  });
  const { isLoggedIn } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isFormValid = () => {
    const { name, email, textareaInput } = formInput;

    if (!isLoggedIn) {
      return name !== "" && email !== "" && textareaInput !== "";
    }
    return textareaInput !== "";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[26rem] h-auto fixed p-4 bottom-8 right-8 md:bottom-24 md:right-8 bg-stone-50 rounded-lg shadow flex flex-col items-center"
    >
      <label className="w-9/12 text-center text-neutral-600 text-lg font-semibold font-['Poppins']">
        Let us know what your Queries are!
      </label>
      <div className="border border-gray-300 my-4 w-full"></div>
      <div className="w-full mb-4">
        <label className="text-neutral-600 text-lg font-['Poppins']">
          Your name {!isLoggedIn && <span className="text-red-500"> *</span>}
        </label>
        <input
          required
          name="name"
          placeholder="Enter Your Name"
          value={formInput.name}
          onChange={handleInputChange}
          className="w-full rounded-lg p-1 mt-2 px-4 border bg-gray-200 bg-stone-50 border-gray-300 text-lg font-['Poppins']"
        />
      </div>
      {!isLoggedIn && (
        <div className="w-full mb-4">
          <label className="text-neutral-600 text-lg font-['Poppins']">
            Your Email {!isLoggedIn && <span className="text-red-500"> *</span>}
          </label>
          <input
            required
            name="email"
            value={formInput.email}
            onChange={handleInputChange}
            placeholder="Enter Your Name"
            className="w-full rounded-lg p-1 mt-2 px-4 border bg-gray-200 bg-stone-50 border-gray-300 text-lg font-['Poppins']"
          />
        </div>
      )}
      {!isLoggedIn && (
        <div className="w-full mb-4">
          <label className="text-neutral-600 text-lg font-['Poppins']">
            Your Mobile Number
          </label>
          <input
            name="mobileNumber"
            value={formInput.mobileNumber}
            onChange={handleInputChange}
            placeholder="Enter Your Name"
            className="w-full rounded-lg p-1 mt-2 px-4 border bg-gray-200 bg-stone-50 border-gray-300 text-lg font-['Poppins']"
          />
        </div>
      )}

      <div className="w-full">
        <label className="text-neutral-600 text-lg font-['Poppins']">
          What would you like to ask?<span className="text-red-500"> *</span>
        </label>
        <div className="bg-gray-200 border border-gray-300 rounded-lg h-auto mt-2">
          <textarea
            rows={4}
            required
            name="textareaInput"
            value={formInput.textareaInput}
            onChange={handleInputChange}
            className="bg-gray-200 w-full text-lg rounded-lg p-2 font-['Poppins'] resize-none"
            placeholder="Write here..."
          ></textarea>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <button
          type="submit"
          onSubmit={handleSubmit}
          disabled={!isFormValid()}
          className={`bg-black text-white mt-6 font-['Poppins'] p-2 rounded-md w-2/6 ${
            !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
