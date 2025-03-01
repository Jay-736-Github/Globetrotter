"use client";

import { useState } from "react";

export default function ChallengeModal({ onClose, currentUser, currentScore }) {
  const [friendUsername, setFriendUsername] = useState("");
  const [error, setError] = useState("");
  const [challengeLink, setChallengeLink] = useState("");
  const [loading, setLoading] = useState(false);

  const registerFriend = async () => {
    if (!friendUsername) return;
    setLoading(true);
    // Register friend via the API (/api/user)
    const res = await fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: friendUsername }),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Username already taken. Please choose another.");
      setLoading(false);
      return;
    }

    // Get the challenge link from the API (/api/challenge)
    const challengeRes = await fetch(
      `/api/challenge?username=${friendUsername}&ref=${currentUser}`
    );
    const challengeData = await challengeRes.json();
    setChallengeLink(challengeData.challengeLink);
    setLoading(false);
  };

  const whatsappShareUrl = challengeLink
    ? `https://wa.me/?text=Join%20the%20Globetrotter%20Challenge!%20Play%20here:%20${encodeURIComponent(
        challengeLink
      )}`
    : "#";

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Challenge a Friend</h2>
        <p className="mb-2">
          Your current score: Correct {currentScore.correct} | Incorrect{" "}
          {currentScore.incorrect}
        </p>
        <input
          type="text"
          placeholder="Enter your friend's unique username"
          value={friendUsername}
          onChange={(e) => setFriendUsername(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        {error && <p className="text-red-500 mb-2">{error}</p>}
        {!challengeLink ? (
          <button
            onClick={registerFriend}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Processing..." : "Generate Challenge Link"}
          </button>
        ) : (
          <div className="mt-4">
            <p className="mb-2">Share this link with your friend:</p>
            <input
              type="text"
              readOnly
              value={challengeLink}
              className="border p-2 w-full mb-2"
              onFocus={(e) => e.target.select()}
            />
            <a
              href={whatsappShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-green-500 text-white p-2 rounded hover:bg-green-600"
            >
              Share on WhatsApp
            </a>
          </div>
        )}
        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-300 text-gray-800 p-2 rounded hover:bg-gray-400"
        >
          Close
        </button>
      </div>
    </div>
  );
}
