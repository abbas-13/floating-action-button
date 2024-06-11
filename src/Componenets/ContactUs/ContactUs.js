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
      className="w-full md:w-80 h-auto fixed flex flex-col items-center p-4 bottom-0 md:bottom-24 md:right-8 bg-stone-50 rounded-t-3xl md:rounded-lg gap-4 md:gap-0 shadow"
    >
      <label className="w-4/6 text-center text-neutral-600 text-xl md:text-lg font-semibold font-['Poppins']">
        Let us know what your Queries are!
      </label>
      <div className="border border-gray-300 md:my-4 w-full"></div>
      <div className="w-full my-2">
        <label className="text-neutral-600 text-xl md:text-sm font-['Poppins']">
          Your name {!isLoggedIn && <span className="text-red-500"> *</span>}
        </label>
        <input
          required
          name="name"
          placeholder="Enter Your Name"
          value={formInput.name}
          onChange={handleInputChange}
          className="w-full rounded-lg p-2 mt-2 md:mt-0 px-4 border bg-stone-50 border-gray-400 text-md md:text-xs font-['Poppins']"
        />
      </div>
      {!isLoggedIn && (
        <div className="w-full my-2">
          <label className="text-neutral-600 text-xl md:text-sm font-['Poppins']">
            Your Email {!isLoggedIn && <span className="text-red-500"> *</span>}
          </label>
          <input
            required
            name="email"
            value={formInput.email}
            onChange={handleInputChange}
            placeholder="Enter Your Name"
            className="w-full rounded-lg p-2 mt-2 md:mt-0 px-4 border bg-stone-50 border-gray-400 text-md md:text-xs font-['Poppins']"
          />
        </div>
      )}
      {!isLoggedIn && (
        <div className="w-full my-2">
          <label className="text-neutral-600 text-xl md:text-sm font-['Poppins']">
            Your Mobile Number
          </label>
          <input
            name="mobileNumber"
            value={formInput.mobileNumber}
            onChange={handleInputChange}
            placeholder="Enter Your Name"
            className="w-full rounded-lg p-2 px-4 mt-2 md:mt-0 border bg-stone-50 border-gray-400 text-md md:text-xs font-['Poppins']"
          />
        </div>
      )}

      <div className="w-full">
        <label className="text-neutral-600 text-xl md:text-sm font-['Poppins']">
          What would you like to ask?<span className="text-red-500"> *</span>
        </label>
        <div className="bg-gray-200 border border-gray-300 rounded-lg h-auto mt-2">
          <textarea
            rows={4}
            required
            name="textareaInput"
            value={formInput.textareaInput}
            onChange={handleInputChange}
            className="bg-gray-200 w-full h-48 md:h-auto text-md md:text-xs p-4 rounded-lg font-['Poppins'] resize-none"
            placeholder="Write here..."
          ></textarea>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <button
          type="submit"
          onSubmit={handleSubmit}
          disabled={!isFormValid()}
          className={`bg-black font-semibold my-4 text-lg md:text-sm text-white font-['Poppins'] px-6 py-3 md:p-2 rounded-md md:w-2/6 ${
            !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
