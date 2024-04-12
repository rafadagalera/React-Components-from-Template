import PersonalInfo from '../Componentes/PersonalInfo';
import Skills from '../Componentes/Skills';
import ContactForm from '../Componentes/ContactForm'

function Home() {
  // const nome = 'Rafael'
  const baseUsuarios = [
  {
    nome: 'Rafael',
    email: 'dagalera.dev@gmail.com',
    telefone: 'segredo'
    
  },
  { nome: 'Rafael',
    email: 'dagalera.dev@gmail.com',
    telefone: 'segredo'
  }
]
  return (
    <div className="mainInfo">
      <section id='info'>
          <PersonalInfo usuarios = {baseUsuarios}
          // nome = {nome} 
          // email = 'dagalera.dev@gmail.com'
          // telefone = 'segredo secreto da vida e da morte'
          />
          <Skills
          html = 'Avançado'
          css = 'Intermediário'
          js = 'Básico'
           />
        </section>
        <ContactForm />
    </div>
  );
}

export default Home;