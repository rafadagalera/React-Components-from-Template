function Skills(props) {
  return (
    <div className="skills">
       <h2>Habilidades</h2>
                <div class="skill-card">
                    <h3>HTML</h3>
                    <p>Nível: {props.html}</p>
                </div>
                <div class="skill-card">
                    <h3>CSS</h3>
                    <p>Nível: {props.css}</p>
                </div>
                <div class="skill-card">
                    <h3>JavaScript</h3>
                    <p>Nível: {props.js}</p>
                </div>
          </div>
  );
}

export default Skills;