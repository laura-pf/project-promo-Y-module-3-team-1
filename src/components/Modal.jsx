import "../scss/components/Modal.scss";

// function Modal(props) {
//   return (
//     <div>
//       <div className="modal">
//         <div className="modal-postit">
//           <h1 className="modal-title">¡Tu tarjeta ha sido creada!</h1>
//           {props.cardUrl ? (
//             <p className="modal-text">
//               Puedes verla entrando <a href={props.cardUrl}>aquí</a>
//             </p>
//           ) : props.errorMessage ? (
//             <p className="modal-text">{props.errorMessage}</p>
//           ) : null}
//         </div>
//       </div>
//     </div>
//   );
// }

function Modal(props) {
  return (
    <div>
      <div className="modal">
        <div className="modal-postit">
          <h1 className="modal-title">
            {props.cardUrl ? "¡Tu tarjeta ha sido creada!" : "Error"}
          </h1>
          {props.errorMessage ? (
            <p className="modal-text">{props.errorMessage}</p>
          ) : (
            <p className="modal-text">
              Puedes verla entrando <a href={props.cardUrl}>aquí</a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
export default Modal;
