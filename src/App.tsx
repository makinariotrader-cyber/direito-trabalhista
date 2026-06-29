import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Ferramentas from './pages/Ferramentas';
import ToolPage from './components/ToolPage';
import Guias from './pages/Guias';
import GuiaPage from './pages/GuiaPage';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Privacidade from './pages/Privacidade';
import Termos from './pages/Termos';
import CLT from './pages/CLT';
import CLTDireito from './pages/CLTDireito';
import Sumulas from './pages/Sumulas';
import SumulaDetalhe from './pages/SumulaDetalhe';
import Jurisprudencia from './pages/Jurisprudencia';
import JurisprudenciaDetalhe from './pages/JurisprudenciaDetalhe';
import OJs from './pages/OJs';
import OJDetalhe from './pages/OJDetalhe';

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/clt" element={<CLT />} />
          <Route path="/clt/:slug" element={<CLTDireito />} />
          <Route path="/sumulas" element={<Sumulas />} />
          <Route path="/sumulas/:id" element={<SumulaDetalhe />} />
          <Route path="/jurisprudencia" element={<Jurisprudencia />} />
          <Route path="/jurisprudencia/:id" element={<JurisprudenciaDetalhe />} />
          <Route path="/ojs" element={<OJs />} />
          <Route path="/ojs/:id" element={<OJDetalhe />} />
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
