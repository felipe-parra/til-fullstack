import { Learn } from '@/models/learn'
import React, { Suspense } from 'react'
import { ScrollArea, ScrollBar } from './ui/scroll-area'
import { config } from '@/config'

const getAllLearns = async () => {
  const res = await fetch(config.kindeSiteUrl + '/api/learn')

  if (!res.ok) {
    throw new Error("Error getting learns")
  }

  const { data } = await res.json()
  return data
}


export default async function LearnList() {
  const learns = await getAllLearns()
  return (
    <>
      <h2 className='text-4xl font-bold text-start max-w-md w-full my-4'>Mis aprendizajes</h2>
      <ScrollArea className='w-full max-w-md h-screen max-h-80 whitespace-nowrap rounded-md border my-2'>
        <section className='flex h-full max-h-80 space-x-4 p-4'>
          <Suspense fallback={<p>Loading...</p>}>
            {
              learns && learns.map(({ title, description }: Learn, index: number) => (
                <article className='shrink-0 bg-slate-900 h-72 max-h-80 w-full max-w-xs flex flex-col justify-center items-start capitalize text-slate-50 p-4 rounded-md' key={"item-" + index}>
                  <h3 className='text-3xl font-semibold drop-shadow-sm'>{title}</h3>
                  <p className='text-gray-50 font-thin text-ellipsis w-full overflow-hidden'>{description}</p>
                </article>
              ))
            }
          </Suspense>
        </section>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  )
}
