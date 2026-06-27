import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Ferramentas from './pages/Ferramentas';
import ToolPage from './components/ToolPage';
import Guias from './pages/Guias';
import GuiaPage from './pages/GuiaPage';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Privacidade from './pages/Privacidade';
import Termos from './pages/Termos';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ferramentas" element={<Ferramentas />} />
          <Route path="/ferramentas/:toolId" element={<ToolPage />} />
          <Route path="/guias" element={<Guias />} />
          <Route path="/guias/:guideId" element={<GuiaPage />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/termos" element={<Termos />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
