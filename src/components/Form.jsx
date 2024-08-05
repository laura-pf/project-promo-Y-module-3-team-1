function Form(props) {
  function handleChangeProject(event) {
    const valueProject = event.target.value;
    const id = event.target.id;
    props.onChangeForm(valueProject, id);
  }
  function handleClickSave(event) {
    event.preventDefault();
    props.onSubmitProject();
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
            id="repo"
            placeholder="Repositorio"
            required
            onChange={handleChangeProject}
            value={props.previewProject.repo}
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
          value={props.previewProject.desc}
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

        <button
          onClick={handleClickSave}
          className="button button--color--green"
        >
          Guardar proyecto
        </button>
      </fieldset>
    </form>
  );
}

export default Form;
