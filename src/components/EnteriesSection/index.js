import Badge from "../Badge/index.js";
import Entry from "../Entry/index.js";
import "./EnteriesSection.css";
import { Fragment } from "react";

export default function EnteriesSection({
  entries,
  onToggleFavorite,
  onShowAllEntries,
  onShowFavoriteEntries,
  filter,
  allEntriesCount,
  favoriteEntriesCount,
}) {
  return (
    <Fragment>
      <Badge
        filter={filter}
        onShowAllEntries={onShowAllEntries}
        onShowFavoriteEntries={onShowFavoriteEntries}
        allEntriesCount={allEntriesCount}
        favoriteEntriesCount={favoriteEntriesCount}
      ></Badge>
      {/* tab content */}
      <div className="tab-content">
        {/* all entries */}
        <ul className="tab-content">
          {entries.map((entry) => (
            <Entry
              key={entry.id}
              name={entry.name}
              time={entry.date}
              motto={entry.motto}
              notes={entry.notes}
              isFavorite={entry.isFavorite}
              id={entry.id}
              onToggleFavorite={onToggleFavorite}
            ></Entry>
          ))}
        </ul>

        {/* favorite entries */}
        <ul className="tab-content hidden">
          <Entry filledState={"filled"}></Entry>
        </ul>
      </div>
    </Fragment>
  );
}
