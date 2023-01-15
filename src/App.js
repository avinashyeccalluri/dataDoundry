import Header from "./components/Header";
import Home from './components/Home'
import Navbar from "./components/NavBar";


function App() {
  return (
    <div className="d-flex">
    <div className="w-15" id="naveBar-outer-container">
      <Navbar/>
    </div>
      <div className="w-95" id="content-outer-container">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
