import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import  AuthButton  from "@/app/components/auth-button";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: posts } = await supabase.from("posts").select();

  return (
    <main>
      <AuthButton></AuthButton>
      <h1>Holis twitter</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </main>
  );
}
