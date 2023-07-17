
export default function HornedBeast(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.url} alt={props.description} />
      <p>{props.description}</p>
    </div>
  );
}
