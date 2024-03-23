import { Route, Routes } from "react-router-dom";
import { Home, KonfirmasiPassword, Login, LupaPassword, Register } from "./pages";

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="lupa-password" element={<LupaPassword />} />
      <Route path="konfirmasi-password" element={<KonfirmasiPassword />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
}

export default App;
