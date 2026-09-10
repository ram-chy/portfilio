import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { FadeIn, SlideUp } from "@/components/animations";
import { Section, Card, TechBadge } from "@/components/shared";

const blogPosts = [
  {
    title: "Building Scalable Laravel Applications",
    excerpt:
      "Learn best practices for building scalable and maintainable Laravel applications for enterprise-level projects.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Laravel",
    href: "#",
  },
  {
    title: "Next.js 15: What's New and Exciting",
    excerpt:
      "Explore the latest features in Next.js 15 and how they can improve your web development workflow.",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Next.js",
    href: "#",
  },
  {
    title: "React Server Components Explained",
    excerpt:
      "A deep dive into React Server Components and how they revolutionize the way we build React applications.",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "React",
    href: "#",
  },
  {
    title: "Database Design Best Practices",
    excerpt:
      "Essential database design principles every developer should know for building efficient applications.",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "Database",
    href: "#",
  },
  {
    title: "Building RESTful APIs with Laravel",
    excerpt:
      "A comprehensive guide to building robust RESTful APIs using Laravel and best practices.",
    date: "2023-12-20",
    readTime: "12 min read",
    category: "API",
    href: "#",
  },
  {
    title: "Modern CSS with Tailwind",
    excerpt:
      "How Tailwind CSS changed the way we write CSS and why it's become essential in modern web development.",
    date: "2023-12-15",
    readTime: "5 min read",
    category: "CSS",
    href: "#",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Section spacing="xl">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <FadeIn direction="down">
                <h1 className="text-5xl sm:text-6xl font-bold mb-6">Blog</h1>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <p className="text-xl text-muted-foreground">
                  Thoughts, tutorials, and insights on web development, software architecture,
                  and technology.
                </p>
              </FadeIn>
            </div>
          </div>
        </Section>

        {/* Blog Posts Grid */}
        <Section background="muted">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {blogPosts.map((post, index) => (
                <SlideUp key={index} delay={index * 0.1}>
                  <Card padding="lg" hover className="h-full flex flex-col">
                    <div className="space-y-3 flex-1">
                      <TechBadge variant="default">{post.category}</TechBadge>
                      <h3 className="text-xl font-bold">{post.title}</h3>
                      <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 mt-4 border-t border-border">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full mt-4" asChild>
                      <a href={post.href}>Read More</a>
                    </Button>
                  </Card>
                </SlideUp>
              ))}
            </div>
          </div>
        </Section>

        {/* Newsletter Section */}
        <Section>
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <FadeIn direction="up">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4">Stay Updated</h2>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <p className="text-xl text-muted-foreground">
                  Subscribe to my newsletter to get the latest articles and updates.
                </p>
              </FadeIn>
              <FadeIn direction="up" delay={0.4}>
                <form className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <Button type="submit" size="lg">
                    Subscribe
                  </Button>
                </form>
              </FadeIn>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
