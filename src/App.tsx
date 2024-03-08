import { Route, Routes } from "react-router-dom";
import { Login, LupaPassword, Register } from "./pages";

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="lupa-password" element={<LupaPassword />} />
    </Routes>
  );
}

export default App;
