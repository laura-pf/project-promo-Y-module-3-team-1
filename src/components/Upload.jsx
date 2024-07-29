function Upload(props) {
  /**
   * @param {evento} e
   */
  function getImage(e) {
    const myFile = e.currentTarget.files[0];
    fr.addEventListener("load", props.onClickPhoto);
    fr.readAsDataURL(myFile);
  }

  return (
    <>
      <input
        className="addForm__hidden"
        type="file"
        name="image"
        id="image"
        onClik={getImage}
      />
      <input
        className="addForm__hidden"
        type="file"
        name="photo"
        id="photo"
        //onChange={getImageUser}
      />
    </>
  );
}

export default Upload;
