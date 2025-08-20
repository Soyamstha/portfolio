import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section id="home">
        <HeroSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <footer className="bg-muted/50 py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground">© 2024 Portfolio. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  )
}
