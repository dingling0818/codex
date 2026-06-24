const researchProjects = [
  {
    title: "Trust Dynamics in AI-Enabled Retail Financial Investment Services",
    visual: "AI",
    role: "Research Assistant | Faculty of Information, University of Toronto",
    detail:
      "Examining how trust is shaped in AI-mediated financial investment contexts.",
  },
  {
    title: "AI, Uncertainty, and Misinformation",
    visual: "STS",
    role: "Research Assistant | Faculty of Information, University of Toronto",
    detail:
      "Studying public knowledge, uncertainty, and information disorder around AI systems.",
  },
  {
    title: "Digital Humanities Renaming Landscape Survey",
    visual: "DH",
    role: "Research Assistant | Faculty of Information, University of Toronto",
    detail:
      "Mapping institutional naming, digital humanities infrastructure, and scholarly communication practices.",
  },
  {
    title: "CDHI Website Re-Architecture",
    visual: "WEB",
    role: "Research Assistant | Faculty of Information, University of Toronto",
    detail:
      "Supporting information architecture and digital infrastructure work for a research-facing web platform.",
  },
  {
    title: "China's Social Informatics",
    visual: "CN",
    role: "Presenter | University of Manchester",
    detail:
      "Developing historical and sociological accounts of Chinese information systems and technical knowledge.",
  },
  {
    title: "Chinese Social Information",
    visual: "SI",
    role: "Presenter | UofT & Cornell Workshop of HPS",
    detail:
      "Tracing missing conceptual and institutional pieces in histories of social information.",
  },
  {
    title: "Quantum Technology Futures",
    visual: "QT",
    role: "Publication | New Explorations",
    detail:
      "Revisiting early warning infrastructures to think through emerging quantum technology futures.",
  },
  {
    title: "AI-Enabled Financial Investment Services",
    visual: "FIN",
    role: "Conference Paper | IEEE ICCE",
    detail:
      "Exploratory review of trust dynamics in consumer-facing AI investment services.",
  },
  {
    title: "Smart-Kit and DIY Home Organization",
    visual: "DIY",
    role: "Design Research | OCAD University",
    detail:
      "Research-through-design work on smart home organization, DIY hacking, and everyday technical practice.",
  },
  {
    title: "Voice Assistants and Advertising Intrusiveness",
    visual: "HCI",
    role: "HCI Research | University of Toronto",
    detail:
      "Investigating how voice interfaces mediate commercial intrusion, domestic space, and user experience.",
  },
];

const teachingCourses = [
  "CCT109",
  "CCT110",
  "CCT218",
  "CCT208",
  "CCT250",
  "CCT354",
  "CCT307",
  "INF1003",
  "HPS120",
  "HISA02",
  "MDSB20",
  "MDSB33",
  "MDSC29",
];

const experience = [
  {
    role: "Research Assistant",
    place: "Faculty of Information, University of Toronto",
    detail:
      "Trust dynamics in AI-enabled retail financial investment services; AI, uncertainty, misinformation; digital humanities infrastructure.",
  },
  {
    role: "Chief Strategist / Co-founder",
    place: "ORISIS; Leyu Technology",
    detail:
      "Strategic transformation, data analytics, digital operations, and aquaponics business model innovation.",
  },
];

const skills = [
  "Historiographic research",
  "UX research",
  "Participatory research",
  "Business analysis",
  "Data modeling",
  "Python",
  "R",
  "SQL",
  "Figma",
  "Tableau",
  "Adobe CC",
  "Nvivo",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f6f1] text-[#171717]">
      <nav className="mx-auto flex max-w-6xl items-center justify-end px-6 py-7">
        <div className="flex items-center gap-5 text-sm font-medium text-[#4f4a43]">
          <a className="transition hover:text-[#0b6f68]" href="#research">
            Research & Publication
          </a>
          <a className="transition hover:text-[#0b6f68]" href="#teaching">
            Teaching
          </a>
          <a className="transition hover:text-[#0b6f68]" href="#work">
            Work
          </a>
          <a className="transition hover:text-[#0b6f68]" href="#contact">
            Contact
          </a>
        </div>
      </nav>

      <section
        id="top"
        className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-14 pt-6 md:grid-cols-[1.08fr_0.92fr] md:pb-20 md:pt-12"
      >
        <div className="space-y-8">
          <div className="space-y-6">
            <p className="max-w-3xl text-xl font-semibold leading-snug text-[#0b6f68] sm:text-2xl">
              University of Toronto | IHPST & iSchool
            </p>
            <h1 className="max-w-3xl text-6xl font-semibold leading-none text-[#171717] sm:text-7xl md:text-8xl">
              Ling Ding
            </h1>
            <p className="max-w-3xl text-3xl font-semibold leading-snug text-[#173f3a] sm:text-4xl">
              <span className="block">SSHRC Doctoral Fellow</span>
              <span className="block">Junior Scholar in Sociology of Technology</span>
            </p>
            <p className="max-w-2xl text-lg leading-8 text-[#5d574f]">
              I am a Ph.D. student at the Institute for the History and
              Philosophy of Science and Technology, with research spanning STS,
              HCI, AI and society, media studies, and critical infrastructure.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              className="rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0b6f68]"
              href="#research"
            >
              View research
            </a>
            <a
              className="rounded-full border border-[#b8b0a4] px-5 py-3 text-sm font-semibold text-[#171717] transition hover:border-[#0b6f68] hover:text-[#0b6f68]"
              href="https://docs.google.com/document/d/1N6L9llJR_nn8zjMEM_xphTVzuHlKW30CEQfFGdRFHJo"
            >
              CV
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-[#d9d1c5] bg-white shadow-[0_28px_80px_rgba(23,23,23,0.16)]">
          <img
            alt="Portrait of Ling Ding"
            className="aspect-[4/5] h-full w-full object-cover object-[52%_30%]"
            src="/ling-ding-portrait.png"
          />
        </div>
      </section>

      <section className="border-y border-[#ded7cb] bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
          <div>
            <p className="text-5xl font-semibold tracking-tight text-[#173f3a] sm:text-6xl">
              $180K
            </p>
            <p className="mt-3 text-base font-semibold text-[#171717]">
              Grant & Scholarship
            </p>
            <p className="mt-2 text-sm leading-6 text-[#5f5a52]">
              Major doctoral and institutional funding.
            </p>
          </div>
          <div>
            <p className="text-5xl font-semibold tracking-tight text-[#173f3a] sm:text-6xl">
              10
            </p>
            <p className="mt-3 text-base font-semibold text-[#171717]">
              Publications
            </p>
            <p className="mt-2 text-sm leading-6 text-[#5f5a52]">
              Publications, presentations, and conference work.
            </p>
          </div>
          <div>
            <p className="text-5xl font-semibold tracking-tight text-[#173f3a] sm:text-6xl">
              12+
            </p>
            <p className="mt-3 text-base font-semibold text-[#171717]">
              Teaching
            </p>
            <p className="mt-2 text-sm leading-6 text-[#5f5a52]">
              Courses supported as a teaching assistant at UofT.
            </p>
          </div>
        </div>
      </section>

      <section id="research" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-8 grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-[#0b6f68]">
              Research & Publication
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Current Research Projects
            </h2>
          </div>
          <p className="text-sm leading-7 text-[#5f5a52]">
            My work connects historical inquiry, design research, and critical
            analysis of emerging technologies, with attention to institutions,
            infrastructures, and everyday technical practice.
          </p>
        </div>

        <div className="-mx-6 overflow-x-auto px-6 pb-4">
          <div className="flex w-max gap-5">
          {researchProjects.map((project) => (
            <a
              className="block min-h-[260px] w-[78vw] max-w-[360px] rounded-lg border border-[#d8d1c5] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0b6f68] hover:shadow-md sm:w-[340px]"
              href="#research"
              key={project.title}
            >
              <div className="mb-5 flex items-center justify-between">
                <div
                  aria-hidden="true"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f3ef] text-sm font-semibold text-[#0b6f68]"
                >
                  {project.visual}
                </div>
                <div aria-hidden="true" className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#0b6f68]" />
                  <span className="h-px w-8 bg-[#c9d8d4]" />
                  <span className="h-2 w-2 rounded-full bg-[#f0a66a]" />
                </div>
              </div>
              <p className="text-sm font-semibold text-[#0b6f68]">
                {project.role}
              </p>
              <h3 className="mt-4 text-xl font-semibold leading-snug">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                {project.detail}
              </p>
            </a>
          ))}
          </div>
        </div>
      </section>

      <section id="teaching" className="bg-[#163f3a] px-6 py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-[#f0a66a]">
              Teaching
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Teaching Assistant Experience
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#d8ece8]">
              Courses supported across communication, media studies, HPS,
              information, and digital culture at the University of Toronto.
            </p>
          </div>

          <div>
            <p className="text-6xl font-semibold tracking-tight text-[#f4d2b6]">
              12+
            </p>
            <p className="mt-3 text-lg font-semibold">Courses</p>
            <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4">
              {teachingCourses.map((course) => (
                <div
                  className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold"
                  key={course}
                >
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase text-[#0b6f68]">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-semibold">Methods and tools</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              className="rounded-lg border border-[#d8d1c5] bg-white px-4 py-4 text-sm font-semibold shadow-sm"
              key={skill}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section
        id="work"
        className="border-y border-[#ded7cb] bg-white px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-[#0b6f68]">
                Professional Positions
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                Research, strategy, and practice
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#5f5a52]">
              A mixed background across academic research, design, strategy, and
              digital transformation.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {experience.map((item) => (
              <article
                className="rounded-lg border border-[#d8d1c5] bg-[#f8f6f1] p-6 shadow-sm"
                key={item.role}
              >
                <p className="text-sm font-semibold text-[#b54708]">
                  {item.place}
                </p>
                <h3 className="mt-4 text-xl font-semibold">{item.role}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#171717] px-6 py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-[#f0a66a]">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Get in touch.</h2>
          </div>
          <div className="space-y-5 text-sm leading-7 text-[#d8d4cd]">
            <p>
              For research collaboration, teaching, or project inquiries, email
              me or view the current CV.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                className="inline-flex rounded-full bg-white px-5 py-3 font-semibold text-[#171717] transition hover:bg-[#f0a66a]"
                href="mailto:ling.ding@mail.utoronto.ca"
              >
                Email
              </a>
              <a
                className="inline-flex rounded-full border border-white/30 px-5 py-3 font-semibold text-white transition hover:border-[#f0a66a] hover:text-[#f0a66a]"
                href="https://docs.google.com/document/d/1N6L9llJR_nn8zjMEM_xphTVzuHlKW30CEQfFGdRFHJo"
              >
                CV
              </a>
              <a
                className="inline-flex rounded-full border border-white/30 px-5 py-3 font-semibold text-white transition hover:border-[#f0a66a] hover:text-[#f0a66a]"
                href="https://github.com/dingling0818"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
