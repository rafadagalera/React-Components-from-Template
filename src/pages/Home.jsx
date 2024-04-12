import PersonalInfo from '../Componentes/PersonalInfo';
import Skills from '../Componentes/Skills';
import ContactForm from '../Componentes/ContactForm'

function Home() {

  return (
    <div className="mainInfo">
      <section id='info'>
          <PersonalInfo/>
          <Skills />
        </section>
        <ContactForm />
    </div>
  );
}

export default Home;