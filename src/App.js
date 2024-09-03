
import './App.css';
import Cartpage from './cart';


import One from './one';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/one" element={<One />}> </Route>
  
          <Route path="/cart" element={<Cartpage />}> </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
