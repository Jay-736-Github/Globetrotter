// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const username = searchParams.get("username") || "guest";
//   const ref = searchParams.get("ref") || "guest";

//   // Generate a challenge link for the friend at /game/[friendUsername]?ref=[currentUser]
//   const challengeLink = `${
//     process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
//   }/game/${username}?ref=${ref}`;

//   const imageUrl = `${
//     process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
//   }/challenge-image.png`;

//   return new Response(JSON.stringify({ challengeLink, imageUrl }), {
//     headers: { "Content-Type": "application/json" },
//   });
// }


export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "guest";
  const ref = searchParams.get("ref") || "guest";

  // Generate a challenge link for the friend at /game/[friendUsername]?ref=[currentUser]
  const challengeLink = `${
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  }/game/${username}?ref=${ref}`;

  // Use the bird.jpg image from the public folder
  const imageUrl = `${
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  }/bird.jpg`;

  return new Response(JSON.stringify({ challengeLink, imageUrl }), {
    headers: { "Content-Type": "application/json" },
  });
}
