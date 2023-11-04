import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButtonServer } from "./components/auth-button-server";
import { redirect } from "next/navigation";
import PostCard from "./components/post-card";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data: posts } = await supabase.from("posts").select("*,users(*)");

  if (session == null) {
    redirect("/login");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthButtonServer />
      {posts?.map((post) => {
        const { id, content, users } = post;

        const {
          user_name: userName,
          name: userFullName,
          avatar_url: avatarUrl,
        } = users;

        return (
          <PostCard
            content={content}
            key={id}
            userFullName={userFullName}
            userName={userName}
            avatarUrl={avatarUrl}
          />
        );
      })}
    </main>
  );
}
