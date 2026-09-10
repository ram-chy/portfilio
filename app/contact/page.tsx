import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, SquarePlay, Link2, FolderGit2 } from "lucide-react";
import { FadeIn, SlideUp } from "@/components/animations";
import { Section, SectionTitle, Card } from "@/components/shared";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Section spacing="xl">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn direction="down">
                <h1 className="text-5xl sm:text-6xl font-bold mb-6">Get In Touch</h1>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <p className="text-xl text-muted-foreground">
                  Have a project in mind? Let&apos;s discuss how I can help you bring
                  your ideas to life.
                </p>
              </FadeIn>
            </div>
          </div>
        </Section>

        {/* Contact Methods */}
        <Section background="muted">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
              <SlideUp delay={0.1}>
                <Card padding="lg" hover className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground mb-4">ram.chow93@gmail.com</p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="mailto:ram.chow93@gmail.com">Send Email</a>
                  </Button>
                </Card>
              </SlideUp>

              <SlideUp delay={0.2}>
                <Card padding="lg" hover className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground mb-4">+91 91237 54092</p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://wa.me/919123754092" target="_blank" rel="noopener noreferrer">
                      Message on WhatsApp
                    </a>
                  </Button>
                </Card>
              </SlideUp>

              <SlideUp delay={0.3}>
                <Card padding="lg" hover className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Link2 className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://www.linkedin.com/in/ram-chowdhury-67077a358" target="_blank" rel="noopener noreferrer">
                      View Profile
                    </a>
                  </Button>
                </Card>
              </SlideUp>

              <SlideUp delay={0.4}>
                <Card padding="lg" hover className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <SquarePlay className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">YouTube</h3>
                  <p className="text-sm text-muted-foreground mb-4">@RamChowdhuryDev</p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://youtube.com/@RamChowdhuryDev" target="_blank" rel="noopener noreferrer">
                      Watch Videos
                    </a>
                  </Button>
                </Card>
              </SlideUp>

              <SlideUp delay={0.5}>
                <Card padding="lg" hover className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <FolderGit2 className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">GitHub</h3>
                  <p className="text-sm text-muted-foreground mb-4">@ram-chy</p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://github.com/ram-chy" target="_blank" rel="noopener noreferrer">
                      View Repos
                    </a>
                  </Button>
                </Card>
              </SlideUp>
            </div>
          </div>
        </Section>

        {/* Contact Form Section */}
        <Section>
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto">
              <SlideUp>
                <Card padding="lg">
                  <SectionTitle
                    title="Send Me a Message"
                    subtitle="Fill out the form below and I'll get back to you as soon as possible"
                    align="center"
                    size="sm"
                  />

                  <form className="space-y-6 mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Project inquiry"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </Card>
              </SlideUp>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
