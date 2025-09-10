"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setNav(false)
  }

  return (
    <div
      className={`flex justify-between items-center w-full h-20 px-4 text-foreground fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div>
        <h1 className="text-5xl font-bold ml-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Shree
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-muted-foreground hover:text-primary hover:scale-105 duration-200 transition-all"
          >
            <button onClick={() => scrollToSection(link)} className="hover:underline">
              {link}
            </button>
          </li>
        ))}
      </ul>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 text-muted-foreground md:hidden"
      >
        {nav ? <X size={30} /> : <Menu size={30} />}
      </Button>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-background to-card text-muted-foreground animate-fade-in-up">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-primary transition-colors duration-200"
            >
              <button onClick={() => scrollToSection(link)}>{link}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default NavBar
