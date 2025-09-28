function PorfilePicture() {
  const imageUrl = "./src/assets/150.svg";
  const handleClick = (e) => {
    e.target.style.display="none";
  }
  return <img src={imageUrl} onClick={(e)=>handleClick(e)} alt="" />;
}
export default PorfilePicture;
