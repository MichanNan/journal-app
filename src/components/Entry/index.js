import FavoriteButton from "../FavoriteButton/FavoriteButton.js";
import "./Entry.css";
export default function Entry({
  time,
  motto,
  notes,
  isFavorite,
  onToggleFavorite,
  id,
}) {
  return (
    <li className="tab-content__item">
      <div className="tab-content__item__time">{time}</div>
      <span className="tab-content__item__motto">
        <h5 className="tab-content__item__motto__text">{motto}</h5>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
          id={id}
        ></FavoriteButton>
      </span>
      <p className="tab-content__item__notes">{notes}</p>
    </li>
  );
}
