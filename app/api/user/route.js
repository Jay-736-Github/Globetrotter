import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_SERVICE_KEY; // use a secure service key here
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request) {
  const { username } = await request.json();
  // Insert a new user record; the table should have columns like username, correct, and incorrect.
  const { data, error } = await supabase
    .from("users")
    .insert([{ username, correct: 0, incorrect: 0 }])
    .single();

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
  return new Response(JSON.stringify({ user: data }), {
    headers: { "Content-Type": "application/json" },
  });
}
