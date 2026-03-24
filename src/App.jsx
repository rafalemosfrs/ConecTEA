import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';
import ConecTEA from './pages/ConecTEA';
import EspacoDoAutista from './pages/EspacoDoAutista';
import Doacoes from './pages/Doacoes';
import Voluntariado from './pages/Voluntariado';
import FAQ from './pages/FAQ';
import Contato from './pages/Contato';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.title = getPageTitle(currentPage);
  }, [currentPage]);

  const getPageTitle = (page) => {
    const titles = {
      home: 'ConecTEA - Tecnologia e Apoio ao Espaço do Autista',
      conectea: 'Sobre o ConecTEA - Projeto Acadêmico',
      espaco: 'Espaço do Autista - Nossa História e Missão',
      doacoes: 'Doações - Apoie o Espaço do Autista',
      voluntariado: 'Voluntariado - Faça Parte da Nossa Equipe',
      faq: 'Perguntas Frequentes - ConecTEA',
      contato: 'Contato - Fale Conosco',
    };
    return titles[page] || 'ConecTEA';
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'conectea':
        return <ConecTEA />;
      case 'espaco':
        return <EspacoDoAutista />;
      case 'doacoes':
        return <Doacoes />;
      case 'voluntariado':
        return <Voluntariado />;
      case 'faq':
        return <FAQ />;
      case 'contato':
        return <Contato />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollProgress />
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
