import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import logoAsset from "@/assets/asmaa-logo.png.asset.json";
import resumeAsset from "@/assets/Asmaa-Abdullah-Resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Asmaa Abdullah — Data Analyst Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Asmaa Abdullah, Data Analyst building Power BI dashboards, analytics and machine learning solutions for real business problems.",
      },
      { property: "og:title", content: "Asmaa Abdullah — Data Analyst Portfolio" },
      {
        property: "og:description",
        content:
          "Dashboards, data analysis and machine learning projects by Asmaa Abdullah, Data Analyst.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const skills = [
  "Python",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "SQL",
  "Power BI",
  "Tableau",
  "Matplotlib",
  "Git",
  "GitHub",
  "Jupyter Notebook",
];

const projects = [
  {
    title: "HR Analytics Dashboard",
    description:
      "Interactive Power BI dashboard analysing workforce demographics, employee attrition, work-life balance and key HR KPIs for data-driven decision-making.",
    tech: ["Power BI", "DAX", "Power Query"],
    link: "https://github.com/asmaaabdalh/HR-Data-Analytics-Dashboard-Power-BI-.git",
  },
  {
    title: "Chicago Crime Dashboard",
    description:
      "Power BI dashboard to explore crime trends, identify high-risk areas and analyse incidents through interactive visualisations.",
    tech: ["Power BI"],
    link: "https://mostaql.com/portfolio/2974792-%D9%84%D9%88%D8%AD%D8%A9-%D8%AA%D8%AD%D9%84%D9%8A%D9%84-%D8%A7%D9%84%D8%AC%D8%B1%D8%A7%D8%A6%D9%85-%D9%81%D9%8A-%D8%B4%D9%8A%D9%83%D8%A7%D8%BA%D9%88",
  },
  {
    title: "Hospital Analytics Dashboard",
    description:
      "Dashboard monitoring hospital performance, patient metrics and operational KPIs for better healthcare insights.",
    tech: ["Power BI"],
    link: "https://github.com/asmaaabdalh/Hospital-Value-Based-Performance-Dashboard.git",
  },
];

const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function Portfolio() {
  useReveal();
  const [showOpening, setShowOpening] = useState(true);

  useEffect(() => {
    const hasOpened = window.sessionStorage.getItem("asmaa-portfolio-opened") === "true";
    if (hasOpened) {
      setShowOpening(false);
      return;
    }

    document.body.classList.add("opening-active");
    const timer = window.setTimeout(() => {
      window.sessionStorage.setItem("asmaa-portfolio-opened", "true");
      setShowOpening(false);
      document.body.classList.remove("opening-active");
    }, 2200);

    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove("opening-active");
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {showOpening ? (
        <div className="opening-screen" role="status" aria-label="Opening Asmaa Abdullah's portfolio">
          <div className="opening-mark">
            <img src={logoAsset.url} alt="" className="opening-logo" />
          </div>
          <p className="opening-name">Asmaa Abdullah</p>
          <div className="opening-line" aria-hidden="true" />
        </div>
      ) : null}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3" aria-label="Asmaa Abdullah, back to top">
            <img src={logoAsset.url} alt="" className="h-9 w-9 object-contain" />
            <span className="hidden font-display text-sm font-semibold uppercase sm:inline">
              Asmaa<span className="text-primary">.</span>
            </span>
          </a>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={resumeAsset.url}
            download
            className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-[1.04]"
          >
            Download Resume
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero-aura relative overflow-hidden">
          <div className="mx-auto max-w-5xl px-6 py-28 md:py-36">
            <div className="reveal" data-visible="true">
              <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
                Data Analyst
              </p>
              <h1 className="mt-5 text-5xl leading-[1.05] font-bold md:text-7xl">
                Asmaa <span className="text-gradient">Abdullah</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                I turn raw data into meaningful insights — dashboards, analysis and machine learning
                solutions that answer real business questions.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="glow-ring rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  View projects
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
          <div className="float-slow pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        </section>

        {/* About */}
        <Section id="about" title="About" eyebrow="01">
          <p className="reveal max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I&apos;m a Data Analyst who enjoys turning raw data into meaningful insights. I build
            dashboards, analyse data, and create machine learning solutions that help solve real
            business problems.
          </p>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills & Tools" eyebrow="02">
          <ul className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <li
                key={skill}
                className="reveal rounded-full border border-border bg-card px-4 py-2 text-sm text-card-foreground transition-colors hover:border-primary"
                style={{ transitionDelay: `${i * 45}ms` }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects" eyebrow="03">
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project, i) => (
              <article
                key={project.title}
                className="reveal group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/70"
                style={{ transitionDelay: `${i * 110}ms` }}
              >
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-6 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
                >
                  View project →
                </a>
              </article>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education" title="Education" eyebrow="04">
          <div className="reveal rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">B.Sc. in Computer and Data Science</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Alexandria University · Expected 2027
            </p>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact" eyebrow="05">
          <div className="reveal grid gap-4 sm:grid-cols-3">
            <ContactCard
              label="Email"
              value="alshalsdfghjkl@gmail.com"
              href="mailto:alshalsdfghjkl@gmail.com"
            />
            <ContactCard
              label="LinkedIn"
              value="asmaa-abdullah"
              href="https://www.linkedin.com/in/asmaa-abdullah-bb08422b6/"
            />
            <ContactCard label="GitHub" value="asmaaabdalh" href="https://github.com/asmaaabdalh" />
          </div>
          <div className="reveal mt-8">
            <a
              href={resumeAsset.url}
              download
              className="glow-ring inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Download Resume (PDF)
            </a>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border/60 py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Asmaa Abdullah · Data Analyst
      </footer>
    </div>
  );
}

function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id: string;
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border/50">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="reveal mb-10 flex items-center gap-4">
          <span className="text-xs font-semibold tracking-[0.3em] text-primary">{eyebrow}</span>
          <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
          <span className="h-px flex-1 bg-border" />
        </div>
        {children}
      </div>
    </section>
  );
}

function ContactCard({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer noopener"
      className="rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/70"
    >
      <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">{label}</p>
      <p className="mt-2 truncate text-sm font-semibold">{value}</p>
    </a>
  );
}
