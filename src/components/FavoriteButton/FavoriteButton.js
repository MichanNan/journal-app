import "./FavoriteButton.css";

export default function FavoriteButton({ isFavorite, onToggleFavorite, id }) {
  return (
    <span
      className={`tab-content__item__motto__icon ${isFavorite ? "filled" : ""}`}
      onClick={() => onToggleFavorite(id)}
    ></span>
  );
}
