import {
  MdOutlineErrorOutline,
  MdOutlineThumbsUpDown,
  MdEditNote,
  MdOutlineTextsms,
  MdHelp,
  MdClose,
} from "react-icons/md";

export const FloatingButton = ({ isOpen, handleClick }) => {
  const style = {
    color: "#0F0F0F",
    boxShadow: "1px 1px 8px rgba(0, 0, 0, 0.5)",
  };
  const FABitems = [
    {
      text: "Report an Issue",
      icon: <MdOutlineErrorOutline size={24} />,
      iconClass: "w-auto h-auto p-3",
    },
    {
      text: "Share Feedback",
      icon: <MdOutlineThumbsUpDown size={24} />,
      iconClass: "w-auto h-auto p-3",
    },
    {
      text: "Give Suggestion",
      icon: <MdEditNote size={24} />,
      iconClass: "w-auto h-auto p-3",
    },
    {
      text: "Contact Us",
      icon: <MdOutlineTextsms size={24} />,
      iconClass: "w-auto h-auto p-3",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-auto h-auto flex flex-col justify-end items-end gap-8">
      <div className="flex flex-col justify-center items-end gap-6">
        {isOpen &&
          FABitems.map((item, index) => (
            <div key={index} className="flex justify-end items-center gap-4">
              <div className="px-4 py-2 bg-stone-50 rounded shadow border border-stone-300 flex justify-center items-center gap-2">
                <div className="text-center text-stone-950 text-lg font-medium font-poppins leading-none">
                  {item.text}
                </div>
              </div>
              <div
                className={`${item.iconClass} bg-stone-50 rounded-3xl shadow flex justify-center items-center`}
                style={style}
              >
                {item.icon}
              </div>
            </div>
          ))}
      </div>
      <div
        className="w-auto h-auto bg-stone-50 p-3 rounded-3xl shadow flex justify-center items-center cursor-pointer"
        style={style}
        onClick={handleClick}
      >
        {isOpen ? <MdClose size={24} /> : <MdHelp size={24} />}
      </div>
    </div>
  );
};
