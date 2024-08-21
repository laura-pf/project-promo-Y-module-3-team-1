import Reset from "./Reset";
import imageProject from "../images/photonews2.jpeg";
import imageAuthor from "../images/chicamegafono.jpg";

function Preview(props) {
  return (
    <section className="preview">
      <div
        className="projectImage"
        style={{
          backgroundImage: `url(${props.background || imageProject})`,
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
              backgroundImage: `url(${props.photo || imageAuthor})`,
              repeat: "repeat",
            }}
          ></div>
          <p className="card__job">{props.previewProject.job || "Profesión"}</p>
          <h3 className="card__name">
            {props.previewProject.author || "Nombre del autor"}
          </h3>
        </div>

        <div className="card__project">
          <h3 className="card__name-project">
            {props.previewProject.name || "Nombre del proyecto"}
          </h3>
          <p className="card__slogan">
            {props.previewProject.slogan || "Eslogan del proyecto"}
          </p>
          <h3 className="card__descriptionTitle">Descripción del proyecto</h3>
          <p className="card__description">
            {props.previewProject.desc || props.lorem}
          </p>

          <div className="card__technicalInfo">
            <p className="card__technologies">
              {props.previewProject.technologies || "React JS - HTML - CSS"}
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
                href={props.previewProject.repo}
                title="Haz click para ver el código del proyecto"
                target="_blank"
              >
                <i className="fa-regular fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </article>
      <Reset onClickReset={props.onClickReset} />
    </section>
  );
}

export default Preview;
