// import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Navbar from './utils/Navbar/Navbar';
import AllRoutes from './AllRoutes';
import Footer from './utils/Footer/Footer';
import ScrollToTop from './utils/scroll_to_top/scrollToTop';

function App() {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop/>
        <Navbar />
        <AllRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
