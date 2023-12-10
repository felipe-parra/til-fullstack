'use client'

import { useFormStatus } from "react-dom"
import { Button } from "./ui/button"

export function SubmitButton({ text = "Save" }: { text: string }) {
  const { pending } = useFormStatus()

  return (
    <Button
      aria-disabled={pending}
      className="w-full"
      type="submit"

    >
      {
        pending &&
        <div className="animate-spin h-5 w-5 mr-3 border-2 border-t-primary dark:border-t-secondary/50 rounded-full" />
      }
      {text}
    </Button>
  )
}