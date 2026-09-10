import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { FadeIn, SlideUp } from "@/components/animations";
import { Section, SectionTitle, Card, TechBadge, TimelineItem } from "@/components/shared";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Freelance",
    period: "2020 - Present",
    description:
      "Working with various clients to build custom web applications, ERP systems, and business solutions using Laravel, React, and Next.js.",
  },
  {
    title: "Senior Web Developer",
    company: "Tech Company",
    period: "2018 - 2020",
    description:
      "Led development of multiple web applications, mentored junior developers, and implemented best practices for code quality and performance.",
  },
  {
    title: "Web Developer",
    company: "Digital Agency",
    period: "2016 - 2018",
    description:
      "Developed responsive websites and web applications for diverse clients using modern web technologies.",
  },
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University Name",
    period: "2012 - 2016",
    description: "Focused on software engineering, database systems, and web development.",
  },
];

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Section spacing="xl">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <FadeIn direction="down">
                <h1 className="text-5xl sm:text-6xl font-bold mb-6">Resume</h1>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <p className="text-xl text-muted-foreground mb-8">
                  My professional experience and educational background.
                </p>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <Button size="lg" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </FadeIn>
            </div>
          </div>
        </Section>

        {/* Experience Section */}
        <Section background="muted">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <SlideUp>
                <SectionTitle
                  title="Work Experience"
                  subtitle="My professional journey and key accomplishments"
                />
              </SlideUp>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <SlideUp key={index} delay={index * 0.1}>
                    <TimelineItem
                      year={exp.period}
                      title={exp.title}
                      description={exp.company}
                    >
                      <p className="text-muted-foreground mt-2">{exp.description}</p>
                    </TimelineItem>
                  </SlideUp>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Education Section */}
        <Section>
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <SlideUp>
                <SectionTitle
                  title="Education"
                  subtitle="Academic background and qualifications"
                />
              </SlideUp>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <SlideUp key={index} delay={index * 0.1}>
                    <TimelineItem
                      year={edu.period}
                      title={edu.degree}
                      description={edu.school}
                    >
                      <p className="text-muted-foreground mt-2">{edu.description}</p>
                    </TimelineItem>
                  </SlideUp>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Skills Section */}
        <Section background="muted">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <SlideUp>
                <SectionTitle
                  title="Skills & Expertise"
                  subtitle="Technical and soft skills I've developed throughout my career"
                />
              </SlideUp>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <SlideUp delay={0.1}>
                  <Card padding="lg">
                    <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      <TechBadge>PHP & Laravel</TechBadge>
                      <TechBadge>JavaScript</TechBadge>
                      <TechBadge>TypeScript</TechBadge>
                      <TechBadge>React</TechBadge>
                      <TechBadge>Next.js</TechBadge>
                      <TechBadge>Node.js</TechBadge>
                      <TechBadge>MySQL</TechBadge>
                      <TechBadge>PostgreSQL</TechBadge>
                      <TechBadge>RESTful APIs</TechBadge>
                    </div>
                  </Card>
                </SlideUp>

                <SlideUp delay={0.2}>
                  <Card padding="lg">
                    <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      <TechBadge variant="outline">Problem Solving</TechBadge>
                      <TechBadge variant="outline">Communication</TechBadge>
                      <TechBadge variant="outline">Team Leadership</TechBadge>
                      <TechBadge variant="outline">Project Management</TechBadge>
                      <TechBadge variant="outline">Client Relations</TechBadge>
                      <TechBadge variant="outline">Agile Methodology</TechBadge>
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
