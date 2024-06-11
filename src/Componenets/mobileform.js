import { useState } from "react";

export const MobileForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <form className="w-full md:w-80 h-auto fixed p-4 bottom-0 md:bottom-24 md:right-8 bg-stone-50 rounded-t-3xl md:rounded-lg shadow flex flex-col gap-4 md:gap-0 items-center">
      <label className="w-4/6 text-center text-neutral-600 text-xl md:text-lg font-semibold font-['Poppins']">
        Let us know your Feedback about us!
      </label>
      <div className="border border-gray-300 md:my-4 w-full"></div>
      <div className="w-full">
        <div className="bg-gray-200 rounded-lg h-auto p-2 mt-2">
          <textarea
            rows={4}
            required
            className="bg-gray-200 w-full h-48 md:h-auto text-md md:text-xs rounded-lg font-['Poppins'] resize-none"
            placeholder="Write here..."
          ></textarea>
          <div className="flex items-center  mt-2">
            <button
              type="button"
              className="flex bg-gray-300 p-2 rounded-lg items-center"
            >
              <span className="text-md md:text-sm font-['Poppins']">
                Attach File
              </span>
            </button>
            <input
              type="file"
              id="myfile"
              name="myfile"
              style={{ display: "none" }}
            />
          </div>
        </div>
      </div>
      {isLoggedIn && (
        <div className="w-full mt-2">
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
          <label className="text-neutral-600 text-md md:text-sm font-['Poppins']">
            Enter your email to receive updates
          </label>
          <div className="relative mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg p-2 px-4 border bg-stone-50 border-gray-400 text-md md:text-xs font-['Poppins']"
            />
          </div>
        </div>
      )}
      <div className="flex w-full justify-end">
        <button
          type="submit"
          className="bg-black text-lg my-4 md:text-sm font-semibold text-white font-['Poppins'] px-6 py-3 md:p-2 rounded-md md:w-2/6"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
