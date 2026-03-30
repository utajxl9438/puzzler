/**
 * Problem 3: Moving data between components
 *
 * The parent (Problem3) holds the puzzle data and passes it to a Board component via props.
 * Board receives pieces and passes each piece to PuzzlePiece. Data flows: Problem3 → Board → PuzzlePiece.
 *
 * For this problem, the puzzle piece data is provided for you in src/config.jsx as PUZZLE_PIECES_P3.
 * Your job is to move that data between components, not to build it.
 *
 * TASKS:
 * 1. Create a Board component that receives a prop pieces and renders a grid of <PuzzlePiece> components (map over pieces).
 * 2. In Problem3, read PUZZLE_PIECES_P3 from config and pass it to <Board pieces={pieces} />.
 */

import { PUZZLE_PIECES_P3 } from "../config.jsx";

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

// TODO: Create Board component that receives { pieces }. Return a div with className "grid grid-cols-2 gap-3 w-fit". Inside, map over pieces and render <PuzzlePiece key={piece.id} piece={piece} /> for each.
function Board({ pieces }) {
  return ( 
    <div className = "grid grid-cols-2 gap-3 w-fit">
      {pieces.map((piece) => (
        <PuzzlePiece key = {piece.id} piece={piece} />
      ))}
    </div>
    );
}

function Problem3() {
  // TODO: Use the puzzle pieces from config (PUZZLE_PIECES_P3) and pass them into <Board>.
  const pieces = PUZZLE_PIECES_P3;

  return (
    <section className="problem-view p-6">
      <h2 className="text-xl font-semibold mb-2">Problem 3: Moving data between components</h2>
      <p className="text-gray-700 mb-4">
        Pass <code>pieces</code> from Problem3 to <code>Board</code>; Board passes each <code>piece</code> to <code>PuzzlePiece</code>.
      </p>
      <Board pieces={pieces} />
    </section>
  );
}

export default Problem3;
