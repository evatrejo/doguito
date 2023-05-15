import './assets/css/base/base.css';
import './assets/css/componentes/card.css';
import Header from './componentes/Header';
import Home from "./pages/Home.jsx";
import Page404 from './pages/Page404';
import Post from './pages/Post';
import Sobre from "./pages/Sobre.jsx";
import Categoria from "./pages/Categoria";


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  
  return (
    <Router>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sobre' element={<Sobre/>}/>
          <Route path='/posts/:id' element={<Post/>}/>
          <Route path="/categoria/:id/*" element={<Categoria />} />
          <Route path='*' element={<Page404/>}/>
        </Routes>
    </Router>
    
  );
}

export default App;
