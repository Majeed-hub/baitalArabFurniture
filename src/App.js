// import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./utils/Navbar";
import AllRoutes from "./AllRoutes";
import Footer from "./utils/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <AllRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
