import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButtonServer } from "./components/auth-button-server";
import { redirect } from "next/navigation";
import { PostLists } from "./components/posts-list";
import { Database } from "./types/database";

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data: posts } = await supabase.from("posts").select("*,users(*)");

  if (session == null) {
    redirect("/login");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="max-w-[800px] mx-auto border-l border-r border-white/30 min-h-screen">
      <AuthButtonServer />
      <PostLists posts={posts}/>
      </section>

    </main>
  );
}
