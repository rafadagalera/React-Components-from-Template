import Header from './Componentes/Header';
import Footer from './Componentes/Footer'; 
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'
import Servicos from './pages/Servicos'
import PageNotFound from './pages/PageNotFound'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Posts from './pages/Posts/Posts';
import PostUnico from './pages/PostUnico';

function App() {
  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'Sobre', link: '/sobre' },
    { text: 'Serviços', link: '/servicos' },
    { text: 'Contato', link: '/contato' },
  ];

  const posts = [
    {id: 1, title: 'Site'},
    {id: 2, title: 'E-commerce'}
  ];

  return (
    <Router>
        <Header title="Meu Site" menuItems={menuItems} />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="servicos" element={<Servicos />}>
            <Route path="posts" element={<Posts posts={posts}/>}>
              <Route path=":postName" element={<PostUnico/>}/>
            </Route>
          </Route>
          <Route path="contato" element={<Contato />}/>
          <Route path="sobre" element={<Sobre />}/>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
        <Footer />
    </Router>
  )
}

export default App
