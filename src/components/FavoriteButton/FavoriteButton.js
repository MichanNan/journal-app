import { useState } from "react";
import "./FavoriteButton.css";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  function clickHandler() {
    setIsFavorite(!isFavorite);
  }
  return (
    <span
      className={`tab-content__item__motto__icon ${isFavorite ? "filled" : ""}`}
      onClick={clickHandler}
    ></span>
  );
}
