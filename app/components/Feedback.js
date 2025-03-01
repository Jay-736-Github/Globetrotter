"use client";

export default function Feedback({ feedback }) {
  return (
    <div className="mt-4 p-4 border rounded flex items-center">
      {feedback.correct ? (
        <span className="text-3xl mr-2">🎉</span>
      ) : (
        <span className="text-3xl mr-2">😢</span>
      )}
      <p>{feedback.message}</p>
    </div>
  );
}
