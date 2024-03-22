import Header from './Componentes/Header';
import Home from './Componentes/Home'
import Footer from './Componentes/Footer'; 


function App() {
  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'Sobre', link: '/sobre' },
    { text: 'Serviços', link: '/servicos' },
    { text: 'Contato', link: '/contato' },
  ];
  return (
    <>
        <Header title="Meu Site" menuItems={menuItems} />
        <Home/>
        <Footer />
    </>
  )
}

export default App
