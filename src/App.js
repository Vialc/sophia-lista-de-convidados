import "./App.css";
import { MainSection } from "./components/MainSection/MainSection";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/guests/:guestId" element={<MainSection />} />
      </Routes>
    </div>
  );
}

export default App;
