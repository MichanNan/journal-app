import "./Badge.css";
export default function Badge({
  onShowAllEntries,
  onShowFavoriteEntries,
  filter,
  allEntriesCount,
  favoriteEntriesCount,
}) {
  return (
    <div className="tab-container">
      <div className="tab__tab-item" onClick={onShowAllEntries}>
        <h3
          className={`tab__tab-item__all-entries ${
            filter === "all" ? "item-active" : ""
          }`}
        >
          All Entries
        </h3>
        <p
          className={`tab__tab-item__all-num  ${
            filter === "all" ? "num-active" : ""
          }`}
        >
          {allEntriesCount}
        </p>
      </div>
      <div className="tab__tab-item" onClick={onShowFavoriteEntries}>
        <h3
          className={`tab__tab-item__fav ${
            filter === "favorites" ? "item-active" : ""
          }`}
        >
          Favorites
        </h3>
        <p
          className={`tab__tab-item__fav-num ${
            filter === "favorites" ? "item-active" : ""
          }`}
        >
          {favoriteEntriesCount}
        </p>
      </div>
    </div>
  );
}
