import "@fortawesome/fontawesome-free/css/all.min.css";

import "./App.css";
import Navbar from "./components/Header/Navbar";
import Blogs from './components/Blogs/Blogs';
import SiteCart from './components/SideCart/SiteCart';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main grid grid-cols-3">
        <div className="blog-container col-span-2">
          <Blogs></Blogs>
        </div>
        <div className="sideCart col-span-1">
          <SiteCart />
        </div>
      </div>
    </div>
  );
}

export default App;
