import "./HornedBeast.css";

export default function HornedBeast(props) {
  return (
    <div className="hornedBeast-div">
      <h1>{props.title}</h1>
      <img className="img" src={props.imgUrl} alt={props.description} />
      <p>{props.description}</p>
    </div>
  );
}
