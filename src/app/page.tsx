"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, MotionConfig, useReducedMotion, useScroll, useSpring } from "motion/react";
import { projects, type Project } from "./projects";

const email = "neeshanbinismath@gmail.com";
const github = "https://github.com/neeshan-ibn-ismath";
const linkedin = "https://www.linkedin.com/in/neeshan-ismath-131282290/";
const filters = ["All projects", "AI & automation", "Full stack"] as const;

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={{ y: reduced ? 0 : 22 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .65, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}

function ProjectVisual({ id }: { id: string }) {
  if (id === "dataverse") return <div className="data-visual" aria-label="Diagram: a natural language question becomes a SQL query and a chart">
    <div className="mini-label">A QUESTION BECOMES AN INSIGHT</div>
    <div className="query-prompt"><span>✳</span> Show me the bigger picture.</div>
    <div className="query-flow"><span>LANGUAGE</span><i/><span>SQL</span><i/><span>INSIGHT</span></div>
    <div className="chart-bars" aria-hidden="true">{[30, 52, 40, 65, 57, 80, 69, 95, 84, 110, 100, 127].map((height, i) => <span key={i} style={{ height, animationDelay: `${i * .1}s` }}/>)}</div>
    <span className="visual-caption">QUERY → VISUALIZE → EXPLORE</span>
  </div>;
  if (id === "admissions") return <div className="admission-visual" aria-label="Diagram: a student profile connects to machine learning and rules to generate degree recommendations">
    <div className="mini-label">FROM POSSIBILITIES TO A PATH</div>
    <div className="path-diagram"><div className="path-input">Your profile</div><div className="path-line"/><div className="path-engines"><span>Machine learning</span><span>Rule-based analysis</span></div><div className="path-line"/><div className="path-output">Explainable recommendations <b>✳</b></div></div>
    <span className="visual-caption">BUILT AROUND A REAL DECISION</span>
  </div>;
  return <div className="commerce-visual" aria-label="Architecture diagram: a Next.js frontend connects to independent e-commerce services">
    <div className="mini-label">INDEPENDENT SERVICES. ONE EXPERIENCE.</div>
    <div className="service-root">Next.js storefront</div><div className="service-connector"/>
    <div className="service-grid">{["Auth", "Products", "Orders", "Payments", "Inventory", "Cart"].map((name, i) => <div key={name}><span>0{i + 1}</span>{name}</div>)}</div>
    <span className="visual-caption">DESIGNED AROUND RESPONSIBILITY</span>
  </div>;
}

export default function Home() {
  const [filter, setFilter] = useState<string>("All projects");
  const [selected, setSelected] = useState<Project | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [paused, setPaused] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const prefersReduced = useReducedMotion();
  const reduceMotion = paused || !!prefersReduced;

  useEffect(() => {
    if (!selected) return;
    dialog.current?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [selected]);
  useEffect(() => () => { if (copyTimer.current) clearTimeout(copyTimer.current); }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true); setCopyError(false);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 3000);
    } catch { setCopyError(true); }
  }
  function closeProject() { dialog.current?.close(); setSelected(null); }
  const visibleProjects = projects.filter(p => filter === "All projects" || p.category === filter);

  return <MotionConfig reducedMotion={reduceMotion ? "always" : "user"}>
    <div className="site" data-motion={reduceMotion ? "paused" : "playing"}>
      <a className="skip-link" href="#main">Skip to content</a>
      <motion.div className="reading-progress" style={{ scaleX: reduceMotion ? scrollYProgress : progress }} aria-hidden="true"/>
      <header className="nav shell" id="home">
        <a className="brand" href="#home" aria-label="Neeshan Ismath home">n<span>i</span><b>.</b></a>
        <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Let’s talk</a></nav>
      </header>
      <main id="main">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="tiny-cross" aria-hidden="true">✳</span> SOFTWARE ENGINEER · SRI LANKA</p>
            <motion.h1 id="hero-title" initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: .8 }}>Thoughtful code.<br/><span className="muted">Real-world</span><br/><em>possibilities.</em></motion.h1>
            <p className="intro">I’m <strong>Neeshan Ismath.</strong> I build web experiences and intelligent tools, from the first idea to the details that make them work.</p>
            <div className="hero-actions"><a className="button primary" href="#work">Explore my work</a><a className="text-link" href="#contact">Get in touch</a></div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-grid"/><div className="orbit o1"/><div className="orbit o2"/><div className="orbit o3"/><div className="orbit o4"/>
            <div className="core">n<span>i</span><b>.</b></div><span className="coordinate top">IDEAS / SYSTEMS / EXPERIENCES</span>
            <div className="art-note"><span>01 / THE APPROACH</span><p>Curiosity in.<br/>Possibility out.</p></div><span className="coordinate bottom">BASED IN SRI LANKA</span>
          </div>
        </section>
        <div className="hero-bottom shell"><p>FULL STACK DEVELOPMENT <span aria-hidden="true">✳</span> AI & AUTOMATION <span aria-hidden="true">✳</span> QUALITY ENGINEERING</p><span>SCROLL TO EXPLORE</span></div>

        <section className="section shell work-section" id="work" aria-labelledby="work-title">
          <Reveal><div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2 id="work-title">Built to do <em>more.</em></h2></div><p className="section-intro">Ideas made tangible.<br/>A few things I’ve been building.</p></div></Reveal>
          <div className="filter-row" role="group" aria-label="Filter projects">{filters.map(f => <button key={f} onClick={() => setFilter(f)} aria-pressed={filter === f} className={filter === f ? "filter active" : "filter"}>{f}{f === "All projects" && <span>04</span>}</button>)}</div>
          <p className="sr-only" aria-live="polite">{visibleProjects.length} projects shown</p>
          <div className="projects-grid">
            {visibleProjects.map(project => <Reveal key={project.id} className={project.id === "clip-studio" ? "project-wrap featured" : "project-wrap"}>
              <article className={`project-card ${project.id}`}>
                {project.id === "clip-studio" ? <>
                  <div className="feature-copy"><div className="project-kicker"><span>{project.label}</span><span>01</span></div><h3>{project.title}<span className="title-period">.</span></h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><button className="button primary case-button" onClick={() => setSelected(project)}>Explore the project</button><div className="feature-footnote"><span>LOCAL AI</span><span>REAL VIDEO EXPORTS</span><span>PRIVACY FIRST</span></div></div>
                  <div className="clip-diagram" role="img" aria-label="Workflow diagram: a long video timeline is analyzed locally, then refined into captioned clips in original, portrait, and square formats">
                    <div className="clip-diagram-heading"><span>FROM FOOTAGE TO FOCUS</span><span>✳ LOCAL AI</span></div>
                    <div className="clip-source"><div className="clip-source-label"><span>SOURCE RECORDING</span><span>16:9</span></div><div className="clip-wave" aria-hidden="true">{Array.from({length:48},(_,i)=><i key={i} style={{height:`${18+((i*17+i*i*3)%55)}%`}}/>)}<div className="clip-selection"/><div className="clip-scan"/></div><div className="clip-ruler" aria-hidden="true"><span>00:00</span><span>FIND THE MOMENT</span><span>END</span></div></div>
                    <div className="clip-process"><span>DISCOVER</span><i/><span>REFINE</span><i/><span>EXPORT</span></div>
                    <div className="clip-outputs" aria-hidden="true"><div className="clip-format landscape"><span>16:9</span><b>▶</b><div className="clip-caption-lines"><i/><i/></div></div><div className="clip-format portrait"><span>9:16</span><b>▶</b><div className="clip-caption-lines"><i/><i/></div></div><div className="clip-format square"><span>1:1</span><b>▶</b><div className="clip-caption-lines"><i/><i/></div></div></div>
                    <div className="clip-diagram-footer"><span>ONE RECORDING. MORE POSSIBILITIES.</span><span>CAPTIONED & READY</span></div>
                  </div>
                </> : <>
                  <ProjectVisual id={project.id}/><div className="project-body"><div className="project-kicker"><span>{project.label}</span><span>{project.number}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><button className="project-link" onClick={() => setSelected(project)}>View project <span aria-hidden="true">＋</span></button></div>
                </>}
              </article>
            </Reveal>)}
          </div>
          <div className="work-footer"><span>More experiments. More things to build.</span><a className="text-link" href={github} target="_blank" rel="noopener noreferrer">Find me on GitHub</a></div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title"><div className="shell about-grid">
          <Reveal><p className="eyebrow">02 / A LITTLE ABOUT ME</p><h2 id="about-title">The person<br/>behind the <em>code.</em></h2><div className="personal-mark" aria-hidden="true">N<span>i</span><b>✳</b></div><p className="location">MAWANELLA, SRI LANKA</p></Reveal>
          <Reveal className="about-copy"><p className="about-lead">Curious by nature.<br/>An engineer by practice.</p><p>I’m Neeshan, an Information Technology graduate from the University of Moratuwa. My work spans frontend development, backend systems, and quality assurance.</p><p>I enjoy connecting the pieces: an interface that feels right, an API that makes sense, and the testing that helps it hold together. Lately, I’ve been exploring how local AI can become part of useful everyday tools.</p><div className="education"><span className="small-label">EDUCATION</span><h3>BSc (Hons) in Information Technology</h3><p>University of Moratuwa <span>2022–2026</span></p></div><p className="outside-code">Away from the keyboard: <span>gaming, PC building, badminton & travelling.</span></p><a href="/Neeshan-Ismath-CV.pdf" className="button outline" download>Download my CV</a></Reveal>
        </div></section>

        <section className="section shell" id="experience" aria-labelledby="experience-title"><Reveal><div className="section-heading"><div><p className="eyebrow">03 / THE JOURNEY SO FAR</p><h2 id="experience-title">Always <em>building.</em></h2></div><p className="section-intro">Different roles.<br/>A broader perspective.</p></div></Reveal>
          <div className="experience-list">
            {[{date:"AUG 2026 — PRESENT",role:"Software Engineering & QA",company:"Tech Me Today",place:"United Kingdom · Remote",description:"Contributing to software development, testing, and quality assurance."},{date:"MAR 2025 · 6 MONTHS",role:"Software Engineering Intern",company:"DotTech (Pvt) Ltd",place:"Remote",description:"Developed and maintained Node.js backend services, contributing to RESTful API design and server-side logic."},{date:"SEP 2024 · 3 MONTHS",role:"SEO Intern",company:"Neat Designs",place:"Australia · Remote",description:"Worked on keyword research, on-page optimization, and content improvements for search visibility."}].map((job,i) => <Reveal key={job.company}><article className="experience-row"><div className="experience-date"><span className={i===0 ? "timeline-dot current" : "timeline-dot"}/>{job.date}</div><div><h3>{job.role}</h3><p className="company">{job.company}<span>{job.place}</span></p></div><p className="experience-description">{job.description}</p></article></Reveal>)}
          </div>
        </section>

        <section className="skills-section shell" aria-labelledby="skills-title"><Reveal><div className="section-heading"><div><p className="eyebrow">04 / MY TOOLKIT</p><h2 id="skills-title">The right tools.<br/><em>A considered approach.</em></h2></div><p className="section-intro">From the browser to the backend,<br/>with quality throughout.</p></div></Reveal><div className="skills-grid">{[
          {number:"01",title:"Interfaces",text:"Responsive web experiences and mobile applications.",tools:["React", "Next.js", "TypeScript", "HTML & CSS", "React Native", "Figma"]},
          {number:"02",title:"Systems",text:"APIs, business logic, and the data behind the experience.",tools:["Node.js", "Express", "Django REST", "Spring Boot", "PostgreSQL", "MongoDB"]},
          {number:"03",title:"Intelligence & quality",text:"Practical AI integration and software you can test.",tools:["Ollama", "Whisper.cpp", "FFmpeg", "Playwright", "Cypress", "Git"]}
        ].map(group => <Reveal key={group.title}><article className="skill-card"><span className="skill-number">/{group.number}</span><h3>{group.title}</h3><p>{group.text}</p><div className="skill-tags">{group.tools.map(tool => <span key={tool}>{tool}</span>)}</div></article></Reveal>)}</div></section>

        <section className="contact-section shell" id="contact" aria-labelledby="contact-title"><Reveal><p className="eyebrow">05 / WHAT’S NEXT?</p><div className="contact-heading"><h2 id="contact-title">Good things start<br/>with a <em>conversation.</em></h2><span className="contact-star" aria-hidden="true">✳</span></div><div className="contact-bottom"><div><p>Have a project in mind or a role worth exploring?<br/>I’d love to hear about it.</p><a className="email-link" href={`mailto:${email}`}>{email}</a></div><div className="contact-actions"><a className="button primary" href={`mailto:${email}`}>Say hello</a><button className="button outline" onClick={copyEmail}>{copied ? "Email copied ✓" : "Copy email"}</button><span className="copy-status" role="status">{copyError ? "Please select and copy the email address above." : copied ? "Copied to clipboard." : ""}</span></div></div></Reveal></section>
      </main>
      <footer className="footer shell"><div><a className="brand" href="#home" aria-label="Back to top">n<span>i</span><b>.</b></a><span>© {new Date().getFullYear()} Neeshan Ismath</span></div><div className="footer-links"><a href={github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><button onClick={() => setPaused(!paused)} aria-pressed={paused}>{paused ? "Enable motion" : "Pause motion"}</button><a href="#home">Back to top</a></div></footer>
      <dialog ref={dialog} className="project-dialog" aria-labelledby="dialog-title" onClose={() => setSelected(null)} onClick={e => { if (e.target === e.currentTarget) closeProject(); }}>
        {selected && <div className="dialog-content"><div className="dialog-top"><span className="eyebrow">PROJECT / {selected.number}</span><button className="close-button" onClick={closeProject} aria-label="Close project">✕</button></div><p className="project-kicker">{selected.label}</p><h2 id="dialog-title">{selected.title}<em>.</em></h2><p className="dialog-role">{selected.role}</p><p className="dialog-overview">{selected.overview}</p><div className="tags">{selected.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{selected.id === "clip-studio" && <Image src="/images/clip-studio-workspace.png" alt="Clip Studio workspace with video upload, link import, and clip export workflow" width={2559} height={1271} className="dialog-image"/>}<div className="case-details">{selected.details.map((detail,i) => <section key={detail.title}><span>0{i+1}</span><div><h3>{detail.title}</h3><p>{detail.text}</p></div></section>)}</div>{selected.note && <p className="project-note">{selected.note}</p>}<div className="dialog-actions">{selected.source && <a className="button primary" href={selected.source} target="_blank" rel="noopener noreferrer">View repository</a>}<a className="button outline" href={`mailto:${email}?subject=${encodeURIComponent(`Let’s talk about ${selected.title}`)}`}>Discuss this project</a></div></div>}
      </dialog>
    </div>
  </MotionConfig>;
}

