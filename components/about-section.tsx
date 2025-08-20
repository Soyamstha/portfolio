"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const skills = [
  "SQL (MS SQL Server, MySQL, PostgreSQL)",
  "Python (Pandas, NumPy, OpenCV, MatPlotLib)",
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "React",
  "Next.js",
  "Typescript",
  "Tailwind CSS",
  "Java (Swing, AWT, Event Handling, DBMS)",
  "Laravel",
  "Bootstrap",
  "Git",
  "GitHub",
  "GitLab",
]

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Building dynamic and responsive web applications using HTML, CSS, JavaScript, PHP, React, Tailwind CSS, and Laravel framework",
  },
  {
    icon: Code,
    title: "Desktop Applications",
    description:
      "Creating rich desktop applications using Java Swing, AWT with event handling and database integration",
  },
  {
    icon: Database,
    title: "Data & AI Solutions",
    description:
      "Developing data-driven applications with Python, OpenCV, and machine learning for real-world problems",
  },
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer currently pursuing my Bachelor's in Information Technology at
              Purbanchal University. I specialize in creating dynamic web applications, desktop software, and AI-powered
              solutions that solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm an active participant in hackathons and coding competitions, constantly exploring new technologies and
              contributing to collaborative projects on GitHub. I enjoy building everything from e-commerce platforms to
              innovative AI systems.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Education:</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong>Bachelor in Information Technology</strong> - Purbanchal University (2021-present)
                </p>
                <p className="text-muted-foreground">
                  <strong>+2 Science</strong> - United College (2019-2021)
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Technologies & Skills:</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className={`transition-all duration-500 hover:bg-primary hover:text-primary-foreground ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="space-y-6">
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
