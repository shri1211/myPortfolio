"use client"
import { Card, CardContent } from "@/components/ui/card"

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: "/html5-logo.png",
      title: "HTML",
      style: "hover:shadow-orange-500/50",
    },
    {
      id: 2,
      src: "/css3-logo.png",
      title: "CSS",
      style: "hover:shadow-blue-500/50",
    },
    {
      id: 3,
      src: "/javascript-logo.png",
      title: "JavaScript",
      style: "hover:shadow-yellow-500/50",
    },
    {
      id: 4,
      src: "/react-logo.png",
      title: "React",
      style: "hover:shadow-blue-600/50",
    },
    {
      id: 5,
      src: "/tailwind-css-logo.png",
      title: "Tailwind",
      style: "hover:shadow-cyan-400/50",
    },
    {
      id: 6,
      src: "/nextjs-logo.png",
      title: "Next.js",
      style: "hover:shadow-gray-400/50",
    },
    {
      id: 7,
      src: "/github-logo.png",
      title: "GitHub",
      style: "hover:shadow-gray-600/50",
    },
  ]

  return (
    <div id="experience" className="bg-gradient-to-b from-background to-card w-full min-h-screen py-20">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-foreground">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl font-bold border-b-4 border-primary p-2 inline text-foreground">Experience</h2>
          <p className="py-6 text-muted-foreground text-lg">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 px-4 sm:px-0">
          {techs.map(({ id, src, title, style }, index) => (
            <Card
              key={id}
              className={`group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl ${style} animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 flex flex-col items-center">
                <img
                  src={src || "/placeholder.svg"}
                  alt={`${title} logo`}
                  className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                />
                <p className="font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
