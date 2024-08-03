import "../scss/components/Reset.scss";

function Reset(props) {
  function handleClick(event) {
    event.preventDefault();
    props.onClickReset();
  }
  return (
    <>
      <button className="eraser-button" onClick={handleClick}>
        <span>RESET</span>
      </button>
    </>
  );
}

export default Reset;
