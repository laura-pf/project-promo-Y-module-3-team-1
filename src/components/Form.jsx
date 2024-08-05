import React from "react";
import defaultAvatar from "../images/photonews.jpg";

function Form(props) {
  const fr = new FileReader();
  const myFileField = React.createRef();
  function handleChangeProject(event) {
    const valueProject = event.target.value;
    const id = event.target.id;
    props.onChangeForm(valueProject, id);
    event.currentTarget.files[0];

    if (event.currentTarget.files.length > 0) {
      // guardo el primer fichero en myFile
      const myFile = event.currentTarget.files[0];

      // añado un evento load al manejador de ficheros
      // por qué añado un evento, pues porque esto es una acción asíncrona, imaginemos que el fichero pesa 5 Gb, el navegador puede tardar unos cuantos segundos en cargar y procesar el fichero, por eso le decimos "navegador, cuando termines de cargar el fichero me ejecutas el método  image"
      fr.addEventListener("load", getImage);

      // le digo al manejador de ficheros que maneje, que cargue el fichero
      fr.readAsDataURL(myFile);
    }
  }

  const getImage = () => {
    // cuando el navegador termina de manejar el fichero se ejecuta este método porque lo hemos indicado en  fr.addEventListener('load',  getImage);

    //  fr guarda información útil sobre el fichero cargado
    //console.log('Información útil sobre el fichero cargado', fr);

    //  fr.result contiene los datos del fichero en un formato que se llama base64 que nos vale por que podemos usarlo para pintar una imagen en HTML
    const image = fr.result;

    // aquí hago lifting con los datos del fichero
    // lo que haga el componente madre con esta información es otro problema diferente
    props.updateAvatar(image);
  };

  return (
    <form action="" className="addForm">
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <input
          className="addForm__input"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre del proyecto"
          required
          onChange={handleChangeProject}
          value={props.previewProject.name}
        />
        <input
          className="addForm__input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
          required
          onChange={handleChangeProject}
          value={props.previewProject.slogan}
        />
        <div className="addForm__2col">
          <input
            className="addForm__input"
            type="url"
            name="repo"
            id="gitHub"
            placeholder="Repositorio"
            required
            onChange={handleChangeProject}
            value={props.previewProject.gitHub}
          />
          <input
            className="addForm__input"
            type="url"
            name="demo"
            id="demo"
            placeholder="Demo"
            required
            onChange={handleChangeProject}
            value={props.previewProject.demo}
          />
        </div>
        <input
          className="addForm__input"
          type="text"
          name="technologies"
          id="technologies"
          placeholder="Tecnologías"
          required
          onChange={handleChangeProject}
          value={props.previewProject.technologies}
        />
        <textarea
          className="addForm__input"
          type="text"
          name="desc"
          id="description"
          placeholder="Descripción"
          required
          onChange={handleChangeProject}
          value={props.previewProject.description}
        ></textarea>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
        <input
          className="addForm__input"
          type="text"
          name="autor"
          id="author"
          placeholder="Nombre"
          required
          onChange={handleChangeProject}
          value={props.previewProject.author}
        />
        <input
          className="addForm__input"
          type="text"
          name="job"
          id="job"
          placeholder="Trabajo"
          required
          onChange={handleChangeProject}
          value={props.previewProject.job}
        />
      </fieldset>

      <fieldset className="addForm__group--upload">
        <label htmlFor="image" className="button button--color--blue">
          Subir foto del proyecto
        </label>
        <input
          className="addForm__hidden"
          type="file"
          name="image"
          id="image"
          ref={myFileField}
          onChange={handleChangeProject}
        />
        <label htmlFor="photo" className="button button--color--rose">
          Subir foto de la autora
        </label>
        <input
          className="addForm__hidden"
          type="file"
          ref={myFileField}
          name="photo"
          id="photo"
          onChange={handleChangeProject}
        />

        <button className="button button--color--green">
          Guardar proyecto
        </button>
      </fieldset>
    </form>
  );
}

export default Form;
