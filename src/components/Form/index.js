import "./Form.css";
export default function Form({ onAddEntry }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddEntry(data);
    event.target.reset();
  }
  return (
    <form className="new-entry" onSubmit={handleSubmit}>
      <legend>New Entry</legend>
      <label htmlFor="new-entry__motto">Motto</label>
      <input
        id="new-entry__motto"
        name="motto"
        type="text"
        className="new-entry__motto"
      ></input>
      <label htmlFor="new-entry__notes">Notes</label>
      <textarea
        id="new-entry__notes"
        name="notes"
        className="new-entry__notes"
      ></textarea>
      <button className="new-entry__submit">Create</button>
    </form>
  );
}
