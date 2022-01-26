import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Screens from "./components/screens/Screens"
import MyWork from "./components/work/MyWork";
import Contact  from "./components/contact/Contact"
import Menu from "./components/menu/Menu";
import "./app.scss"
import { useState } from "react";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className='sections'>
      <Intro />
      <MyWork />
      <Portfolio />
      <Screens />
      
      <Contact />
    </div>
    </div>
  );
}

export default App;
