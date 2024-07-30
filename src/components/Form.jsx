function Form(props) {
  function handleChangeProject(event) {
    const valueProject = event.target.value;
    const id = event.target.id;
    props.onChangeForm(valueProject, id);
  }

  function handleChangeSlogan(event) {
    const valueSlogan = event.target.value;
    const idSlogan = event.target.id;
    props.onChangeForm(valueSlogan, idSlogan);
  }

  function handleGitHub(event) {
    const valueGitHub = event.target.value;
    const idGitHub = event.target.id;
    props.onChangeForm(valueGitHub, idGitHub);
  }

  function handleDemoWeb(event) {
    const valueDemoWeb = event.target.value;
    const idDemoWeb = event.target.id;
    props.onChangeForm(valueDemoWeb, idDemoWeb);
  }

  function handleChangeTechnologies(event) {
    const valueTechnologies = event.target.value;
    const idTechnologies = event.target.id;
    props.onChangeForm(valueTechnologies, idTechnologies);
  }

  function handleChangeDescription(event) {
    const valueDescription = event.target.value;
    const idDescription = event.target.id;
    props.onChangeForm(valueDescription, idDescription);
  }

  function handleChangeautor(event) {
    const valueAutor = event.target.value;
    const idAutor = event.target.id;
    props.onChangeForm(valueAutor, idAutor);
  }

  function handleChangeJob(event) {
    const valueJob = event.target.value;
    const idJob = event.target.id;
    props.onChangeForm(valueJob, idJob);
  }

  /**
   * @param {evento} e
   */

  function getImage(e) {
    const myFile = e.currentTarget.files[0];
    props.fr.addEventListener("load", props.onClickBackround);
    props.fr.readAsDataURL(myFile);
  }

  function getImageUser(e) {
    const myFile = e.currentTarget.files[0];
    props.fr.addEventListener("load", props.onChangePhotoUser);
    props.fr.readAsDataURL(myFile);
  }

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
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
        <input
          className="addForm__input"
          type="text"
          name="autor"
          id="autor"
          placeholder="Nombre"
          onChange={handleChangeautor}
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
        <label htmlFor="image" className="button button--color--blue">
          Subir foto del proyecto
        </label>
        <input
          className="addForm__hidden"
          type="file"
          name="image"
          id="image"
          onChange={getImage}
        />
        <label htmlFor="photo" className="button button--color--rose">
          Subir foto de la autora
        </label>
        <input
          className="addForm__hidden"
          type="file"
          name="photo"
          id="photo"
          onChange={getImageUser}
        />

        <button className="button button--color--green">
          Guardar proyecto
        </button>
      </fieldset>
    </form>
  );
}

export default Form;
