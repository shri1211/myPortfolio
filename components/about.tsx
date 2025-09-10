"use client"
import { Card, CardContent } from "@/components/ui/card"

const About = () => {
  return (
    <div id="about" className="w-full min-h-screen bg-gradient-to-b from-muted to-background text-foreground py-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 animate-fade-in-up">
          <h2 className="text-4xl font-bold inline border-b-4 border-primary text-foreground">About</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <Card className="animate-slide-in-left animate-delay-200 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am a passionate and driven Frontend Developer with a strong foundation in front-end and back-end
                technologies. I have a knack for creating dynamic and responsive web applications that provide a
                seamless user experience. My journey in web development has equipped me with the skills to build robust
                and scalable applications from scratch.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-slide-in-right animate-delay-400 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">What I Do</h3>
              <p className="text-muted-foreground leading-relaxed">
                On the front-end, I am proficient in HTML, CSS, and JavaScript, and I have extensive experience with
                modern frameworks like React and Next.js. I enjoy bringing ideas to life with clean and efficient code,
                ensuring that the user interface is not only visually appealing but also highly functional.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-slide-in-left animate-delay-600 hover:shadow-lg transition-shadow duration-300 md:col-span-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">My Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                I focus on creating modern, responsive, and user-friendly interfaces using Tailwind CSS and other frontend technologies. I am passionate about building clean and efficient designs that enhance user experience. Always eager to learn and adapt, I keep myself updated with the latest trends in frontend development. As a quick learner and team player, I enjoy contributing my skills to exciting and impactful projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default About
