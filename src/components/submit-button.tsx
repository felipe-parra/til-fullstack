'use client'

import { useFormStatus } from "react-dom"

export function SubmitButton({ text = "Save" }: { text: string }) {
  const { pending } = useFormStatus()

  return (
    <button type="submit" aria-disabled={pending}>
      {text}
    </button>
  )
}