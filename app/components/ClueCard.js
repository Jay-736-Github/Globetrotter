"use client";

export default function ClueCard({ clues }) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Clues:</h2>
      {clues.map((clue, index) => (
        <p key={index} className="mb-1">
          {clue}
        </p>
      ))}
    </div>
  );
}
