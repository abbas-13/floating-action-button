import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { AuthContext } from "./Context/Auth.js";
import { InterviewQuestions } from "./Pages/InterviewQuestions.js";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Routes>
        <Route
          exact
          path="/InterviewQuestions"
          element={<InterviewQuestions />}
        />
      </Routes>
    </AuthContext.Provider>
  );
};
