import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SinglePage from "./pages/SinglePage";
import EditPage from "./pages/EditPage";
import CreatePage from "./pages/CreatePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/single-page/:id" element={<SinglePage />} />
          <Route path="/edit-page/:id" element={<EditPage />} />
          <Route path="/create-page" element={<CreatePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
