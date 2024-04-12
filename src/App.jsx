import Header from './Componentes/Header';
import Footer from './Componentes/Footer'; 
import {Outlet} from 'react-router-dom';

function App() {
  return (
        <>
          <Header titulo='HAHAHA'/>
          <Outlet/>
          <Footer foot= 'BOLOLO'/>
        </>
  )
}

export default App
