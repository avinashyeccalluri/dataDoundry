import Header from "./components/Header";
import Content from "./components/Content";
import Navbar from "./components/NavBar"
import Tabs from "./components/Tabs";
import Table from "./components/Table";

function App() {
  return (
    <div className="d-flex">
    <div className="w-15" id="naveBar-outer-container">
      <Navbar/>
    </div>
      <div className="w-85" id="content-outer-container">
        <Header></Header>
        <Content></Content>
      </div>
    </div>
  );
}

export default App;
