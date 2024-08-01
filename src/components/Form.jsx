function Form(props) {
  function handleChangeProject(event) {
    const valueProject = event.target.value;
    const id = event.target.id;
    props.onChangeForm(valueProject, id);
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
          onChange={handleChangeProject}
        />
        <div className="addForm__2col">
          <input
            className="addForm__input"
            type="url"
            name="repo"
            id="repo"
            placeholder="Repositorio"
            onChange={handleChangeProject}
          />
          <input
            className="addForm__input"
            type="url"
            name="demo"
            id="demo"
            placeholder="Demo"
            onChange={handleChangeProject}
          />
        </div>
        <input
          className="addForm__input"
          type="text"
          name="technologies"
          id="technologies"
          placeholder="Tecnologías"
          onChange={handleChangeProject}
        />
        <textarea
          className="addForm__input"
          type="text"
          name="desc"
          id="desc"
          placeholder="Descripción"
          onChange={handleChangeProject}
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
          onChange={handleChangeProject}
        />
        <input
          className="addForm__input"
          type="text"
          name="job"
          id="job"
          placeholder="Trabajo"
          onChange={handleChangeProject}
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
