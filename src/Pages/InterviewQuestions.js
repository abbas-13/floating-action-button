import { ContactUs } from "../Componenets/ContactUs/ContactUs.js";
import { FeedbackForm } from "../Componenets/FeedbackForm/FeedbackForm.js";
import { ReportIssue } from "../Componenets/ReportIssue/ReportIssue.js";
import { SuggestionForm } from "../Componenets/SuggestionForm/SuggestionForm.js";

export const InterviewQuestions = () => {
  return (
    <div className="h-full w-full bg-gray-200">
      {/* <ReportIssue /> */}
      {/* <FeedbackForm /> */}
      {/* <SuggestionForm /> */}
      <ContactUs />
    </div>
  );
};
