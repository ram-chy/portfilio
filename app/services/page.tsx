import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { FadeIn, SlideUp } from "@/components/animations";
import { Section, Card } from "@/components/shared";

const services = [
  {
    title: "ERP Development",
    description:
      "Custom enterprise resource planning systems tailored to your business needs. Includes inventory, sales, accounting, and reporting modules.",
    features: [
      "Custom ERP solutions",
      "Inventory management",
      "Sales & invoicing",
      "Analytics & reporting",
      "Third-party integrations",
    ],
  },
  {
    title: "Inventory Software",
    description:
      "Complete inventory management solutions with real-time tracking, barcode scanning, and automated stock management.",
    features: [
      "Real-time inventory tracking",
      "Barcode scanning",
      "Automated reordering",
      "Multi-location support",
      "Reporting & analytics",
    ],
  },
  {
    title: "CRM Development",
    description:
      "Customer relationship management systems to help you manage leads, contacts, and customer interactions effectively.",
    features: [
      "Contact management",
      "Lead tracking",
      "Sales pipeline",
      "Email integration",
      "Customer analytics",
    ],
  },
  {
    title: "Business Automation",
    description:
      "Streamline your business processes with custom automation solutions that save time and reduce errors.",
    features: [
      "Workflow automation",
      "Process optimization",
      "Custom integrations",
      "Data synchronization",
      "Task automation",
    ],
  },
  {
    title: "Laravel APIs",
    description:
      "Robust and scalable RESTful APIs built with Laravel for your web and mobile applications.",
    features: [
      "RESTful API development",
      "Authentication & authorization",
      "API documentation",
      "Rate limiting",
      "Performance optimization",
    ],
  },
  {
    title: "React Applications",
    description:
      "Modern, interactive web applications built with React and Next.js for optimal performance and user experience.",
    features: [
      "Single Page Applications",
      "Progressive Web Apps",
      "Real-time features",
      "Responsive design",
      "Performance optimization",
    ],
  },
  {
    title: "Next.js Websites",
    description:
      "Fast, SEO-friendly websites and web applications built with Next.js for optimal performance and user experience.",
    features: [
      "Server-side rendering",
      "Static site generation",
      "SEO optimization",
      "Fast performance",
      "Modern design",
    ],
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing maintenance and support services to keep your applications running smoothly and securely.",
    features: [
      "Bug fixes & updates",
      "Security patches",
      "Performance monitoring",
      "Feature enhancements",
      "Technical support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Section spacing="xl">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <FadeIn direction="down">
                <h1 className="text-5xl sm:text-6xl font-bold mb-6">Services</h1>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <p className="text-xl text-muted-foreground">
                  I offer a range of services to help businesses build modern, scalable
                  web applications and software solutions.
                </p>
              </FadeIn>
            </div>
          </div>
        </Section>

        {/* Services Grid */}
        <Section background="muted">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <SlideUp key={index} delay={index * 0.1}>
                  <Card variant="default" padding="lg" hover className="h-full">
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
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
                <h2 className="text-4xl sm:text-5xl font-bold mb-4">Need a Custom Solution?</h2>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <p className="text-xl text-muted-foreground">
                  Let&apos;s discuss your project requirements and how I can help you
                  achieve your goals.
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
