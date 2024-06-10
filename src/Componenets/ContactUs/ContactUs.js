import { useContext, useRef, useState } from "react";
import { MdOutlineAttachFile } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/Auth";

export const ContactUs = () => {
  const [contactUsInput, setContactUsInput] = useState("");
  const fileInputRef = useRef(null);
  const { isLoggedIn } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.prevent.default();
  };

  const handleAttach = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
  };

  const location = useLocation();

  const pageOptions = [
    { path: "/", name: "Home" },
    { path: "/InterviewQuestions", name: "Interview Questions" },
    { path: "/Page2", name: "Page 2" },
    { path: "/Page3", name: "Page 3" },
  ];

  const currentPage =
    pageOptions.find((page) => page.path === location.pathname) ||
    pageOptions[0];

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
          Your name
        </label>
        <input
          placeholder="Enter Your Name"
          className="w-full rounded-lg p-1 mt-2 px-4 border bg-gray-200 bg-stone-50 border-gray-300 text-lg font-['Poppins']"
        />
      </div>
      <div className="w-full">
        <label className="text-neutral-600 text-lg font-['Poppins']">
          What would you like to ask?<span className="text-red-500"> *</span>
        </label>
        <div className="bg-gray-200 border border-gray-300 rounded-lg h-auto mt-2">
          <textarea
            rows={4}
            required
            value={contactUsInput}
            onChange={(e) => setContactUsInput(e.target.value)}
            className="bg-gray-200 w-full text-lg rounded-lg p-2 font-['Poppins'] resize-none"
            placeholder="Write here..."
          ></textarea>
        </div>
      </div>
      {isLoggedIn && (
        <div className="w-full mt-4">
          <label className="text-neutral-600 text-lg font-['Poppins']">
            Enter your email to receive updates
          </label>
          <div className="relative mt-2">
            <input className="w-full rounded-lg p-2 px-4 border bg-stone-50 border-gray-400 text-lg font-['Poppins']" />
          </div>
        </div>
      )}
      <div className="flex w-full justify-end">
        <button
          onSubmit={handleSubmit}
          className="bg-black text-white mt-6 font-['Poppins'] p-2 rounded-md w-2/6"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
