import { Route, Routes } from "react-router-dom";
import "./global.css";

import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./pages/users/Users";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/test" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
