import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import logo from './assets/logo.png'
import Create from './components/Create';
import Apply from './components/Apply';

function App() {
  return (
    <div>
      <div className="bglogo">
      <img src={logo} className="logo"/>
    <BrowserRouter>
      <Routes>
        <Route path="/create" element={<Create/>}/>
        <Route path="/apply/:jobToken" element={<Apply/>}/>
      </Routes>
    </BrowserRouter>
    <div className="bgfooter"></div>
    </div>
    </div>
  );
}

export default App;
