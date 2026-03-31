/**
 * Problem 6: Snap to grid (jigsaw style)
 *
 * Build a big 8×8 board. The board shows a grid of empty slots; puzzle pieces float above the board and "magnet snap"
 * to the nearest grid position when dropped.
 *
 * Behavior:
 * - Pieces start in a loose jumble near the center of the board, NOT in grid slots.
 * - The board is an 8×8 grid of fixed‑size slots; slots are only a visual guide (no content inside them).
 * - When you drop a piece on the board, it should snap to the nearest grid position, but only if it's within a
 *   configurable magnet radius.
 *
 * Extra challenge:
 * - Expose `MAGNET_RADIUS` as a constant so you can experiment with "stronger" or "weaker" snapping behavior.
 */

import { useState } from "react";
import { PUZZLE_PIECES_P3 } from "../config.jsx";

const PIECES_DATA = PUZZLE_PIECES_P3;

// Size of each grid slot in pixels
const SLOT_SIZE = 96;
// Gap between slots in pixels
const GAP = 8;
// Padding around the grid inside the board
const PADDING = 24;
// Number of rows/columns
const GRID_SIZE = 8;
// Total slot count
const TOTAL_SLOTS = GRID_SIZE * GRID_SIZE;
// Overall board size
const BOARD_SIZE = GRID_SIZE * SLOT_SIZE + (GRID_SIZE - 1) * GAP + 2 * PADDING;

// Configurable magnet snap power (in pixels). Increase for "stronger" snap.
const MAGNET_RADIUS = 80;

// Helper to compute the top/left origin of a slot in the grid.
function slotOrigin(col, row) {
  return {
    left: PADDING + col * (SLOT_SIZE + GAP),
    top: PADDING + row * (SLOT_SIZE + GAP),
  };
}

// Precomputed center for each slot, used for snapping.
const SLOT_CENTERS = Array.from({ length: TOTAL_SLOTS }, (_, index) => {
  const col = index % GRID_SIZE;
  const row = Math.floor(index / GRID_SIZE);
  const origin = slotOrigin(col, row);
  return {
    left: origin.left + SLOT_SIZE / 2,
    top: origin.top + SLOT_SIZE / 2,
  };
});

// Fixed off-grid starting positions for the initial "jumble" of pieces.
const OFF_GRID_STARTS = [
  { left: BOARD_SIZE / 2 - 40, top: BOARD_SIZE / 2 - 50 },
  { left: BOARD_SIZE / 2 + 10, top: BOARD_SIZE / 2 - 10 },
  { left: BOARD_SIZE / 2 - 70, top: BOARD_SIZE / 2 + 20 },
  { left: BOARD_SIZE / 2 + 40, top: BOARD_SIZE / 2 + 40 },
];

// A single draggable puzzle piece. You will position it absolutely using the `position` prop.
function PuzzlePiece({ piece, position }) {
  return (
    <div
      draggable
      onDragStart={(e) => {
        // Set the piece id on dataTransfer so the board can read it in onDrop.
        e.dataTransfer.setData("text/plain", String(piece.id));
        e.dataTransfer.effectAllowed = "move";
      }}
      className="absolute inline-flex items-center justify-center w-20 h-20 rounded-lg text-white font-bold shadow cursor-grab active:cursor-grabbing"
      style={{
        backgroundColor: piece.color,
        left: position.left,
        top: position.top,
        transform: "translate(-50%, -50%)",
      }}
    >
      {piece.label}
    </div>
  );
}

function Problem6() {
  // State: slotIds is an array of length TOTAL_SLOTS, each entry is either null or a piece id.
  // Start with all null so all pieces are off-grid in the jumble.
  const [slotIds, setSlotIds] = useState(() => {
    return Array(TOTAL_SLOTS).fill(null);
  });

  // Basic drag-over handler for the whole board.
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  // TODO: Implement handleDropOnBoard so pieces "magnet snap" to the nearest grid position:
  // 1. Read pieceId from e.dataTransfer.getData("text/plain").
  // 2. Use e.clientX / e.clientY and the board's boundingClientRect to get the drop point (x, y) relative to the board.
  // 3. Find the nearest entry in SLOT_CENTERS to that point.
  // 4. If the distance to that center is > MAGNET_RADIUS, do nothing.
  // 5. Otherwise, update slotIds using setSlotIds so that:
  //    - If the piece was off-grid, put it into that slot (and optionally clear any piece that was there).
  //    - If the piece was already on-grid, swap it with whatever is in the target slot.
  const handleDropOnBoard = (e) => {
    e.preventDefault();

    const pieceId = Number(e.dataTransfer.getData("text/plain"));

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    let nearestIndex = -1;
    let nearestDist = Infinity;

    SLOT_CENTERS.forEach((center, i) => {
      const dist = Math.hypot(center.left - x, center.top - y);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearestIndex = i;
      }
    });

    if (nearestDist > MAGNET_RADIUS) return;

    setSlotIds((prev) => {
      const next = [...prev];
      const fromIndex = next.indexOf(pieceId);
      const occupant = next[nearestIndex];

      if (fromIndex !== -1) {
        next[fromIndex] = occupant;
      } else if (occupant !== null) {
        next[next.indexOf(occupant)] = null;
      }

      next[nearestIndex] = pieceId;
      return next;
    });
  };



  return (
    <section className="problem-view p-6">
      <h2 className="text-xl font-semibold mb-2">Problem 6: Snap to grid</h2>
      <p className="text-gray-700 mb-4">
        Build a big 8×8 board. Pieces start in a jumble (off-grid) and snap to the nearest grid position when dropped,
        depending on a configurable magnet snap power.
      </p>

      <div
        className="relative rounded-lg border border-gray-300 bg-gray-100/80 overflow-hidden"
        style={{ width: BOARD_SIZE, height: BOARD_SIZE }}
        onDragOver={handleDragOver}
        onDrop={handleDropOnBoard}
      >
        {/* Visual 8×8 grid of slots */}
        {Array.from({ length: TOTAL_SLOTS }, (_, slotIndex) => {
          const col = slotIndex % GRID_SIZE;
          const row = Math.floor(slotIndex / GRID_SIZE);
          const pos = slotOrigin(col, row);
          return (
            <div
              key={slotIndex}
              className="absolute rounded-lg border-2 border-dashed border-gray-400 bg-transparent"
              style={{ ...pos, width: SLOT_SIZE, height: SLOT_SIZE }}
            />
          );
        })}

        {/* Floating pieces: either off-grid jumble or centered on their snapped grid slot */}
        {PIECES_DATA.map((piece, i) => {
          const slotIndex = slotIds.indexOf(piece.id);
          const position =
            slotIndex === -1
              ? OFF_GRID_STARTS[i % OFF_GRID_STARTS.length]
              : SLOT_CENTERS[slotIndex];
          return <PuzzlePiece key={piece.id} piece={piece} position={position} />;
        })}
      </div>
    </section>
  );
}

export default Problem6;
