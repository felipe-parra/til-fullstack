import { Learn } from '@/models/learn'
import React, { Suspense } from 'react'
import { ScrollArea, ScrollBar } from './ui/scroll-area'
import { LearnItemComponent } from './LearnItem'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { LearnModel } from '@/models'
import dbConnect from '@/lib/mongo'

const getAllLearns = async (userId?: string) => {
  if (!userId) {
    throw new Error("Check your credentials")
  }
  await dbConnect()

  const result = await LearnModel.find({ author: userId }).sort({ createdAt: "descending" })

  const learns = JSON.parse(JSON.stringify(result))

  return learns
}

export default async function LearnList() {
  const { getUser, isAuthenticated } = getKindeServerSession()
  if (!isAuthenticated()) {
    return <p>Something went wrong</p>
  }

  const user = await getUser()

  const learns = await getAllLearns(user?.id)

  return (
    <>
      {
        learns.length
          ? <>
            <h2 className='text-4xl font-bold text-start max-w-md w-full my-4'>Mis aprendizajes</h2>
            <ScrollArea className='w-full max-w-md h-screen max-h-80 whitespace-nowrap rounded-md border my-2'>
              <section className='flex h-full max-h-80 space-x-4 p-4'>
                <Suspense fallback={<p>Loading...</p>}>
                  {
                    learns.map((learn: Learn, index: number) => (
                      <LearnItemComponent {...learn} key={'learn-id' + index} />
                    ))
                  }
                </Suspense>
              </section>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </>
          : null
      }
    </>
  )
}