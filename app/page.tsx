import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";

//tutorial from https://youtu.be/Bh1TOpOcGJQ

export default async function Posts() {
  const supabase = createServerComponentSupabaseClient({ headers, cookies });
  const { data: posts } = await supabase.from("posts").select();
  console.log("Hello from the server!");
  return (
    <div>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}
