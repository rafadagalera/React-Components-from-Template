function PersonalInfo(props) {
  return (
    <div className="personal-info">
        <h2>Informações Pessoais</h2>
        {/* <p>Nome: {props.nome}  </p> 
        <p>Email: {props.email}</p>
        <p>Telefone: {props.telefone}</p> */}
        {props.usuarios.map(usuario=>(
          <>
          <p>Nome: {usuario.nome}</p>
          <p>Email: {usuario.email}</p>
          <p>Telefone: {usuario.telefone}</p>
          </>

        ))}
        
  </div>
  );
}

export default PersonalInfo;

