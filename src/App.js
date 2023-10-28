import { BrowserRouter, Route, Routes } from "react-router-dom";
import Education from "./page/Education";
import Profile from "./page/Profile";
import Skills from "./page/Skills";
import Work from "./page/Work";
import ReactToPrint from "react-to-print";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/education" element={<Education />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
}

export default App;
