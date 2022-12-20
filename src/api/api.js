import Create from "./api/create";
import Read from "./api/read";
import Update from "./api/update";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <h2>React Crud Operations</h2>
      <Routes>
        <Route path="/" element={<Create />} />

        <Route path="/read" element={<Read />} />

        <Route path="/update" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
