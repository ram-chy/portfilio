import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, SlideUp } from "@/components/animations";
import { Section, SectionTitle, Card, TechBadge } from "@/components/shared";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Section spacing="xl">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <FadeIn direction="down">
                <h1 className="text-5xl sm:text-6xl font-bold mb-6">About Me</h1>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <p className="text-xl text-muted-foreground mb-8">
                  I&apos;m Ram Chowdhury, a Full Stack Developer passionate about building
                  modern web applications and business solutions.
                </p>
              </FadeIn>
            </div>
          </div>
        </Section>

        {/* Story Section */}
        <Section background="muted">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <SlideUp>
                <SectionTitle
                  title="My Story"
                  align="left"
                  size="sm"
                />
              </SlideUp>
              <div className="space-y-4 text-muted-foreground text-lg">
                <SlideUp delay={0.1}>
                  <p>
                    I started my journey in web development with a curiosity for how things work
                    on the internet. That curiosity turned into a passion for creating digital
                    solutions that solve real-world problems.
                  </p>
                </SlideUp>
                <SlideUp delay={0.2}>
                  <p>
                    With years of experience in full-stack development, I&apos;ve had the privilege
                    of working on diverse projects ranging from small business websites to
                    complex enterprise resource planning (ERP) systems.
                  </p>
                </SlideUp>
                <SlideUp delay={0.3}>
                  <p>
                    My expertise lies in Laravel for backend development and React/Next.js for
                    frontend applications. I believe in writing clean, maintainable code and
                    creating user experiences that are both functional and delightful.
                  </p>
                </SlideUp>
              </div>
            </div>
          </div>
        </Section>

        {/* Skills Section */}
        <Section>
          <div className="container mx-auto">
            <SectionTitle
              title="Skills & Technologies"
              subtitle="Technologies and tools I work with to deliver exceptional results"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <SlideUp delay={0.1}>
                <Card padding="lg">
                  <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    <TechBadge>React.js</TechBadge>
                    <TechBadge>Next.js</TechBadge>
                    <TechBadge>TypeScript</TechBadge>
                    <TechBadge>Tailwind CSS</TechBadge>
                    <TechBadge>Framer Motion</TechBadge>
                    <TechBadge>HTML5 & CSS3</TechBadge>
                  </div>
                </Card>
              </SlideUp>

              <SlideUp delay={0.2}>
                <Card padding="lg">
                  <h3 className="text-xl font-semibold mb-4">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    <TechBadge>Laravel</TechBadge>
                    <TechBadge>PHP</TechBadge>
                    <TechBadge>Node.js</TechBadge>
                    <TechBadge>REST APIs</TechBadge>
                    <TechBadge>MySQL</TechBadge>
                    <TechBadge>PostgreSQL</TechBadge>
                  </div>
                </Card>
              </SlideUp>

              <SlideUp delay={0.3}>
                <Card padding="lg">
                  <h3 className="text-xl font-semibold mb-4">Tools & Platforms</h3>
                  <div className="flex flex-wrap gap-2">
                    <TechBadge>Git</TechBadge>
                    <TechBadge>GitHub</TechBadge>
                    <TechBadge>Docker</TechBadge>
                    <TechBadge>Vercel</TechBadge>
                    <TechBadge>Postman</TechBadge>
                    <TechBadge>VS Code</TechBadge>
                  </div>
                </Card>
              </SlideUp>

              <SlideUp delay={0.4}>
                <Card padding="lg">
                  <h3 className="text-xl font-semibold mb-4">Specializations</h3>
                  <div className="flex flex-wrap gap-2">
                    <TechBadge>ERP Systems</TechBadge>
                    <TechBadge>Business Automation</TechBadge>
                    <TechBadge>API Integration</TechBadge>
                    <TechBadge>Database Design</TechBadge>
                    <TechBadge>Performance</TechBadge>
                  </div>
                </Card>
              </SlideUp>
            </div>
          </div>
        </Section>

        {/* Current Focus Section */}
        <Section background="muted">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <SlideUp>
                <SectionTitle
                  title="Current Focus"
                  subtitle="What I'm learning and exploring"
                  align="left"
                  size="sm"
                />
              </SlideUp>
              <div className="space-y-4 text-muted-foreground text-lg">
                <SlideUp delay={0.1}>
                  <p>
                    I&apos;m currently focused on building modern, performant web applications
                    using the latest technologies. My current areas of interest include:
                  </p>
                </SlideUp>
                <SlideUp delay={0.2}>
                  <ul className="list-disc list-inside space-y-3 ml-4">
                    <li>Advanced Next.js patterns and Server Components</li>
                    <li>AI integration in web applications</li>
                    <li>Microservices architecture</li>
                    <li>Cloud deployment and scalability</li>
                  </ul>
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
