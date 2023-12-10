import "./globals.css";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import { cn } from "@/lib/utils";
import FilterList from "@/components/FilterList";


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans'
})

export const metadata = {
  title: "Today I Learn",
  description: "Keep learning through the days",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <html lang="en" className={roboto.className}>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        roboto.variable
      )}>
        {/* TODO Header */}
        <header>
          <nav className="flex items-center justify-between w-full p-3">
            {/* TODO Navbar */}
            <h1 className="text-4xl font-bold">Today I Learn</h1>
            <div>
              {!(await isAuthenticated()) ? (
                <>
                  <LoginLink className="btn btn-ghost sign-in-btn">
                    Sign in
                  </LoginLink>
                  <RegisterLink className="btn btn-dark">Sign up</RegisterLink>
                </>
              ) : (
                <div className="profile-blob">
                  {user?.picture ? (
                    <Image
                      className="rounded-full"
                      src={user?.picture}
                      alt="user profile avatar"
                      referrerPolicy="no-referrer"
                      width={100}
                      height={100}
                    />
                  ) : (
                    <div className="avatar">
                      {user?.given_name?.[0]}
                      {user?.family_name?.[0]}
                    </div>
                  )}
                  <div>
                    <p className="text-heading-2">
                      {user?.given_name} {user?.family_name}
                    </p>

                    <LogoutLink className="text-subtle">Log out</LogoutLink>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </header>

        <main>
          <FilterList />
          {children}
        </main>
        <footer className="footer">
          {/* TODO Footer */}
        </footer>
      </body>
    </html>
  );
}
