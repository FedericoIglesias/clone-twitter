"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function AuthButton () {
    const supabase = createClientComponentClient()

    const handleSignIn = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: 'http://localhost:3000/auth/callback'
            }
        })
    }

    const handleSingOut = async () => {
        await supabase.auth.signOut()
    }

    return(
        <header>
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={handleSingOut}>Sign Out</button>
        </header>
    )
}