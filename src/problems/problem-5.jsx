/**
 * Problem 5: Drag and drop
 *
 * Make puzzle pieces draggable and droppable. Use the HTML5 Drag and Drop API:
 *   draggable, onDragStart (setData), onDragOver (preventDefault), onDrop (getData and update state).
 *
 * TASKS:
 * 1. Store which piece is in each slot in state: useState([0, 1, 2, 3]) — slot index i holds piece id slotIds[i].
 * 2. In PuzzlePiece: add draggable and onDragStart that calls e.dataTransfer.setData("text/plain", String(piece.id)).
 * 3. Each slot div needs onDragOver (e.preventDefault(); e.dataTransfer.dropEffect = "move") and onDrop that reads the piece id, finds fromIndex and toIndex, and updates state by swapping slotIds[fromIndex] and slotIds[toIndex].
 */

import { useState } from "react";
import { PUZZLE_PIECES_P3 } from "../config.jsx";

const PIECES_DATA = PUZZLE_PIECES_P3;

// TODO: Add draggable and onDragStart to the div. In onDragStart: e.dataTransfer.setData("text/plain", String(piece.id)); e.dataTransfer.effectAllowed = "move". Add cursor-grab and active:cursor-grabbing to className.
function PuzzlePiece({ piece }) {
  return (
    <div
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("text/plain", String(piece.id));
        e.dataTransfer.effectAllowed = "move";
      }}
      className="inline-flex items-center justify-center w-20 h-20 rounded-lg text-white font-bold shadow"
      style={{ backgroundColor: piece.color }}
    >
      {piece.label}
    </div>
  );
}

function Problem5() {
  // TODO: State for which piece is in each slot: useState([0, 1, 2, 3]). slotIds[i] = piece id in slot i.
  const [slotIds, setSlotIds] = useState([0, 1, 2, 3]);

  // TODO: handleDragOver: e.preventDefault(); e.dataTransfer.dropEffect = "move";
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  // TODO: handleDrop(e, toIndex): e.preventDefault(); get pieceId from e.dataTransfer.getData("text/plain"); find fromIndex = slotIds.indexOf(pieceId); copy slotIds, swap next[fromIndex] and next[toIndex], then setSlotIds(next).
  const handleDrop = (e, toIndex) => {
    e.preventDefault();
    const pieceId = Number(e.dataTransfer.getData("text/plain"));
    const fromIndex = slotIds.indexOf(pieceId);
   
    const next = [...slotIds];
    [next[fromIndex], next[toIndex]] = [next[toIndex], next[fromIndex]];
    setSlotIds(next);
  };

  const piecesInSlots = slotIds.map((id) => PIECES_DATA.find((p) => p.id === id));

  return (
    <section className="problem-view p-6">
      <h2 className="text-xl font-semibold mb-2">Problem 5: Drag and drop</h2>
      <p className="text-gray-700 mb-4">
        Make pieces draggable and drop them on another slot to swap. Use <code>draggable</code>, <code>onDragStart</code>, <code>onDragOver</code>, and <code>onDrop</code>.
      </p>

      <div className="grid grid-cols-2 gap-3 w-fit">
        {piecesInSlots.map((piece, index) => (
          <div
            key={piece.id}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            className="min-w-[5rem] min-h-[5rem] rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50"
          >
            <PuzzlePiece piece={piece} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Problem5;
