'use client'
import { createLearn } from "@/app/actions";
import { SubmitButton } from "./submit-button";
import { ReactNode, RefObject, useRef } from "react";
import { Textarea } from "./ui/textarea";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from "./ui/input";
import { MdOutlineElectricBolt } from "react-icons/md";
import { MdCreate } from "react-icons/md";
import { Button } from "./ui/button";
import { Learn } from "@/models/learn";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const tilSchema = z.object({
  title: z.string().min(3, {
    message: 'Title must be at least 3 characters.'
  }),
  description: z.string().min(3, {
    message: 'Description must be at least 3 characters.'
  }).optional().default("")
})

export type TILType = z.infer<typeof tilSchema>

const INITIAL_TIL_STATE: TILType = {
  title: "",
  description: ""
}

interface IINPUT_TIL_FORM {
  id: string
  name: string
  label: string
  placeholder: string
  description: string
  icon?: ReactNode | null
}

const INPUTS_TIL_FORM: IINPUT_TIL_FORM[] = [
  {
    id: "title",
    name: "title",
    placeholder: 'Aprendi sobre IA y IAG',
    description: "Definelo en menos de 7 palabras",
    label: "Titulo",
    icon: <MdOutlineElectricBolt className="text-yellow-500 mx-2" />
  },
  {
    id: "description",
    name: "description",
    placeholder: 'Lei un articulo sobre interesante...',
    description: "¿Que fue?, ¿Por que?, ¿Cuando?, ¿Donde?, ¿Como?",
    label: "Descripcion",
    icon: <MdCreate className="text-sky-500 mx-2" />
  },
]

export default function TodayILearnedForm() {
  const form = useForm({
    resolver: zodResolver(tilSchema),
    defaultValues: INITIAL_TIL_STATE
  })
  const { user } = useKindeBrowserClient()
  const formRef = useRef<HTMLFormElement>(null)
  const firstInput = useRef<HTMLInputElement>(null)

  async function onSubmit(values: z.infer<typeof tilSchema>) {
    console.log({ values })

    if (!user || user?.id === undefined) return

    const newLearn: Learn = {
      ...values,
      author: user.id,
      tags: []
    }

    await createLearn(newLearn)
    formRef.current?.reset()
    form.reset()
  }

  function resetForm(formRef: RefObject<HTMLFormElement>, inputRef: RefObject<HTMLInputElement>) {
    // TODO choose way to reset
    form.reset()
    formRef.current?.reset()
    inputRef.current?.focus()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full max-w-md"
        ref={formRef}
      >
        {
          INPUTS_TIL_FORM.map(({
            id,
            icon,
            name,
            placeholder,
            label,
            description
          }) => (
            <FormField
              control={form.control}
              name={name as keyof TILType}
              key={id}
              render={({ field },) => (
                <FormItem>
                  <FormLabel className="capitalize flex items-center justify-start">
                    {label} {icon}
                  </FormLabel>
                  <FormControl>
                    {
                      name === "description"
                        ? <Textarea id={name} placeholder={placeholder} {...field} />
                        : <Input id={name} placeholder={placeholder} {...field} ref={firstInput} autoFocus />
                    }
                  </FormControl>
                  <FormDescription>
                    {description}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))
        }
        <article className="w-full flex items-center justify-between">
          <Button
            className="mr-2"
            variant={"outline"}
            onClick={() => resetForm(formRef, firstInput)}
          >
            Cancelar
          </Button>
          <SubmitButton text="Hoy aprendi" />
        </article>
      </form>
    </Form>
  )
}
