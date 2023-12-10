'use client'

import { LoginLink, LogoutLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import Image from 'next/image'

export default function UserCard() {
  const { user, isAuthenticated } = useKindeBrowserClient()
  return (
    <div className="w-full">
      {!isAuthenticated ? (
        <>
          <LoginLink className="btn btn-ghost sign-in-btn">
            Entrar
          </LoginLink>
        </>
      ) : (
        <div className="flex items-center justify-between w-full ">
          {user?.picture ? (
            <Image
              className="rounded-full h-10 w-10 m-2"
              src={user?.picture}
              alt="user profile avatar"
              referrerPolicy="no-referrer"
              width={100}
              height={100}
            />
          ) : (
            <div className="font-semibold border rounded-full h-10 w-10 m-2 text-center flex items-center justify-center">
              {user?.given_name?.[0]}
              {user?.family_name?.[0]}
            </div>
          )}
          <div className="md:flex flex-col hidden">
            <p className="text-heading-2">
              {user?.given_name} {user?.family_name}
            </p>

            <LogoutLink className="text-base font-thin">Cerrar sesion</LogoutLink>
          </div>
        </div>
      )}
    </div>
  )
}
