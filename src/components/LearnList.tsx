import { fetchLearns } from '@/app/actions'
import dbConnect from '@/lib/mongo'
import { LearnModel } from '@/models'
import React, { Suspense } from 'react'

export default async function LearnList() {
  const learns = await fetchLearns()
  return (
    <section>
      <Suspense fallback={<p>Loading...</p>}>
        {
          learns.map((learn, index) => (
            <p key={"item-" + index}>{learn.title}</p>
          ))
        }
      </Suspense>
    </section>
  )
}
