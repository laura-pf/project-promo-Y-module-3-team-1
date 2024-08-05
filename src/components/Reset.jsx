import "../scss/components/Reset.scss";

function Reset(props) {
  function handleClick(event) {
    event.preventDefault();
    props.onClickReset();
  }
  return (
    <>
      <button className="eraser-button" onClick={handleClick}>
        RESET
      </button>
    </>
  );
}

export default Reset;
