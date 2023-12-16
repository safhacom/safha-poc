import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Home() {
  const router = useRouter()
  const prompt_template =
    "Generate a landing website for an Online Coach/Business Consultancy business and make sure to pre fill the content and make it as cool as possible"
  const [prompt, setPrompt] = useState("")
  const [generating, setGenerating] = useState(false)

  const onKeyDown = (e: any) => {
    if (e.key === "Tab") {
      e.preventDefault()
      setPrompt(prompt_template)
    }
  }

  const handleGenerate = () => {
    setGenerating(true)
    const website = Math.floor(Math.random() * 10) + 1
    setTimeout(() => {
      router.push(`https://safha-web-git-safha-web-${website}-yat.vercel.app`)
    }, 5000)
  }

  useEffect(() => {
    setGenerating(false)
    setPrompt("")
  }, [])

  return (
    <div className="w-full h-screen relative">
      <img
        src="/logo.png"
        className="absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center z-50"
        width={200}
        height={200}
      />

      <div className="absolute w-full xl:w-fit px-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-8">
        <div className="relative w-full">
          <textarea
            className="xl:w-[600px] w-full xl:h-64 h-80 border-4 border-secondary outline-none rounded-md shadow-lg bg-secondary placeholder:text-black/50 bg-opacity-30 text-3xl p-4"
            value={prompt}
            placeholder={prompt_template}
            autoFocus
            tabIndex={0}
            onKeyDown={onKeyDown}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={generating}
          />
          <div
            className={`mt-8 text-center xl:text-2xl ${
              generating ? "animate-pulse" : ""
            }`}
          >
            <p>
              {generating
                ? "Generating your AI website..."
                : "Press 'tab' to use prompt template"}
            </p>
          </div>

          <div
            onClick={handleGenerate}
            className={`border-4 bg-primary bg-opacity-50 w-16 h-16 rounded-full absolute bottom-[84px] right-4 flex justify-center items-center overflow-hidden transition-all duration-300 ${
              generating
                ? "border-black grayscale cursor-wait"
                : "border-primary cursor-pointer hover:opacity-90 hover:-translate-y-1"
            }`}
          >
            <img
              src="/magic.gif"
              className={`z-50 w-full h-full object-cover scale-[1.6] ${
                generating ? "animate-spin" : ""
              }`}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 w-full p-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center font-medium text-xl">
        <p className="animate-pulse text-sm xl:text-xl">
          The future is jobless. The future is independent. The future is free.
        </p>
      </div>
    </div>
  )
}
