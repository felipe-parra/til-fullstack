'use client'
import { createLearn } from "@/app/actions";
import { SubmitButton } from "./submit-button";
import { useRef } from "react";


export default function TodayILearnedComponent() {
  const formRef = useRef<HTMLFormElement>(null)
  return (
    <div>
      <form
        action={async (formData) => {
          await createLearn(formData)
          formRef.current?.reset()
        }}
        ref={formRef}
      >
        <article>
          <label htmlFor="title">¿Que aprendiste hoy?</label>
          <input name="title" type="text" placeholder='En menos de 5 palabras de ser posible' />
        </article>
        <article>
          <label htmlFor="description">Describelo</label>
          <input name="description" type="text" placeholder='que fue?,por que?, cuando?, donde?, como?' />
        </article>
        <SubmitButton text="Guardar" />
      </form>
    </div>
  )
}
