import { Routes, Route } from "react-router-dom";
import { Time } from "./pages/time";
import { Times } from "./pages/times";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Times />} />
      <Route path="/time/:id" element={<Time />} />
    </Routes>
  );
}
