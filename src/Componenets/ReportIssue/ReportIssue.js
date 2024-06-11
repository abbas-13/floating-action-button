import { useContext, useRef, useState } from "react";
import { MdOutlineAttachFile } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/Auth";

export const ReportIssue = ({ onFormSubmit }) => {
  const [inputState, setInputState] = useState("");

  const fileInputRef = useRef(null);
  const { isLoggedIn } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit();
  };

  const isFormValid = () => {
    return inputState !== "";
  };

  const handleAttach = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
  };

  const location = useLocation();

  const sectionOptions = [
    { path: "/", name: "Home" },
    { path: "/InterviewQuestions", name: "Interview Questions" },
    { path: "/ConceptCards", name: "Concept Cards" },
    { path: "/Page3", name: "Page 3" },
  ];

  const currentPage =
    sectionOptions.find((section) => section.path === location.pathname) ||
    sectionOptions[0];

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-80 h-auto fixed flex flex-col items-center p-4 bottom-0 md:bottom-24 md:right-8 bg-stone-50 rounded-t-3xl md:rounded-lg gap-4 md:gap-0 shadow"
    >
      <label className="w-4/6 text-center text-neutral-600 text-xl md:text-lg font-semibold font-['Poppins']">
        Let us know about the Issue you are facing right now!
      </label>
      <div className="border border-gray-300 md:my-4 w-full"></div>
      <div className="w-full">
        <label className="text-neutral-600 text-xl md:text-sm font-['Poppins']">
          Choose a section
        </label>
        <select
          className="my-2 mb-4 text-neutral-600 text-lg md:text-xs font-['Poppins'] bg-gray-200 rounded-lg w-full p-2"
          id="issues"
          name="issue-select"
          defaultValue={currentPage.name}
        >
          {sectionOptions.map((option) => (
            <option key={option.path} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full">
        <label className="text-neutral-600 text-xl md:text-sm font-['Poppins']">
          Describe the issue in detail<span className="text-red-500"> *</span>
        </label>
        <div className="bg-gray-200 rounded-lg h-auto p-2 mt-2">
          <textarea
            rows={4}
            required
            value={inputState}
            onChange={(e) => setInputState(e.target.value)}
            className="bg-gray-200 w-full h-48 md:h-auto text-md md:text-xs rounded-lg font-['Poppins'] resize-none"
            placeholder="Write here..."
          ></textarea>
          <div className="flex items-center mt-2">
            <button
              type="button"
              onClick={handleAttach}
              className="flex bg-gray-300 p-2 rounded-lg items-center"
            >
              <MdOutlineAttachFile className="mr-2" />
              <span className="text-md md:text-sm font-['Poppins']">
                Attach File
              </span>
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
          <label className="text-neutral-600 text-md md:text-sm font-['Poppins']">
            Enter your email to receive updates
          </label>
          <div className="relative mt-2">
            <input
              type="email"
              placeholder="email id (optional)"
              className="w-full rounded-lg p-2 px-4 border bg-stone-50 border-gray-400 text-md md:text-xs font-['Poppins']"
            />
          </div>
        </div>
      )}
      <div className="flex w-full justify-end">
        <button
          disabled={!isFormValid()}
          type="submit"
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
