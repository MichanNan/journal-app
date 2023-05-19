import "./Main.css";
import starFilled from "../../asset/star-filled.svg";

export default function Main() {
  return (
    <main>
      {/*form area  */}
      <form className="new-entry">
        <legend>New Entry</legend>
        <label htmlFor="new-entry__motto">Motto</label>
        <input
          id="new-entry__motto"
          name="new-entry__motto"
          type="text"
          className="new-entry__motto"
        ></input>
        <label htmlFor="new-entry__notes">Notes</label>
        <textarea
          id="new-entry__notes"
          name="new-entry__notes"
          className="new-entry__notes"
        ></textarea>
        <button className="new-entry__submit">Create</button>
      </form>

      {/* tabs area */}
      <section className="tab">
        <div className="tab-container">
          <div className="tab__tab-item">
            <h3 className="tab__tab-item__all-entries item-active">
              All Entries
            </h3>
            <p className="tab__tab-item__all-num num-active">3</p>
          </div>
          <div className="tab__tab-item">
            <h3 className="tab__tab-item__fav">Favorites</h3>
            <p className="tab__tab-item__fav-num">1</p>
          </div>
        </div>

        {/* tab content */}
        <div className="tab-content">
          {/* all entries */}
          <ul className="tab-content">
            <li className="tab-content__item">
              <div className="tab-content__item__time">FEB 27, 2028</div>
              <span className="tab-content__item__motto">
                <h5 className="tab-content__item__motto__text">
                  "That's Life in the city"
                </h5>
                <span className="tab-content__item__motto__icon filled"></span>
              </span>

              <p className="tab-content__item__notes">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
            </li>
            <li className="tab-content__item">
              <div className="tab-content__item__time">FEB 27, 2028</div>
              <span className="tab-content__item__motto">
                <h5 className="tab-content__item__motto__text">
                  "That's Life in the city"
                </h5>
                <span className="tab-content__item__motto__icon"></span>
              </span>

              <p className="tab-content__item__notes">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
            </li>
            <li className="tab-content__item">
              <div className="tab-content__item__time">FEB 27, 2028</div>
              <span className="tab-content__item__motto">
                <h5 className="tab-content__item__motto__text">
                  "That's Life in the city"
                </h5>
                <span className="tab-content__item__motto__icon"></span>
              </span>

              <p className="tab-content__item__notes">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
            </li>
          </ul>

          {/* favorite entries */}
          <ul className="tab-content hidden">
            <li className="tab-content__item">
              <div className="tab-content__item__time">FEB 27, 2028</div>
              <span className="tab-content__item__motto">
                <h5 className="tab-content__item__motto__text">
                  "That's Life in the city"
                </h5>
                <span className="tab-content__item__motto__icon">
                  <img alt="star" src={starFilled}></img>
                </span>
              </span>

              <p className="tab-content__item__notes">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
