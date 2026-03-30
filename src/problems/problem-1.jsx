/**
 * Problem 1: Practice with ..., {}, and array methods
 *
 * Build the data for a simple jigsaw puzzle (4 pieces in a 2×2 grid).
 * Use: spread (...), object literals ({}), and .map().
 *
 * TASKS:
 * 1. Build an array of 4 piece objects: { id, label, color } using pieceIds.map(...).
 * 2. Render a <ul> that lists each piece's label (use .map() and key={piece.id}).
 */

const COLORS = ["#f97316", "#22c55e", "#3b82f6", "#eab308"]; // orange, green, blue, yellow

function Problem1() {
  const pieceIds = [0, 1, 2, 3];

  const pieces = pieceIds.map((id) => ({
    id,
    label: `piece ${id + 1}`,
    color: COLORS[id],
  }))

  return (
    <section className="problem-view p-6">
      <h2 className="text-xl font-semibold mb-2">Problem 1: ..., &#123;&#125;, and array methods</h2>
      <p className="text-gray-700 mb-4">
        Build puzzle piece data with object literals and <code>.map()</code>. Then render a list of piece labels.
      </p>

      {}
      <ul className="list-disc list-inside space-y-1">
        {pieces.map((piece) => (
          <li key={piece.id} style={{ color: piece.color }}>
            {piece.label}
            </li>
        ))}
      </ul>
    </section>
  );
}

export default Problem1;
