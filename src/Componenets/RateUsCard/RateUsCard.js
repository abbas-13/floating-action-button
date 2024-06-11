import { useState } from "react";

export const RateUsCard = ({ onClose }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmit = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-sm font-bold mb-4">Rate Us</h2>
        <div className="flex justify-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`cursor-pointer ${
                rating >= star ? "text-yellow-500" : "text-gray-400"
              }`}
              onClick={() => handleRating(star)}
            >
              ★
            </span>
          ))}
        </div>
        {rating > 0 && (
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-sm text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        )}
        <button onClick={onClose} className="text-red-500 mt-4">
          Close
        </button>
      </div>
    </div>
  );
};
