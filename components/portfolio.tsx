"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: "/ecommerce-website-screenshot.png",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI",
      codelink: "https://github.com/shri1211/myEcommerce",
      demolink: "https://my-ecommerce-70ejxdtin-shreenidhis-projects.vercel.app/",
    },
    {
      id: 2,
      src: "/todo-app-screenshot.jpg",
      title: "Todo Application",
      description: "Task management app with React and modern design",
      codelink: "https://github.com/shri1211/My-Todo",
      demolink: "https://my-todo-nu-six.vercel.app/",
    },
    {
      id: 3,
      src: "/calculator-app-screenshot.jpg",
      title: "Calculator App",
      description: "Interactive calculator with clean interface",
      codelink: "https://github.com/shri1211/calculator",
      demolink: "https://shri1211.github.io/calculator/",
    },
    {
      id: 4,
      src: "/image-search-app-screenshot.jpg",
      title: "Image Search App",
      description: "Search and browse images with API integration",
      codelink: "https://github.com/shri1211/imageSearch_app",
      demolink: "https://shri1211.github.io/imageSearch_app/",
    },
    {
      id: 5,
      src: "/news-app-screenshot.jpg",
      title: "React News App",
      description: "News aggregation app built with React",
      codelink: "https://github.com/shri1211/React_news_app",
      demolink: "https://github.com/shri1211/React_news_app",
    },
    {
      id: 6,
      src: "/text-utils-app-screenshot.jpg",
      title: "Text Utils",
      description: "Text manipulation and utility application",
      codelink: "https://github.com/shri1211/textUtils",
      demolink: "https://github.com/shri1211/textUtils",
    },
  ]

  return (
    <div id="portfolio" className="bg-gradient-to-b from-card to-muted w-full min-h-screen text-foreground py-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 animate-fade-in-up">
          <h2 className="text-4xl font-bold inline border-b-4 border-primary text-foreground">Portfolio</h2>
          <p className="py-6 text-muted-foreground text-lg">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map(({ id, src, title, description, codelink, demolink }, index) => (
            <Card
              key={id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={src || "/placeholder.svg"}
                  alt={title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{description}</p>

                <div className="flex gap-3">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                  >
                    <a href={demolink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                      Demo
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 group/btn hover:bg-accent hover:text-accent-foreground transition-all duration-300 bg-transparent"
                  >
                    <a href={codelink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
