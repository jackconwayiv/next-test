import supabase from "@/utils/supabase";

export default async function Posts() {
  // from tutorial video: https://youtu.be/GniRj1jIhFw (along with utils folder)
  const { data } = await supabase.from("posts").select();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
