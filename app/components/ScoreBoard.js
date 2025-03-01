"use client";

export default function ScoreBoard({ score }) {
  return (
    <div className="mb-4 flex justify-between">
      <div>Correct: {score.correct}</div>
      <div>Incorrect: {score.incorrect}</div>
    </div>
  );
}
