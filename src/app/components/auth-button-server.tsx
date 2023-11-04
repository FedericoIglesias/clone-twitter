import AuthButton from "./auth-button-client";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function AuthButtonServer() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <section className="grid place-content-center">
        <h1 className="text-xl font-bold mb-4">Inicia sesion en DevTer</h1>
      <AuthButton session={session}></AuthButton>
    </section>
  )
}
