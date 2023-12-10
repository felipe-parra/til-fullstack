import "./globals.css";
import Link from "next/link";
import { Roboto } from 'next/font/google'
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/Sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { ToggleTheme } from "@/components/ToggleTheme";


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
  return (
    <html lang="en" className={roboto.className}>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        roboto.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* TODO Header */}
          <header>
            <nav className="flex items-center justify-between w-full p-3">
              {/* TODO Navbar */}
              <Link href={"/"}>
                <h1 className="text-4xl font-bold">Today I Learn</h1>
              </Link>
              <article className="flex items-center justify-end w-1/3">
                <Sidebar />
                <ToggleTheme />
              </article>
            </nav>
          </header>

          <main>
            {children}
          </main>
          <footer className="footer">
            {/* TODO Footer */}
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
