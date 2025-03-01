import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request) {
  const { username, correct } = await request.json();
  const column = correct ? "correct" : "incorrect";

  // Fetch current user data.
  const { data: user, error: fetchError } = await supabase
    .from("users")
    .select("*")
    .eq("username", username)
    .single();

  if (fetchError) {
    return new Response(JSON.stringify({ error: fetchError.message }), {
      status: 500,
    });
  }

  const newValue = user[column] + 1;

  const { data, error } = await supabase
    .from("users")
    .update({ [column]: newValue })
    .eq("username", username)
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
