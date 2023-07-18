import { useState } from "react";
import "./HornedBeast.css";

export default function HornedBeast({ title, imgUrl, description }) {
  const [fav, setFav] = useState(0);

  function handleFav() {
    setFav(fav + 1);
  }

  return (
    <div className="hornedBeast-div">
      <h1>{title}</h1>
      <img className="img" src={imgUrl} alt={description} />
      <p>{description}</p>
      <p>
        <span className="like" onClick={handleFav}>
          🥰
        </span>
        {fav}
      </p>
    </div>
  );
}
