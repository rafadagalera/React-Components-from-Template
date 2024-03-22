import Header from './Componentes/Header';
import PersonalInfo from './Componentes/PersonalInfo';
import Skills from './Componentes/Skills';
import ContactForm from './Componentes/ContactForm';
import Footer from './Componentes/Footer'; 

function App() {
 
  return (
    <>
      <Header />
      <div className="mainInfo">
        <section id='info'>
          <PersonalInfo />
          <Skills />
        </section>
        <ContactForm />
      </div>
      <Footer />
    </>
  )
}

export default App
