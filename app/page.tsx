import NavBar from "@/components/nav-bar"
import Home from "@/components/home"
import About from "@/components/about"
import Portfolio from "@/components/portfolio"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import SocialLinks from "@/components/social-links"

export default function Page() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <SocialLinks />
      <main>
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}
