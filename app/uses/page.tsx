import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, SlideUp } from "@/components/animations";
import { Section, SectionTitle, Card, TechBadge } from "@/components/shared";

export default function UsesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Section spacing="xl">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <FadeIn direction="down">
                <h1 className="text-5xl sm:text-6xl font-bold mb-6">Uses</h1>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <p className="text-xl text-muted-foreground">
                  A look at the hardware, software, and tools I use to build modern web applications.
                </p>
              </FadeIn>
            </div>
          </div>
        </Section>

        {/* Hardware Section */}
        <Section background="muted">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <SlideUp>
                <SectionTitle
                  title="Hardware"
                  subtitle="The equipment that powers my development workflow"
                  align="left"
                  size="sm"
                />
              </SlideUp>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SlideUp delay={0.1}>
                  <Card padding="lg" hover>
                    <h3 className="text-xl font-semibold mb-2">Computer</h3>
                    <p className="text-muted-foreground">Custom-built PC with high-performance components for development work.</p>
                  </Card>
                </SlideUp>
                <SlideUp delay={0.2}>
                  <Card padding="lg" hover>
                    <h3 className="text-xl font-semibold mb-2">Monitor</h3>
                    <p className="text-muted-foreground">27-inch 4K display for crisp code and design work.</p>
                  </Card>
                </SlideUp>
                <SlideUp delay={0.3}>
                  <Card padding="lg" hover>
                    <h3 className="text-xl font-semibold mb-2">Keyboard</h3>
                    <p className="text-muted-foreground">Mechanical keyboard for comfortable long coding sessions.</p>
                  </Card>
                </SlideUp>
                <SlideUp delay={0.4}>
                  <Card padding="lg" hover>
                    <h3 className="text-xl font-semibold mb-2">Mouse</h3>
                    <p className="text-muted-foreground">Ergonomic wireless mouse for precision and comfort.</p>
                  </Card>
                </SlideUp>
              </div>
            </div>
          </div>
        </Section>

        {/* Software Section */}
        <Section>
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <SlideUp>
                <SectionTitle
                  title="Software & Tools"
                  subtitle="Applications and services I use daily"
                  align="left"
                  size="sm"
                />
              </SlideUp>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SlideUp delay={0.1}>
                  <Card padding="lg" hover>
                    <h3 className="text-xl font-semibold mb-2">IDE</h3>
                    <p className="text-muted-foreground">Visual Studio Code - My primary code editor with essential extensions for web development.</p>
                  </Card>
                </SlideUp>
                <SlideUp delay={0.2}>
                  <Card padding="lg" hover>
                    <h3 className="text-xl font-semibold mb-2">Browser</h3>
                    <p className="text-muted-foreground">Chrome DevTools for debugging and performance optimization.</p>
                  </Card>
                </SlideUp>
                <SlideUp delay={0.3}>
                  <Card padding="lg" hover>
                    <h3 className="text-xl font-semibold mb-2">Version Control</h3>
                    <p className="text-muted-foreground">Git & GitHub for version control and collaboration.</p>
                  </Card>
                </SlideUp>
                <SlideUp delay={0.4}>
                  <Card padding="lg" hover>
                    <h3 className="text-xl font-semibold mb-2">API Testing</h3>
                    <p className="text-muted-foreground">Postman for API development and testing.</p>
                  </Card>
                </SlideUp>
                <SlideUp delay={0.5}>
                  <Card padding="lg" hover>
                    <h3 className="text-xl font-semibold mb-2">Design</h3>
                    <p className="text-muted-foreground">Figma for UI/UX design and prototyping.</p>
                  </Card>
                </SlideUp>
                <SlideUp delay={0.6}>
                  <Card padding="lg" hover>
                    <h3 className="text-xl font-semibold mb-2">Terminal</h3>
                    <p className="text-muted-foreground">Windows Terminal with PowerShell for command-line operations.</p>
                  </Card>
                </SlideUp>
              </div>
            </div>
          </div>
        </Section>

        {/* Development Environment Section */}
        <Section background="muted">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <SlideUp>
                <SectionTitle
                  title="Development Environment"
                  subtitle="My tech stack and deployment setup"
                  align="left"
                  size="sm"
                />
              </SlideUp>

              <div className="space-y-6">
                <SlideUp delay={0.1}>
                  <Card padding="lg">
                    <h3 className="text-xl font-semibold mb-4">Frontend Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      <TechBadge>Next.js</TechBadge>
                      <TechBadge>React</TechBadge>
                      <TechBadge>TypeScript</TechBadge>
                      <TechBadge>Tailwind CSS</TechBadge>
                      <TechBadge>Framer Motion</TechBadge>
                    </div>
                  </Card>
                </SlideUp>

                <SlideUp delay={0.2}>
                  <Card padding="lg">
                    <h3 className="text-xl font-semibold mb-4">Backend Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      <TechBadge>Laravel</TechBadge>
                      <TechBadge>PHP 8+</TechBadge>
                      <TechBadge>MySQL</TechBadge>
                      <TechBadge>PostgreSQL</TechBadge>
                      <TechBadge>RESTful APIs</TechBadge>
                    </div>
                  </Card>
                </SlideUp>

                <SlideUp delay={0.3}>
                  <Card padding="lg">
                    <h3 className="text-xl font-semibold mb-4">DevOps & Deployment</h3>
                    <div className="flex flex-wrap gap-2">
                      <TechBadge variant="outline">Vercel</TechBadge>
                      <TechBadge variant="outline">Docker</TechBadge>
                      <TechBadge variant="outline">GitHub Actions</TechBadge>
                      <TechBadge variant="outline">Digital Ocean</TechBadge>
                    </div>
                  </Card>
                </SlideUp>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
