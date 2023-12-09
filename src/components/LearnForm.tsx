import { createLearn } from "@/app/actions";
import { SubmitButton } from "./submit-button";


export default async function TodayILearnedComponent() {

  return (
    <div>
      <form action={createLearn}>
        <article>
          <label htmlFor="title">¿Que aprendiste hoy?</label>
          <input name="title" type="text" placeholder='En menos de 5 palabras de ser posible' />
        </article>
        <article>
          <label htmlFor="description">Describelo</label>
          <input name="title" type="text" placeholder='que fue?,por que?, cuando?, donde?, como?' />
        </article>
        <SubmitButton text="Guardar" />
      </form>
    </div>
  )
}
