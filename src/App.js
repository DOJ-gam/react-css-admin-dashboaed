import { Route, Routes } from "react-router-dom";
import "./global.css";

import Dashboard from "./pages/dashboard/Dashboard";
import Test from "./pages/test/Test";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
