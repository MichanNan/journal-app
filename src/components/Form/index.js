import "./Form.css";
export default function Form() {
  return (
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
  );
}
