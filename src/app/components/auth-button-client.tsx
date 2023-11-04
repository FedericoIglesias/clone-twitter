"use client";

import {Button} from '@nextui-org/button';
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
        <Button onClick={handleSignIn}>Sign In</Button>
      ) : (
        <Button onClick={handleSingOut}>Sign Out</Button>
      )}
    </header>
  );
}
