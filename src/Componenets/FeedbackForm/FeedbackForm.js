import { useContext, useRef, useState } from "react";
import { MdOutlineAttachFile } from "react-icons/md";
import { AuthContext } from "../../Context/Auth";

export const FeedbackForm = () => {
  const [feedbackInput, setFeedbackInput] = useState("");
  const fileInputRef = useRef(null);
  const { isLoggedIn } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const isFormValid = () => {
    return feedbackInput !== "";
  };

  const handleAttach = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[26rem] h-auto fixed p-4 bottom-8 right-8 md:bottom-24 md:right-8 bg-stone-50 rounded-lg shadow flex flex-col items-center"
    >
      <label className="w-4/6 text-center text-neutral-600 text-lg font-semibold font-['Poppins']">
        Let us know your Feedback about!
      </label>
      <div className="border border-gray-300 my-4 w-full"></div>
      <div className="w-full">
        <div className="bg-gray-200 rounded-lg h-auto p-2 mt-2">
          <textarea
            rows={4}
            required
            value={feedbackInput}
            onChange={(e) => setFeedbackInput(e.target.value)}
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
              <span>Attach File</span>
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
      {isLoggedIn && (
        <div className="w-full mt-4">
          <input
            type="checkbox"
            id="anonymous"
            name="anonymous"
            className="ml-2"
          />
          <label for="anonymous" className="font-['Poppins'] ml-2">
            Send feedback anonymously
          </label>
        </div>
      )}
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
