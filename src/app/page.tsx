import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full h-screen max-h-screen max-w-2xl p-4">
      <h1 className="font-bold text-6xl">Sigue aprendiendo todos los dias</h1>
      <p>
        Lleva control de lo que estas aprendiendo, que este habito sea tu mejor aliado.
      </p>
      <article className="w-full max-w-xs h-12 my-2 self-end flex flex-col">
        <Button asChild>
          <Link href={"/hoy-aprendi"} className="w-full md:max-w-xs h-12 my-2 self-end">
            💡  Hoy aprendi
          </Link>
        </Button>
        <p className="text-xs font-thin">
          🚀 Se la mejor persona para este 2024
        </p>
      </article>

    </section>
  );
}
