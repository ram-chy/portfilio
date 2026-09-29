import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { FadeIn, SlideUp } from "@/components/animations";
import { Section, Card, TechBadge } from "@/components/shared";

const projects = [
  {
    title: "ERP System",
    description:
      "A comprehensive enterprise resource planning system with dashboard, authentication, inventory management, sales tracking, quotations, invoices, and reporting.",
    technologies: ["Laravel", "React", "MySQL", "REST API"],
    github: "https://github.com",
    demo: "https://book-store-demo-rho.vercel.app/login",
    featured: true,
  },
  {
    title: "Task Manager",
    description:
      "A task management web application for creating, organizing, and tracking tasks, built and deployed with Laravel.",
    technologies: ["Laravel"],
    github: "https://github.com",
    demo: "https://taskmanager-bkcq.onrender.com",
    featured: true,
  },
  {
    title: "Inventory Management System",
    description:
      "Complete inventory tracking solution with real-time updates, barcode scanning, and automated reordering.",
    technologies: ["Laravel", "Vue.js", "MySQL"],
    github: "https://github.com",
    demo: "#",
    featured: false,
  },
  {
    title: "CRM Application",
    description:
      "Customer relationship management system with contact management, deal tracking, and analytics dashboard.",
    technologies: ["Laravel", "React", "PostgreSQL"],
    github: "https://github.com",
    demo: "#",
    featured: false,
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-featured online store with product catalog, shopping cart, payment integration, and order management.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "#",
    featured: false,
  },
  {
    title: "Business Dashboard",
    description:
      "Analytics dashboard for business metrics with real-time data visualization and reporting features.",
    technologies: ["React", "D3.js", "Firebase"],
    github: "https://github.com",
    demo: "#",
    featured: false,
  },
  {
    title: "API Service",
    description:
      "RESTful API service with authentication, rate limiting, and comprehensive documentation.",
    technologies: ["Laravel", "Passport", "MySQL"],
    github: "https://github.com",
    demo: "#",
    featured: false,
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Section spacing="xl">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <FadeIn direction="down">
                <h1 className="text-5xl sm:text-6xl font-bold mb-6">Projects</h1>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <p className="text-xl text-muted-foreground">
                  A collection of projects I&apos;ve built, from enterprise systems to
                  modern web applications.
                </p>
              </FadeIn>
            </div>
          </div>
        </Section>

        {/* Projects Grid */}
        <Section background="muted">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <SlideUp key={index} delay={index * 0.1}>
                  <Card variant="default" padding="lg" hover className="h-full flex flex-col">
                    <div className="space-y-3 flex-1">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 my-4">
                      {project.technologies.map((tech) => (
                        <TechBadge key={tech} variant="default">
                          {tech}
                        </TechBadge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </Card>
                </SlideUp>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section>
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <FadeIn direction="up">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4">Interested in Working Together?</h2>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <p className="text-xl text-muted-foreground">
                  I&apos;m always open to discussing new projects and opportunities.
                </p>
              </FadeIn>
              <FadeIn direction="up" delay={0.4}>
                <Button size="lg" asChild>
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </FadeIn>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
