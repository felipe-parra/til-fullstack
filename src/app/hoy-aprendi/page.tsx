import { redirect } from 'next/navigation'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import LearnForm from '@/components/LearnForm'
import LearnList from '@/components/LearnList'

export default async function TodayILearnedPage() {
  const { isAuthenticated } = getKindeServerSession()

  const isLogged = await isAuthenticated()

  if (!isLogged) {
    redirect('/api/auth/login')
  }

  return (
    <section className='w-full min-h-screen p-4 flex flex-col justify-start items-center'>
      <LearnForm />
      <LearnList />
    </section>
  )
}
