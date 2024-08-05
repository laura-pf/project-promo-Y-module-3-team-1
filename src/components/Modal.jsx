import "../scss/components/Modal.scss";

function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-postit">
        <h1 className="modal-title">¡Tu tarjeta ha sido creada!</h1>
        <p className="modal-text">
          Puedes verla entrando <a href={props.cardUrl}>aquí</a>
        </p>
      </div>
    </div>
  );
}
export default Modal;
