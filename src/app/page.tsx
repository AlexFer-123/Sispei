import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
    return (
      <>
        <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
          <div className="mx-auto mb-4 max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border-gray-200 bg-white px-7 py-2 shadow-md background-blur transition-all hover:border-gray-300 hover:bg-white/50 ">
            <p className="text-sm animate-in font-semibold text-gray-700">
              Desenvolvendo Futuros Inclusivos
            </p>
          </div>
          <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">Transforme a Educação com <span className="text-blue-600">PEI</span>Report</h1>
          <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          O sistema permite que os psicólogos cadastrem informações detalhadas sobre os alunos com PEI, incluindo dados pessoais, histórico educacional e as necessidades específicas de cada aluno.
          </p>

          <div className="flex">

          <Link className={buttonVariants({
            size: "lg",
            className: "mr-5 mt-5"
          })} href="/sign-up" target="_blank">
            Entrar <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link className={buttonVariants({
            size: "lg",
            className: "mt-5"
          })} href="/sign-in" target="_blank">
            Cadastar <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          </div>
        </MaxWidthWrapper>

        <div>
          <div className="relative isolate">
              <div aria-hidden="false" className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 ">
                <div style={{
                  clipPath:""
                }} className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
              </div>
          </div>
        </div>

      </>
    )
}
