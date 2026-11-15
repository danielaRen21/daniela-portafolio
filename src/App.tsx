import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, Sparkles, Globe2 } from 'lucide-react'
import { copy, skills } from './content'
import type { Language } from './types'
import { experiences } from './experience'
import Experience from './components/Experience'

function App() {
  const [language, setLanguage] = useState<Language>('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = copy[language]

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">D</span><span>daniela<span className="muted">.dev</span></span></a>
        <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#about" onClick={closeMenu}>{t.nav.about}</a>
          <a href="#work" onClick={closeMenu}>{t.nav.work}</a>
          <a href="#experience" onClick={closeMenu}>{t.nav.experience}</a>
          <a href="#contact" onClick={closeMenu}>{t.nav.contact}</a>
          <button className="language-switch" onClick={() => setLanguage(language === 'en' ? 'es' : 'en')} aria-label="Change language"><Globe2 size={15} /> {language.toUpperCase()}</button>
        </nav>
      </header>

      <main id="home">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="availability"><span className="pulse" />{t.availability}</div>
            <p className="eyebrow">{t.greeting}</p>
            <h1>{t.role}<span className="accent">.</span></h1>
            <p className="hero-description">{t.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">{t.viewWork}<ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="#contact">{t.contactMe}<ArrowUpRight size={17} /></a>
            </div>
            <div className="social-links">
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <span className="social-caption">Durango, Mexico · Remote friendly</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Decorative code illustration">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="code-window">
              <div className="window-top"><span /><span /><span /><small>developer.tsx</small></div>
              <div className="code-content">
                <p><i>01</i> <b>const</b> developer = {'{'}</p>
                <p><i>02</i> &nbsp; name: <em>'Daniela'</em>,</p>
                <p><i>03</i> &nbsp; role: <em>'Full Stack'</em>,</p>
                <p><i>04</i> &nbsp; passion: <em>'Building'</em>,</p>
                <p><i>05</i> &nbsp; learning: <em>'Always'</em></p>
                <p><i>06</i> {'}'}</p>
                <p className="code-cursor"><i>07</i> <span>▍</span></p>
              </div>
            </div>
            <div className="floating-chip chip-react"><Code2 size={15} /> React</div>
            <div className="floating-chip chip-spark"><Sparkles size={15} /> Creative problem solving</div>
          </div>
          <a className="scroll-cue" href="#about"><span>{language === 'en' ? 'SCROLL TO EXPLORE' : 'DESLIZA PARA EXPLORAR'}</span><ArrowDownRight size={16} /></a>
        </section>

        <section className="section-wrap content-section" id="about">
          <div className="section-heading"><span className="section-kicker">01 / {t.aboutLabel}</span><span className="heading-line" /></div>
          <div className="about-grid">
            <h2>{t.aboutTitle}</h2>
            <div><p className="section-description">{t.aboutText}</p><div className="about-note"><span className="note-dot" /> {language === 'en' ? 'Curious by nature. Focused on building things that work.' : 'Curiosa por naturaleza. Enfocada en crear soluciones que funcionan.'}</div></div>
          </div>
        </section>

        <section className="section-wrap content-section" id="stack">
          <div className="section-heading"><span className="section-kicker">02 / {t.stackLabel}</span><span className="heading-line" /></div>
          <h2 className="section-title">{t.stackTitle}<span className="accent">.</span></h2>
          <div className="skills-grid">
            {skills.map((group) => <div className="skill-group" key={group.group}><p className="skill-group-title">{group.group}</p><div className="skill-tags">{group.items.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}</div></div>)}
          </div>
        </section>

        <section className="section-wrap content-section" id="work">
          <div className="section-heading"><span className="section-kicker">03 / {t.workLabel}</span><span className="heading-line" /></div>
          <div className="work-heading"><h2 className="section-title">{t.workTitle}<span className="accent">.</span></h2><p className="section-description">{t.workText}</p></div>
          <div className="projects-list">
            {t.projects.map((project) => <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-main"><p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="project-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
              <div className="project-side"><span className="project-status">{project.status}</span><ArrowUpRight size={22} /></div>
            </article>)}
          </div>
        </section>

        <section className="section-wrap content-section" id="experience">
          <div className="section-heading"><span className="section-kicker">04 / {t.experienceLabel}</span><span className="heading-line" /></div>
          <h2 className="section-title">{t.experienceTitle}<span className="accent">.</span></h2>
          <Experience items={experiences} language={language} />
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="section-heading"><span className="section-kicker">05 / {t.contactLabel}</span><span className="heading-line" /></div>
          <div className="contact-panel"><div><p className="eyebrow">{t.contactLabel}</p><h2>{t.contactTitle}<span className="accent">.</span></h2><p>{t.contactText}</p></div><a className="button button-primary" href="mailto:hello@example.com">{t.email}<Mail size={17} /></a></div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">D</span><span>daniela<span className="muted">.dev</span></span></a><p>© {new Date().getFullYear()} Daniela Renteria. {t.footer}</p><a className="back-top" href="#home">BACK TO TOP ↑</a></footer>
    </div>
  )
}

export default App
