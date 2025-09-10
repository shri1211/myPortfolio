"use client"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const Home = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div
      id="home"
      className="h-screen w-full bg-gradient-to-br from-background via-card to-muted flex items-center justify-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row gap-8">
        <div className="flex flex-col justify-center h-full animate-slide-in-left">
          <h2 className="text-4xl sm:text-7xl font-bold text-foreground mb-4">
            {"I'm a "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Frontend Developer
            </span>
          </h2>
          <p className="text-muted-foreground py-4 max-w-md text-lg leading-relaxed">
            I have a year of experience building and designing software. Currently, I love to work on web applications
            using technologies like React, Tailwind and Next.js.
          </p>

          <div className="mt-6">
            <Button
              onClick={scrollToPortfolio}
              className="group bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View Portfolio
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        <div className="animate-slide-in-right">
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center animate-pulse">
              <img
                src="/professional-developer-portrait.jpg"
                alt="Professional developer portrait"
                className="rounded-full w-72 h-72 md:w-80 md:h-80 object-cover shadow-2xl border-4 border-background hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full animate-bounce opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse opacity-60"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
