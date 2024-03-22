import Header from './Componentes/Header';
import Footer from './Componentes/Footer'; 
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'
import Servicos from './pages/Servicos'
import PageNotFound from './pages/PageNotFound'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'Sobre', link: '/sobre' },
    { text: 'Serviços', link: '/servicos' },
    { text: 'Contato', link: '/contato' },
  ];

  return (
    <Router>
        <Header title="Meu Site" menuItems={menuItems} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/servicos" element={<Servicos />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
        <Footer />
    </Router>
  )
}

export default App
