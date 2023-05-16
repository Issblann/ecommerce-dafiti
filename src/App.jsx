import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Payment from "./pages/Payment";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="*" element={<h1>No found</h1>} />
      </Routes>
    </>
  );
}

export default App;
