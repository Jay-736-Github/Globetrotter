// import data from "../../data/data.json";

// export async function GET(request) {
//   return new Response(JSON.stringify(data), {
//     headers: { "Content-Type": "application/json" },
//   });
// }

// import data from "../../data/data.json";

// export async function GET(request) {
//   const randomIndex = Math.floor(Math.random() * data.length);
//   const randomDestination = data[randomIndex];

//   return new Response(JSON.stringify(randomDestination), {
//     headers: { "Content-Type": "application/json" },
//   });
// }


import data from "../../data/data.json";

export async function GET(request) {
  if (!Array.isArray(data) || data.length === 0) {
    return new Response(JSON.stringify({ error: "No data available" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }

  // Shuffle data before returning
  const shuffledData = [...data].sort(() => 0.5 - Math.random());

  return new Response(JSON.stringify(shuffledData), {
    headers: { "Content-Type": "application/json" },
  });
}
