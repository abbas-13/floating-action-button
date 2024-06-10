import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { FloatingButton } from "./Componenets/floatingButton.js/FloatingButton.js";
import { AuthContext } from "./Context/Auth.js";

import { InterviewQuestions } from "./Pages/InterviewQuestions.js";

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Routes>
        <Route
          exact
          path="/InterviewQuestions"
          element={<InterviewQuestions />}
        />
      </Routes>
      <FloatingButton handleClick={handleClick} isOpen={isOpen} />
    </AuthContext.Provider>
  );
};
