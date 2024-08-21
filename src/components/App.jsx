import "../scss/App.scss";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Preview from "./Preview";
import Title from "../images/titulo.png";
import localStorage from "../services/localStorage";
import Modal from "./Modal";
// import imageProject from "../images/photonews2.jpeg";
// import imageAuthor from "../images/chicamegafono.jpg";

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
      image: "",
      photo: "",
    })
  );

  const [cardUrl, setCardUrl] = useState("");

  function changeValue(value, id) {
    setProject({
      ...project,
      [id]: value,
    });
  }

  useEffect(() => {
    localStorage.set("projectInput", project);
  }, [project]);

  //BOTON AÑADIR IMAGEN: (proyecto)
  const fr = new FileReader();

  function handleImageProject(e) {
    fr.onload = () => {
      if (fr.result && typeof fr.result === "string") {
        const updatedProject = { ...project, image: fr.result.toString() };
        setProject(updatedProject);
      }
    };
    fr.readAsDataURL(e.target.files[0]);
  }

  function handlePhotoUser(e) {
    fr.onload = () => {
      if (fr.result && typeof fr.result === "string") {
        const updatedProject = { ...project, photo: fr.result.toString() };
        setProject(updatedProject);
      }
    };
    fr.readAsDataURL(e.target.files[0]);
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
      image: "",
      photo: "",
    });
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
          background={project.image}
          photo={project.photo}
          lorem={lorem}
          onClickReset={handleClickReset}
        />
        <Form
          previewProject={project}
          onChangeForm={changeValue}
          onChangeImageProject={handleImageProject}
          onChangePhotoUser={handlePhotoUser}
          onSubmitProject={handleSaveProject}
        />
      </main>
      {cardUrl ? <Modal cardUrl={cardUrl} /> : null}

      <Footer />
    </div>
  );
}

export default App;
