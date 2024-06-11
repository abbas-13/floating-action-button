import { FloatingButton } from "../Componenets/floatingButton.js/FloatingButton";

export const InterviewQuestions = () => {
  //send required items as props for the FloatingButton component
  return (
    <div className="h-full w-full bg-gray-200">
      <FloatingButton
        enabledItems={
          "Contact Us, Report an Issue, Share Feedback, Give Suggestion"
        }
      />
    </div>
  );
};
