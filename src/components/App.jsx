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
    name: "Nombre del proyecto",
    slogan: "Eslogan del proyecto",
    technologies: "React JS - HTML - CSS",
    description: lorem,
    author: "Nombre del autor",
    job: "Profesión",
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
    if (id === "name") {
      setProject({
        ...project,
        name: value ? value : "Nombre del proyecto",
      });
    } else if (id === "slogan") {
      setProject({
        ...project,
        slogan: value ? value : "Eslogan del proyecto",
      });
    } else if (id === "repo") {
      setProject({ ...project, gitHub: value });
    } else if (id === "demo") {
      setProject({ ...project, demo: value });
    } else if (id === "technologies") {
      setProject({
        ...project,
        technologies: value ? value : "React JS - HTML - CSS",
      });
    } else if (id === "desc") {
      setProject({
        ...project,
        description: value ? value : lorem,
      });
    } else if (id === "autor") {
      setProject({
        ...project,
        author: value ? value : "Nombre",
      });
    } else if (id === "job") {
      setProject({
        ...project,
        job: value ? value : "Profesión",
      });
    }
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
