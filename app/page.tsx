import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, SlideUp } from "@/components/animations";
import { Section, SectionTitle, Card, TechBadge } from "@/components/shared";
import { HeroCarousel } from "@/components/hero-carousel";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Section spacing="xl" className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <FadeIn direction="down" duration={0.8}>
                  <div className="inline-block mb-6">
                    <TechBadge variant="default">Available for Work</TechBadge>
                  </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.2} duration={0.8}>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                    Full Stack Developer
                  </h1>
                </FadeIn>

                <FadeIn direction="up" delay={0.4} duration={0.8}>
                  <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                    I build modern web applications with Laravel, React, and Next.js.
                    Specializing in business software, ERP systems, and scalable solutions.
                  </p>
                </FadeIn>

                <FadeIn direction="up" delay={0.6} duration={0.8}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <Link href="/projects">
                        View My Work
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/contact">Get In Touch</Link>
                    </Button>
                  </div>
                </FadeIn>
              </div>

              <FadeIn direction="right" delay={0.4} duration={0.8}>
                <HeroCarousel />
              </FadeIn>
            </div>
          </div>
        </Section>

        {/* Services Section */}
        <Section background="muted">
          <div className="container mx-auto">
            <SectionTitle
              title="What I Do"
              subtitle="Comprehensive web development services tailored to your business needs"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <SlideUp delay={0.1}>
                <Card hover padding="lg">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Code className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Web Development</h3>
                  <p className="text-muted-foreground">
                    Custom web applications built with modern technologies like React, Next.js, and Laravel.
                  </p>
                </Card>
              </SlideUp>

              <SlideUp delay={0.2}>
                <Card hover padding="lg">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Palette className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
                  <p className="text-muted-foreground">
                    Creating intuitive and beautiful user interfaces that provide excellent user experiences.
                  </p>
                </Card>
              </SlideUp>

              <SlideUp delay={0.3}>
                <Card hover padding="lg">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Performance</h3>
                  <p className="text-muted-foreground">
                    Building fast, optimized applications that deliver exceptional performance.
                  </p>
                </Card>
              </SlideUp>
            </div>
          </div>
        </Section>

        {/* Featured Project Section */}
        <Section>
          <div className="container mx-auto">
            <SectionTitle
              title="Featured Project"
              subtitle="A comprehensive ERP system built for business efficiency"
            />

            <div className="max-w-5xl mx-auto">
              <SlideUp>
                <Card variant="elevated" padding="lg" hover>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold">ERP System</h3>
                      <p className="text-muted-foreground text-lg">
                        A complete enterprise resource planning system featuring dashboard analytics,
                        authentication, inventory management, sales tracking, quotation and invoice
                        generation, reporting, and PDF exports.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <TechBadge>Laravel</TechBadge>
                        <TechBadge>React</TechBadge>
                        <TechBadge>MySQL</TechBadge>
                        <TechBadge>REST API</TechBadge>
                      </div>
                      <div className="flex gap-4 pt-4">
                        <Button asChild>
                          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            View on GitHub
                          </a>
                        </Button>
                        <Button variant="outline" asChild>
                          <a
                            href="https://book-store-demo-rho.vercel.app/login"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                    <div className="relative rounded-xl overflow-hidden">
                      <Image
                        src="/images/projects/Dashboard.jpg"
                        alt="ERP System dashboard preview"
                        width={1600}
                        height={800}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </Card>
              </SlideUp>
            </div>
          </div>
        </Section>

        {/* Tech Stack Section */}
        <Section background="muted">
          <div className="container mx-auto">
            <SectionTitle
              title="Tech Stack"
              subtitle="Technologies and tools I use to bring ideas to life"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Laravel",
                "Node.js",
                "MySQL",
                "Tailwind CSS",
                "Framer Motion",
              ].map((tech, index) => (
                <SlideUp key={tech} delay={index * 0.05}>
                  <Card padding="md" hover>
                    <p className="font-medium text-center">{tech}</p>
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
                <h2 className="text-4xl sm:text-5xl font-bold mb-4">Let&apos;s Work Together</h2>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <p className="text-xl text-muted-foreground">
                  Have a project in mind? I&apos;d love to hear about it.
                  Let&apos;s discuss how I can help bring your ideas to life.
                </p>
              </FadeIn>
              <FadeIn direction="up" delay={0.4}>
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Start a Conversation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
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