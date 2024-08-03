import "../scss/App.scss";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Preview from "./Preview";
import Title from "../images/titulo.png";

function App() {
  // FORMULARIO Y TARJETA DE PREVISUALIZACION
  const lorem =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora dolore sed corporis non labore praesentium dignissimos! Fugiat itaque soluta sint veritatis sed iste quam? Cum fuga illum sapiente ex illo!";
  const [project, setProject] = useState({
    name: "",
    slogan: "",
    technologies: "",
    description: "",
    author: "",
    job: "",
    demo: "",
    gitHub: "",
  });

  const [backgroundProject, setBackgroundProject] = useState(
    `url(./src/images/photonews.jpg)`
  );
  const [photoAutor, setPhotoAutor] = useState(
    `url(./src/images/chicamegafono.jpg)`
  );

  function changeValue(value, id) {
    setProject({
      ...project,
      [id]: value,
    });
  }

  //BOTON AÑADIR IMAGEN: (proyecto)
  const fr = new FileReader();

  function writeImage() {
    const backgroundSelect = `url(${fr.result})`;
    setBackgroundProject(backgroundSelect);
  }

  function writeImageUser() {
    const imageUser = `url(${fr.result})`;
    setPhotoAutor(imageUser);
  }

  //BOTON DE RESET
  function handleClickReset() {
    console.log("click");
    setProject({
      name: "",
      slogan: "",
      technologies: "",
      description: "",
      author: "",
      job: "",
      demo: "",
      gitHub: "",
    });
  }

  return (
    <div className="container">
      <Header />
      <main className="main">
        <section className="hero">
          {/* <h2 className="hero__title">Proyectos molones</h2> */}
          <img className="hero__title" src={Title} alt="setProject" />
          <p className="hero__text">
            Escaparate en línea para recoger ideas a través de la tecnología
          </p>
          <a className="button" href="./">
            Ver proyectos
          </a>
        </section>

        <Preview
          previewProject={project}
          background={backgroundProject}
          photo={photoAutor}
          lorem={lorem}
          onClickReset={handleClickReset}
        />
        <Form
          previewProject={project}
          onChangeForm={changeValue}
          fr={fr}
          onClickBackround={writeImage}
          onChangePhotoUser={writeImageUser}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
