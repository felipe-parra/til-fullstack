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
      {text}
    </Button>
  )
}