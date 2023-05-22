import FavoriteButton from "../FavoriteButton/FavoriteButton.js";
import "./Entry.css";
export default function Entry({ time, motto, notes }) {
  return (
    <li className="tab-content__item">
      <div className="tab-content__item__time">{time}</div>
      <span className="tab-content__item__motto">
        <h5 className="tab-content__item__motto__text">{motto}</h5>
        <FavoriteButton></FavoriteButton>
      </span>
      <p className="tab-content__item__notes">{notes}</p>
    </li>
  );
}
