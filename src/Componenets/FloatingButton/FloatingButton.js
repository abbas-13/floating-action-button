import { useState, useEffect } from "react";

import Close from "../../Assets/close.png";
import FAB from "../../Assets/fab.png";
import Issue from "../../Assets/issue.png";
import Feedback from "../../Assets/feedback.png";
import Suggestion from "../../Assets/suggestion.png";
import Contact from "../../Assets/contactus.png";

import { ReportIssue } from "../ReportIssue/ReportIssue";
import { FeedbackForm } from "../FeedbackForm/FeedbackForm";
import { SuggestionForm } from "../SuggestionForm/SuggestionForm";
import { ContactUs } from "../ContactUs/ContactUs";

//receive items as props, and map them to render each item
export const FloatingButton = ({ enabledItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [featureOpen, setFeatureOpen] = useState(false);
  const [featureName, setFeatureName] = useState("");
  const [thanksMessage, setThanksMessage] = useState("");

  const handleClick = () => {
    setIsOpen(!isOpen);
    setFeatureOpen(false);
  };

  const classFeatureClosed = !featureOpen && "flex-col";

  const style = {
    color: "#0F0F0F",
    boxShadow: "1px 1px 8px rgba(0, 0, 0, 0.5)",
  };

  const FABitems = [
    {
      text: "Report an Issue",
      icon: <img src={Issue} className="h-4" />,
      iconClass: "w-auto h-auto p-3",
      component: (
        <ReportIssue
          onFormSubmit={() => {
            setFeatureOpen(false);
            setIsOpen(false);
            showThanksMessage("Report an Issue");
          }}
        />
      ),
    },
    {
      text: "Share Feedback",
      icon: <img src={Feedback} className="h-4" />,
      iconClass: "w-auto h-auto p-3",
      component: (
        <FeedbackForm
          onFormSubmit={() => {
            setFeatureOpen(false);
            setIsOpen(false);
            showThanksMessage("Share Feedback");
          }}
        />
      ),
    },
    {
      text: "Give Suggestion",
      icon: <img src={Suggestion} className="h-4" />,
      iconClass: "w-auto h-auto p-3",
      component: (
        <SuggestionForm
          onFormSubmit={() => {
            setFeatureOpen(false);
            setIsOpen(false);
            showThanksMessage("Give Suggestion");
          }}
        />
      ),
    },
    {
      text: "Contact Us",
      icon: <img src={Contact} className="h-4 w-4" />,
      iconClass: "w-auto h-auto p-3",
      component: (
        <ContactUs
          onFormSubmit={() => {
            setFeatureOpen(false);
            setIsOpen(false);
            showThanksMessage("Contact Us");
          }}
        />
      ),
    },
  ];

  const enabledItemsArray = enabledItems.split(",").map((item) => item.trim());

  const filteredItems = FABitems.filter((item) =>
    enabledItemsArray.includes(item.text)
  );

  const featureItem = FABitems.find((item) => item.text === featureName);

  const showThanksMessage = (feature) => {
    const messages = {
      "Report an Issue":
        "Thanks for bringing the issue to our attention. We'll review it shortly and provide an update soon!",
      "Share Feedback": "Thanks for your valuable feedback!",
      "Give Suggestion": "Thanks for your valuable suggestion!",
      "Contact Us": "We will get back to you as soon as possible!",
    };
    setThanksMessage(messages[feature]);
    setTimeout(() => setThanksMessage(""), 5000);
  };

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black md:hidden opacity-50 z-0"
          onClick={() => {
            setIsOpen(false);
            setFeatureOpen(false);
          }}
        ></div>
      )}
      <div
        className={`fixed bottom-6 right-6 w-auto h-auto md:bottom-8 md:right-8 flex ${classFeatureClosed} justify-end items-end gap-3`}
      >
        <div
          className={`flex ${classFeatureClosed} justify-center items-end gap-3`}
        >
          {isOpen &&
            filteredItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-end items-center gap-4"
                onClick={() => {
                  setFeatureOpen(true);
                  setFeatureName(item.text);
                }}
              >
                {!featureOpen && (
                  <div className="px-4 py-2 bg-stone-50 rounded shadow border border-stone-300 flex justify-center items-center gap-2">
                    <div className="text-center text-stone-950 text-sm font-medium font-poppins leading-none">
                      {item.text}
                    </div>
                  </div>
                )}
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
          {isOpen ? (
            <img className="h-4" src={Close} />
          ) : (
            <img className="h-4" src={FAB} />
          )}
        </div>
        {featureOpen && featureItem && (
          <div className="fixed bottom-0 right-0 md:bottom-8 md:right-8 w-full md:w-auto md:h-auto">
            {featureItem.component}
          </div>
        )}
        {thanksMessage && (
          <div className="fixed bottom-16 right-8 md:bottom-24 md:right-8 bg-white font-['Poppins'] text-black p-4 rounded shadow-lg">
            {thanksMessage}
          </div>
        )}
      </div>
    </div>
  );
};
