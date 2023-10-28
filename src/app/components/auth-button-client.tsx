"use client";

import {  type Session,  createClientComponentClient,} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function AuthButton({session} : {session: Session | null}) {

  const supabase = createClientComponentClient();
  const router = useRouter()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  const handleSingOut = async () => {
    await supabase.auth.signOut();
    router.refresh()
  };

;

  return (
    <header>
      {session == null ? (
        <button onClick={handleSignIn}>Sign In</button>
      ) : (
        <button onClick={handleSingOut}>Sign Out</button>
      )}
    </header>
  );
}
