import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Payment from "./pages/Payment";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Hombre/*" element={<Home />} />
        <Route path="/Mujer" element={<Home />} />
        <Route path="/Ninos" element={<Home />} />
        {/* <Route path="/:section/:subsection" exact>
          {({ match }) => {
            const { section, subsection } = match.params;

            if (sectionsNavbar[section] && sectionsNavbar[section][subsection]) {
              const Component = sectionsNavbar[section][subsection];
              return <Component />;
            }

            return "No encontrado";
          }}
        </Route> */}

        <Route path="/" element={<Home />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="*" element={<h1>No found</h1>} />
      </Routes>
    </>
  );
}

export default App;
