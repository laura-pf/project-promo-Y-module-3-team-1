function Upload(props) {
  function getImage(e) {
    const myFile = e.currentTarget.files[0];
    props.fr.addEventListener("load", props.onChangePhoto);
    props.fr.readAsDataURL(myFile);
  }

  return (
    <>
      <input
        className="addForm__hidden"
        type="file"
        name="image"
        id="image"
        onChange={getImage}
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
