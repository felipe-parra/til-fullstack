import { fetchLearns } from '@/app/actions'
import dbConnect from '@/lib/mongo'
import { LearnModel } from '@/models'
import { Learn } from '@/models/learn'
import React, { Suspense } from 'react'

const getAllLearns = async () => {
  const res = await fetch('http://localhost:3000/api/learn')

  if (!res.ok) {
    throw new Error("Error getting learns")
  }

  const { data } = await res.json()
  return data
}


export default async function LearnList() {
  const learns = await getAllLearns()
  return (
    <section>
      <Suspense fallback={<p>Loading...</p>}>
        {
          learns && learns.map(({ title }: Learn, index: number) => (
            <p key={"item-" + index}>{title}</p>
          ))
        }
      </Suspense>
    </section>
  )
}
