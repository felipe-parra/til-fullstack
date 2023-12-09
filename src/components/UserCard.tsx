'use client'

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { usePathname } from "next/navigation"

export default function UserCard() {
  const pathname = usePathname()
  const { user } = useKindeBrowserClient()
  return (
    <div>{user?.given_name}</div>
  )
}
