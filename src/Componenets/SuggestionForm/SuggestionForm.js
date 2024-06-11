import { useContext, useRef, useState } from "react";
import { MdOutlineAttachFile } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/Auth";

export const SuggestionForm = () => {
  const fileInputRef = useRef(null);
  const { isLoggedIn } = useContext(AuthContext);
  const [suggestionInput, setSuggestionInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const isFormValid = () => {
    return suggestionInput !== "";
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
        Share your Suggestions with us for a chance to earn rewards!
      </label>
      <div className="border border-gray-300 my-4 w-full"></div>
      <div className="w-full">
        <label className="text-neutral-600 text-lg font-['Poppins']">
          Choose a section
        </label>
        <select
          className="my-2 mb-4 text-neutral-600 text-lg font-['Poppins'] bg-gray-200 rounded-lg w-full p-2"
          id="issues"
          name="issue-select"
          defaultValue={currentPage.name}
        >
          {pageOptions.map((option) => (
            <option key={option.path} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full">
        <label className="text-neutral-600 text-lg font-['Poppins']">
          Describe the suggestion in detail
          <span className="text-red-500"> *</span>
        </label>
        <div className="bg-gray-200 rounded-lg h-auto p-2 mt-2">
          <textarea
            rows={4}
            required
            value={suggestionInput}
            onChange={(e) => setSuggestionInput(e.target.value)}
            className="bg-gray-200 w-full rounded-lg p-2 font-['Poppins'] resize-none"
            placeholder="Write here..."
          ></textarea>
          <div className="flex items-center mt-2">
            <button
              type="button"
              onClick={handleAttach}
              className="flex bg-gray-300 p-2 rounded-lg items-center"
            >
              <MdOutlineAttachFile className="mr-2" />
              <span className="font-['Poppins']">Attach File</span>
            </button>
            <input
              type="file"
              id="myfile"
              name="myfile"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>
      {!isLoggedIn && (
        <div className="w-full mt-4">
          <label className="text-neutral-600 text-lg font-['Poppins']">
            Enter your email to receive updates
          </label>
          <div className="relative mt-2">
            <input
              type="email"
              placeholder="email id (optional)"
              className="w-full rounded-lg p-2 px-4 border bg-stone-50 border-gray-400 text-lg font-['Poppins']"
            />
          </div>
        </div>
      )}
      <div className="flex w-full justify-end">
        <button
          disabled={!isFormValid()}
          type="submit"
          onSubmit={handleSubmit}
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
