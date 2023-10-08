import MaxWidthWrapper from "./components/MaxWidthWrapper";

export default function Home() {
    return (
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border-gray-200 bg-white px-7 py-2 shadow-md background-blur transition-all hover:border-gray-300 hover:bg-white/50 ">
          <p className="text-sm animate-in font-semibold text-gray-700">
            Sispei é um sistema para avaliação do desempenho
          </p>
          <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">Avalie de maneira rápida o desempenhos dos seus alunos <span className="text-blue-600">PEI</span></h1>
        </div>
      </MaxWidthWrapper>
    )
}
