import { Button } from "@/components/ui/button";
import Link from "next/link";

const LANDING_CONSTANTS = {
  title: "Share what you learn every day",
  subtitle: "A project where we believe in learning something new every day. Write and share your daily learnings with the world",
  cta: {
    title: "Today I Learned",
    subtitle: "Join our community of lifelong learners.",
    link: "/til"
  }
}

export default function Home() {
  return (
    <section className="w-full h-screen max-h-screen max-w-2xl mx-auto p-4 flex flex-col items-center justify-start">
      <h1 className="font-bold text-6xl my-6 text-center">{LANDING_CONSTANTS.title}</h1>
      <p className="text-center">
        {LANDING_CONSTANTS.subtitle}
      </p>
      <article className="w-full md:max-w-xs mx-auto h-20 my-2 self-end flex flex-col">
        <Button asChild>
          <Link href={LANDING_CONSTANTS.cta.link} className="w-full md:max-w-xs h-16 my-2 self-end text-lg">
            💡 {LANDING_CONSTANTS.cta.title}
          </Link>
        </Button>
        <p className="text-md font-thin">
          🚀 {LANDING_CONSTANTS.cta.subtitle}
        </p>
      </article>
    </section>
  );
}
