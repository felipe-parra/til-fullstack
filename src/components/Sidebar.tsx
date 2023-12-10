"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import UserCard from "./UserCard"
import { LogoutLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { ToggleTheme } from "./ToggleTheme"

export function Sidebar() {
  const { user } = useKindeBrowserClient()
  return (
    <div className="grid grid-cols-1 gap-4 transition-all duration-300">
      <Sheet>
        <SheetTrigger className=" w-full" asChild>
          <button className="w-full text-end ">
            <UserCard />
          </button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Hola {user?.given_name}</SheetTitle>
            <SheetDescription>
              {/* TODO Mensajes dinamicos */}
              {"Sigue asi, estas haciendolo genial"}
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4 my-5">
            <Button asChild variant={"destructive"}>
              <LogoutLink className="text-base ">Salir</LogoutLink>
            </Button>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Cerrar</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
