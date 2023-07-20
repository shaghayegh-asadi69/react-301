export default function Header({ handleBeasts }) {
  return (
    <header>
      <h1>Beast World</h1>
      <form className="select-container">
        <label className="horns-label" htmlFor="hornsInput">
          Select beast by horns
        </label>
        <select name="selectedHorns" id="hornsInput" onChange={handleBeasts}>
          <option value="">all</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
        </select>
      </form>
    </header>
  );
}
