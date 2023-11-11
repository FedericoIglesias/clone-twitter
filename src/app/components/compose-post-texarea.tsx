"use client";

import { useFormStatus } from "react-dom";
import { useRef, useEffect } from "react";

export function ComposePostTextArea() {
  const { pending } = useFormStatus();
  const alreadySent = useRef(false);
const textAreaRef = useRef<HTMLTextAreaElement>(null)

useEffect(() => {
    
    if(textAreaRef.current == null)return

    if( !pending && alreadySent.current){
        alreadySent.current = false
        textAreaRef.current.value=''
        return
    }

    alreadySent.current = pending
},[pending])

return(
    <textarea
    ref={textAreaRef}
    name="content"
    rows={4}
    className="w-full text-xl bg-black placehoder-gray-500 p-2"
    placeholder="Qué está pasando?!!!!!"
    ></textarea>
    )
}
