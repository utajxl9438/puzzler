import "./problemnavbar.css";

function getProblemLabel(path) {
  const num = path.match(/\d+/)?.[0];
  return num ? `Problem ${num}` : path.replace(/^.*\//, "").replace(/\.jsx$/, "");
}

function ProblemNavbar({ problemIds, selectedId, onChange, visible }) {
  const handleChange = (e) => {
    const id = e.target.value;
    if (id && problemIds.includes(id)) onChange(id);
  };

  const className = ["problem-navbar", visible === false ? "problem-navbar--hidden" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={className} role="banner">
      <div className="problem-navbar__selector">
        <label htmlFor="problem-select">Problem:</label>
        <select
          id="problem-select"
          value={selectedId ?? ""}
          onChange={handleChange}
          aria-label="Select problem"
        >
          {problemIds.length === 0 ? (
            <option value="">No problems found</option>
          ) : (
            problemIds.map((id) => (
              <option key={id} value={id}>
                {getProblemLabel(id)}
              </option>
            ))
          )}
        </select>
      </div>
    </header>
  );
}

export default ProblemNavbar;
