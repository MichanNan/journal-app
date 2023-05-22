import "./Badge.css";
export default function TabBar() {
  return (
    <div className="tab-container">
      <div className="tab__tab-item">
        <h3 className="tab__tab-item__all-entries item-active">All Entries</h3>
        <p className="tab__tab-item__all-num num-active">3</p>
      </div>
      <div className="tab__tab-item">
        <h3 className="tab__tab-item__fav">Favorites</h3>
        <p className="tab__tab-item__fav-num">1</p>
      </div>
    </div>
  );
}
