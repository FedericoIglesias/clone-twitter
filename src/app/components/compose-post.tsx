import {Avatar} from "@nextui-org/react";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { ComposePostTextArea } from "./compose-post-texarea";


 export function ComposePost ({
    userAvatarUrl
 }:{
    userAvatarUrl: string
 }){

    const addPost = async (formData: FormData)=>{
        'use server'
        
        const content = formData.get('content')
        
        
        const supabase = createServerActionClient({cookies})
        const {data: {user}} = await supabase.auth.getUser()
        if(content == null)return
        
        await supabase.from('posts').insert({content, user_id: user?.id})
        revalidatePath('/')
    }

    return (
        <form action={addPost} className="flex flex-row p-3 border-b border-white/20">
            <Avatar radius="full" size="md" src={userAvatarUrl}/>
            <div className="flex flex-1 flex-col gap-y-4">
            <ComposePostTextArea/>
                <button type="submit" className="bg-sky-500 text-sm font-bold rounded-full px-5 py-2 self-end">
                    Postear
                </button>
            </div>
        </form>
    )
 }