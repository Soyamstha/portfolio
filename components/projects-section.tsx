"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const projects = [
  {
    id: 1,
    title: "Electronic E-Commerce Website",
    description:
      "A dynamic and responsive electronic e-commerce website built with Laravel framework. Features modern UI/UX design, RESTful APIs, and secure MySQL database integration with optimized queries using Eloquent ORM.",
    image: "/electronic-website.png",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "MySQL"],
    github: "https://github.com/Soyamstha/electronics-website-using-laravel-framework",
    live: "#",
  },
  {
    id: 2,
    title: "Lookscart",
    description:
      "Lookscart is a modern e-commerce platform for buying glasses, built with Next.js (frontend) and Laravel (backend). It features product browsing, search & filter, cart management, secure checkout, and order tracking. The Laravel backend provides REST APIs for authentication, product & order management, while the Next.js frontend delivers a fast, SEO-friendly shopping experience",
    image: "/lookscart.png",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "PHP", "Laravel", "MySQL"],
    github: "https://github.com/Soyamstha",
    live: "#",
  },
  {
    id: 3,
    title: "2D Car Race Game",
    description:
      "An engaging 2D car racing game developed using Java Swing and AWT. Features smooth game mechanics, real-time collision detection, animated car movements, and integrated scoreboard system with database storage.",
    image: "/2d-car-racing-interface.png",
    tags: ["Java", "Swing", "AWT", "Event Handling", "DBMS", "Multithreading"],
    github: "https://github.com/Soyamstha/2d-car-game",
    live: "#",
  },
  {
    id: 4,
    title: "Face Recognition Attendance System",
    description:
      "A real-time face recognition-based attendance system using OpenCV and Haar Cascade algorithm. Features GUI built with Tkinter, automatic attendance marking with timestamps, and efficient CSV-based record management.",
    image: "/face-project.png",
    tags: ["Python", "Tkinter", "OpenCV", "NumPy", "Haar Cascade", "Pandas"],
    github: "https://github.com/Soyamstha/6th-sem-python-project",
    live: "#",
  },
  {
    id: 5,
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and Next.js. Features smooth animations, dark mode support, interactive contact form, and showcases my development skills with clean design and optimal performance.",
    image: "/portfolio.png",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Soyamstha",
    live: "#",
  },
]

export function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1 && !visibleProjects.includes(index)) {
              setVisibleProjects((prev) => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [visibleProjects])

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development work, featuring full-stack applications and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                projectRefs.current[index] = el
              }}
              className={`transition-all duration-700 ${
                visibleProjects.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border h-full">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
