import "../scss/components/Modal.scss";
import { Link } from "react-router-dom";

function Modal(props) {
  return (
    <div>
      <div className="modal">
        <div className="modal-postit">
          <h1 className="modal-title">
            {props.cardUrl ? "¡Tu tarjeta ha sido creada!" : "Error"}
          </h1>
          {props.errorMessage ? (
            <>
              <p className="modal-text">{props.errorMessage}</p>
              <Link to="/" className="modal-link">
                Inicio
              </Link>
            </>
          ) : (
            <>
              <p className="modal-text">
                Puedes verla entrando <a href={props.cardUrl}>aquí</a>
              </p>
              <Link to="/" className="modal-link">
                Inicio
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default Modal;
