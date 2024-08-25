import { useState } from "react";

function Form(props) {
  const [errors, setErrors] = useState({}); //estado para manejar errores

  function handleChangeProject(event) {
    const valueProject = event.target.value;
    const id = event.target.id;

    // limpia el error cuando el usuario empieza a escribir en el input
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));

    props.onChangeForm(valueProject, id);
  }

  function handleClickSave(event) {
    event.preventDefault();

    // Validar campos requeridos antes de enviar
    const newErrors = {};
    if (!props.previewProject.name)
      newErrors.name = "Este campo es obligatorio.";
    if (!props.previewProject.slogan)
      newErrors.slogan = "Este campo es obligatorio.";
    if (!props.previewProject.repo)
      newErrors.repo = "Este campo es obligatorio.";
    if (!props.previewProject.demo)
      newErrors.demo = "Este campo es obligatorio.";
    if (!props.previewProject.technologies)
      newErrors.technologies = "Este campo es obligatorio.";
    if (!props.previewProject.desc)
      newErrors.desc = "Este campo es obligatorio.";
    if (!props.previewProject.author)
      newErrors.author = "Este campo es obligatorio.";
    if (!props.previewProject.job) newErrors.job = "Este campo es obligatorio.";

    // Comprueba si hay errores
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      props.onSubmitProject();
    }
  }

  function handleImageProject(e) {
    props.onChangeImageProject(e);
  }

  function handlePhotoUser(e) {
    props.onChangePhotoUser(e);
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
        {errors.name && <p className="error-message">{errors.name}</p>}
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
        {errors.slogan && <p className="error-message">{errors.slogan}</p>}
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
          {errors.repo && <p className="error-message">{errors.repo}</p>}
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
          {errors.demo && <p className="error-message">{errors.demo}</p>}
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
        {errors.technologies && (
          <p className="error-message">{errors.technologies}</p>
        )}
        <textarea
          className="addForm__input"
          type="text"
          name="desc"
          id="desc"
          placeholder="Descripción"
          required
          onChange={handleChangeProject}
          value={props.previewProject.desc}
        ></textarea>
        {errors.desc && <p className="error-message">{errors.desc}</p>}
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
        {errors.author && <p className="error-message">{errors.author}</p>}
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
        {errors.job && <p className="error-message">{errors.job}</p>}
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
          onChange={handleImageProject}
        />
        <label htmlFor="photo" className="button button--color--rose">
          Subir foto de la autora
        </label>
        <input
          className="addForm__hidden"
          type="file"
          name="photo"
          id="photo"
          onChange={handlePhotoUser}
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
