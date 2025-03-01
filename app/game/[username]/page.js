"use client";

import { useParams } from "next/navigation";
import Game from "../../components/Game";

export default function GamePage() {
  const { username } = useParams();
  if (!username) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Game username={username} />
    </div>
  );
}
