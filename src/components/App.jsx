import "../scss/App.scss";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Preview from "./Preview";
import Title from "../images/titulo.png";
import localStorage from "../services/localStorage";
import Modal from "./Modal";

function App() {
  // FORMULARIO Y TARJETA DE PREVISUALIZACION
  const lorem =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora dolore sed corporis non labore praesentium dignissimos!";
  const [project, setProject] = useState(
    localStorage.get("projectInput", {
      name: "",
      slogan: "",
      technologies: "",
      desc: "",
      author: "",
      job: "",
      demo: "",
      repo: "",
      image:
        "https://github.com/laura-pf/project-promo-Y-module-3-team-1/blob/dev/src/images/webpage.png?raw=true",
      photo:
        "https://github.com/laura-pf/project-promo-Y-module-3-team-1/blob/dev/src/images/1642406313696.jpeg?raw=true",
    })
  );

  const [backgroundProject, setBackgroundProject] = useState(
    localStorage.get("backgroundUpload", `url(./src/images/photonews2.jpeg)`)
  );

  const [photoAutor, setPhotoAutor] = useState(
    localStorage.get("photoUpload", `url(./src/images/chicamegafono.jpg)`)
  );
  const [cardUrl, setCardUrl] = useState("");

  function changeValue(value, id) {
    setProject({
      ...project,
      [id]: value,
    });
  }

  useEffect(() => {
    localStorage.set("projectInput", project),
      localStorage.set("backgroundUpload", backgroundProject),
      localStorage.set("photoUpload", photoAutor);
  }, [project, backgroundProject, photoAutor]);

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

  function handleSaveProject() {
    console.log(project);
    fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((response) => response.json())
      .then((data) => {
        setCardUrl(data.cardURL);
      });
  }
  //BOTON DE RESET
  function handleClickReset() {
    console.log("click");
    setProject({
      name: "",
      slogan: "",
      technologies: "",
      desc: "",
      author: "",
      job: "",
      demo: "",
      repo: "",
      image:
        "https://github.com/laura-pf/project-promo-Y-module-3-team-1/blob/dev/src/images/webpage.png?raw=true",
      photo:
        "https://github.com/laura-pf/project-promo-Y-module-3-team-1/blob/dev/src/images/1642406313696.jpeg?raw=true",
    });
    setBackgroundProject(`url(./src/images/photonews2.jpeg)`);
    setPhotoAutor(`url(./src/images/chicamegafono.jpg)`);
    localStorage.clear();
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
          onSubmitProject={handleSaveProject}
        />
      </main>
      {cardUrl ? <Modal cardUrl={cardUrl} /> : null}

      <Footer />
    </div>
  );
}

export default App;
