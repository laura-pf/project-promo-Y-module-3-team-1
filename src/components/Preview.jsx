function Preview(props) {
  return (
    <section className="preview">
      <div
        className="projectImage"
        style={{
          backgroundImage: `${props.background}`,
          repeat: "repeat",
        }}
      >
        <div className="card__pin"></div>
      </div>
      <article className="card">
        <div className="card__pin"></div>
        <div className="card__pin card__pin--right"></div>
        <h2 className="card__projectTitle">
          <span className="card__projectTitle--text">Proyecto personal</span>
        </h2>

        <div className="card__autor">
          <div
            className="card__autorPhoto"
            style={{
              backgroundImage: `${props.photo}`,
              repeat: "repeat",
            }}
          ></div>
          <p className="card__job">{props.previewProject.job}</p>
          <h3 className="card__name">{props.previewProject.author}</h3>
        </div>

        <div className="card__project">
          <h3 className="card__name">{props.previewProject.name}</h3>
          <p className="card__slogan">{props.previewProject.slogan}</p>
          <h3 className="card__descriptionTitle">Descripción del proyecto</h3>
          <p className="card__description">
            {props.previewProject.description}
          </p>

          <div className="card__technicalInfo">
            <p className="card__technologies">
              {props.previewProject.technologies}
            </p>
            <div className="container-icons">
              <a
                className="icon icon__www"
                href={props.previewProject.demo}
                title="Haz click para ver el proyecto online"
                target="_blank"
              >
                <i className="fa-regular fa-globe"></i>
              </a>
              <a
                className="icon icon__github"
                href={props.previewProject.gitHub}
                title="Haz click para ver el código del proyecto"
                target="_blank"
              >
                <i className="fa-regular fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Preview;
