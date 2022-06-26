import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';


//Pages
import Contacto from './pages/Contacto';
import Diplomados from './pages/Diplomados';
import Empresarial from './pages/Empresarial';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Talleres from './pages/Talleres';


//Style
import "./styles/main.scss"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/diplomados" element={<Diplomados />} />
          <Route path="/empresarial" element={<Empresarial />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/talleres" element={<Talleres />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
