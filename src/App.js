import './App.css';
import Home from './Home';
import { Routes, Route } from "react-router-dom";
import Place from './Place'
import Navmenu  from './components/Navmenu';
import Footer from './components/Footer';
import Community from './Community';
import Nft from './Nft';


function App() {
  return (
    <div>
      
    {/* <Router> */}
    <Navmenu />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="place" element={<Place />} />
        <Route  path="nfts" element={<Nft />} />
        <Route  path="community" element={<Community />} ></Route>
        
      </Routes>
      <Footer />

    {/* </Router> */}

    </div>
  );
}

export default App;
