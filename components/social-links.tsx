"use client"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <Linkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
      color: "hover:bg-blue-600",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <Github size={30} />
        </>
      ),
      href: "https://github.com/shri1211",
      color: "hover:bg-gray-800",
    },
    {
      id: 3,
      child: (
        <>
          Mail <Mail size={30} />
        </>
      ),
      href: "mailto:shrinidhihegde133@gmail.com",
      color: "hover:bg-red-600",
    },
    {
      id: 4,
      child: (
        <>
          Resume <FileText size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
      color: "hover:bg-green-600",
    },
  ]

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-40">
      <ul>
        {links.map(({ id, child, href, style, download, color }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-muted/80 backdrop-blur-sm border border-border/50 ${color} ${style} group transition-all`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-foreground group-hover:text-white transition-colors duration-300"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks
