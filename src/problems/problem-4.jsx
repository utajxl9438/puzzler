/**
 * Problem 4: Updating state
 *
 * Use useState to hold the order of puzzle pieces. When the user clicks "Shuffle", update state
 * so the pieces reorder. The UI re-renders when state changes.
 *
 * TASKS:
 * 1. Use useState([0, 1, 2, 3]) to store piece order.
 * 2. Implement handleShuffle: call setOrder(shuffleArray(order)) so state updates with a shuffled copy.
 * 3. Derive piecesToShow from order (map each id to the piece from PIECES_DATA) and render the grid.
 */

import { useState } from "react";
import { PUZZLE_PIECES_P3 } from "../config.jsx";

const PIECES_DATA = PUZZLE_PIECES_P3;

function shuffleArray(arr) {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function PuzzlePiece({ piece }) {
  return (
    <div
      className="inline-flex items-center justify-center w-20 h-20 rounded-lg text-white font-bold shadow"
      style={{ backgroundColor: piece.color }}
    >
      {piece.label}
    </div>
  );
}

function Problem4() {
  // TODO: Add state for piece order: useState([0, 1, 2, 3]). Destructure as [order, setOrder].
  const [order, setOrder] = useState([0, 1, 2, 3]);

  // TODO: Implement handleShuffle so it calls setOrder(shuffleArray(order)).
  const handleShuffle = () => {
    setOrder(shuffleArray(order))
  };

  // TODO: Derive piecesToShow: order.map((id) => PIECES_DATA.find((p) => p.id === id)).
  const piecesToShow = order.map((id) => PIECES_DATA.find((p) => p.id === id
  ));

  return (
    <section className="problem-view p-6">
      <h2 className="text-xl font-semibold mb-2">Problem 4: Updating state</h2>
      <p className="text-gray-700 mb-4">
        Store piece order in <code>useState</code>. Click &quot;Shuffle&quot; to update state; the board re-renders.
      </p>

      <button
        type="button"
        onClick={handleShuffle}
        className="px-4 py-2 bg-gray-800 text-white rounded mb-4 hover:bg-gray-700"
      >
        Shuffle
      </button>

      {/* TODO: Render a grid (grid grid-cols-2 gap-3 w-fit) that maps over piecesToShow and renders <PuzzlePiece key={piece.id} piece={piece} /> for each. */}
      <div className="grid grid-cols-2 gap-3 w-fit">
        {piecesToShow.map((piece) => (
          <PuzzlePiece key={piece.id} piece={piece} />
        ))}
      </div>
    </section>
  );
}

export default Problem4;
