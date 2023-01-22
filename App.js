
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Product from './Pages/Product';
import Register from './Pages/Register';
import {Routes , Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Product" element={<Product/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
      </Routes>
      <Footer></Footer>
    
    </div>
  );
}

export default App;
