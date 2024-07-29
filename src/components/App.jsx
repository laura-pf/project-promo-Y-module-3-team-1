import "../scss/App.scss";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Preview from "./Preview";

function App() {
  // FORMULARIO Y TARJETA DE PREVISUALIZACION
  const lorem =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora dolore sed corporis non labore praesentium dignissimos! Fugiat itaque soluta sint veritatis sed iste quam? Cum fuga illum sapiente ex illo!";
  const [nameProject, setNameProject] = useState("Nombre del proyecto");
  const [sloganProject, setSloganProject] = useState("Eslogan del proyecto");
  const [technologies, setTechnologies] = useState("React JS - HTML - CSS");
  const [description, setDescription] = useState(lorem);
  const [autorName, setautorName] = useState("Nombre");
  const [autorJob, setautorJob] = useState("Profesión");
  const [demoWeb, setDemoWeb] = useState("");
  const [gitHub, setGitHub] = useState("");
  const [backgroundProject, setBackgroundProject] = useState(
    `url(./src/images/descarga-_5_.png)`
  );
  // const [photoAutor, setPhotoAutor] = useState(
  //   `url(./src/images/chicamegafono.jpg)`
  // );

  function changeValue(value, id) {
    if (id === "name") {
      setNameProject(value ? value : "Nombre del proyecto");
    } else if (id === "slogan") {
      setSloganProject(value ? value : "Eslogan del proyecto");
    } else if (id === "repo") {
      setGitHub(value);
    } else if (id === "demo") {
      setDemoWeb(value);
    } else if (id === "technologies") {
      setTechnologies(value ? value : "React JS - HTML - CSS");
    } else if (id === "desc") {
      setDescription(value ? value : lorem);
    } else if (id === "autor") {
      setautorName(value ? value : "Nombre");
    } else if (id === "job") {
      setautorJob(value ? value : "Profesión");
    }
  }

  //BOTON AÑADIR IMAGEN: (proyecto)
  const fr = new FileReader();

  // /**
  //  * @param {evento} e
  //  */
  // function getImage(e) {
  //   const myFile = e.currentTarget.files[0];
  //   fr.addEventListener("load", writeImage);
  //   fr.readAsDataURL(myFile);
  // }

  function writeImage() {
    const backgroundSelect = `url(${fr.result})`;
    setBackgroundProject(backgroundSelect);
  }

  // //BOTON AÑADIR IMAGEN USUARIO
  // function getImageUser(e) {
  //   const myFile = e.currentTarget.files[0];
  //   fr.addEventListener("load", writeImageUser);
  //   fr.readAsDataURL(myFile);
  // }

  // function writeImageUser() {
  //   const imageUser = `url(${fr.result})`;
  //   setPhotoAutor(imageUser);
  // }

  return (
    <div className="container">
      <Header />
      <main className="main">
        <section className="hero">
          <h2 className="hero__title">Proyectos molones</h2>
          <p className="hero__text">
            Escaparate en línea para recoger ideas a través de la tecnología
          </p>
          <a className="hero__button--link" href="./">
            Ver proyectos
          </a>
        </section>

        <Preview
          project={nameProject}
          slogan={sloganProject}
          gitHub={gitHub}
          demoWeb={demoWeb}
          technologies={technologies}
          description={description}
          autor={autorName}
          job={autorJob}
          background={backgroundProject}
        />
        <Form onChangeForm={changeValue} onclickPhoto={writeImage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
