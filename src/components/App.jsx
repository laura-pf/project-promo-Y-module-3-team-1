import "../scss/App.scss";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const lorem =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora dolore sed corporis non labore praesentium dignissimos! Fugiat itaque soluta sint veritatis sed iste quam? Cum fuga illum sapiente ex illo!";
  const [nameProject, setNameProject] = useState("Nombre del proyecto");
  const [sloganProject, setSloganProject] = useState("Eslogan del proyecto");
  const [technologies, setTechnologies] = useState("React JS - HTML - CSS");
  const [description, setDescription] = useState(lorem);
  const [authorName, setAuthorName] = useState("Nombre");
  const [authorJob, setAuthorJob] = useState("Profesión");
  const [demoWeb, setDemoWeb] = useState("");
  const [gitHub, setGitHub] = useState("");

  const handleChangeProject = (event) => {
    const valueProject = event.target.value;
    setNameProject(valueProject ? valueProject : "Nombre del proyecto");
    /*Esta linea de codigo lo que hace es:
    if (valueProject) {
      setNameProject(valueProject);
    } else {
      setNameProject(valueProject);
    }
    */
  };

  const handleChangeSlogan = (event) => {
    const valueSlogan = event.target.value;
    setSloganProject(valueSlogan ? valueSlogan : "Eslogan del proyecto");
    /*Esta linea de codigo lo que hace es:
    if (valueSlogan) {
      setSloganProject(valueSlogan);
    } else {
      setSloganProject("Eslogan del proyecto");
    }*/
  };

  const handleChangeTechnologies = (event) => {
    const valueTechnologies = event.target.value;
    setTechnologies(
      valueTechnologies ? valueTechnologies : "React JS - HTML - CSS"
    );
  };

  const handleChangeDescription = (event) => {
    const valueDescription = event.target.value;
    setDescription(valueDescription ? valueDescription : lorem);
  };

  const handleChangeAuthor = (event) => {
    const valueAuthor = event.target.value;
    setAuthorName(valueAuthor ? valueAuthor : "Nombre");
  };

  const handleChangeJob = (event) => {
    const valueJob = event.target.value;
    setAuthorJob(valueJob ? valueJob : "Profesión");
  };

  const handleGitHub = (event) => {
    const valueGitHub = event.target.value;
    setGitHub(valueGitHub);
  };

  const handleDemoWeb = (event) => {
    const valueDemoWeb = event.target.value;
    setDemoWeb(valueDemoWeb);
  };

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

        <section className="preview">
          <div className="projectImage"></div>
          <article className="card">
            <h2 className="card__projectTitle">
              <span className="card__projectTitle--text">
                Personal project card
              </span>
            </h2>

            <div className="card__author">
              <div className="card__authorPhoto"></div>
              <p className="card__job">{authorJob}</p>
              <h3 className="card__name">{authorName}</h3>
            </div>

            <div className="card__project">
              <h3 className="card__name">{nameProject}</h3>
              <p className="card__slogan">{sloganProject}</p>
              <h3 className="card__descriptionTitle">Product description</h3>
              <p className="card__description">
                {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
                quos? Itaque, molestias eveniet laudantium adipisci vitae
                ratione */}
                {description}
              </p>

              <div className="card__technicalInfo">
                <p className="card__technologies">{technologies}</p>

                <a
                  className="icon icon__www"
                  href={demoWeb}
                  title="Haz click para ver el proyecto online"
                  target="_blank"
                >
                  Web link
                </a>
                <a
                  className="icon icon__github"
                  href={gitHub}
                  title="Haz click para ver el código del proyecto"
                  target="_blank"
                >
                  GitHub link
                </a>
              </div>
            </div>
          </article>
        </section>

        <form action="" className="addForm">
          <h2 className="title">Información</h2>
          <fieldset className="addForm__group">
            <legend className="addForm__title">
              Cuéntanos sobre el proyecto
            </legend>
            <input
              className="addForm__input"
              type="text"
              name="name"
              id="name"
              placeholder="Nombre del proyecto"
              onChange={handleChangeProject}
            />
            <input
              className="addForm__input"
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
              onChange={handleChangeSlogan}
            />
            <div className="addForm__2col">
              <input
                className="addForm__input"
                type="url"
                name="repo"
                id="repo"
                placeholder="Repositorio"
                onChange={handleGitHub}
              />
              <input
                className="addForm__input"
                type="url"
                name="demo"
                id="demo"
                placeholder="Demo"
                onChange={handleDemoWeb}
              />
            </div>
            <input
              className="addForm__input"
              type="text"
              name="technologies"
              id="technologies"
              placeholder="Tecnologías"
              onChange={handleChangeTechnologies}
            />
            <textarea
              className="addForm__input"
              type="text"
              name="desc"
              id="desc"
              placeholder="Descripción"
              rows="5"
              onChange={handleChangeDescription}
            ></textarea>
          </fieldset>

          <fieldset className="addForm__group">
            <legend className="addForm__title">
              Cuéntanos sobre la autora
            </legend>
            <input
              className="addForm__input"
              type="text"
              name="autor"
              id="autor"
              placeholder="Nombre"
              onChange={handleChangeAuthor}
            />
            <input
              className="addForm__input"
              type="text"
              name="job"
              id="job"
              placeholder="Trabajo"
              onChange={handleChangeJob}
            />
          </fieldset>

          <fieldset className="addForm__group--upload">
            <label htmlFor="image" className="button">
              Subir foto del proyecto
            </label>
            <input
              className="addForm__hidden"
              type="file"
              name="image"
              id="image"
            />
            <label htmlFor="photo" className="button">
              Subir foto de la autora
            </label>
            <input
              className="addForm__hidden"
              type="file"
              name="photo"
              id="photo"
            />
            <button className="button--large">Guardar proyecto</button>
          </fieldset>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default App;
