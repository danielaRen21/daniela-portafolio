import { useEffect, useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import type { ExperienceItem, Language } from '../types'

interface ExperienceProps {
  items: ExperienceItem[]
  language: Language
}

interface ExperienceModalProps {
  item: ExperienceItem
  language: Language
  onClose: () => void
}

function ExperienceModal({ item, language, onClose }: ExperienceModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const isEnglish = language === 'en'

  return (
    <div className="experience-modal-backdrop" onMouseDown={onClose}>
      <section
        className="experience-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="experience-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="experience-modal-close" onClick={onClose} aria-label={isEnglish ? 'Close details' : 'Cerrar detalles'}>
          <X size={19} />
        </button>
        <p className="eyebrow">{isEnglish ? 'WORK EXPERIENCE' : 'EXPERIENCIA PROFESIONAL'}</p>
        <h3 id="experience-modal-title">{item.role}</h3>
        <div className="experience-modal-meta"><strong>{item.company}</strong><span>{item.period}</span></div>
        <p className="experience-modal-summary">{item.summary[language]}</p>
        <h4>{isEnglish ? 'Responsibilities' : 'Responsabilidades'}</h4>
        <ul className="experience-modal-list">
          {item.responsibilities[language].map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
        </ul>
        <h4>{isEnglish ? 'Technologies' : 'Tecnologías'}</h4>
        <div className="experience-modal-tags">
          {item.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
      </section>
    </div>
  )
}

export default function Experience({ items, language }: ExperienceProps) {
  const [selected, setSelected] = useState<ExperienceItem | null>(null)
  const isEnglish = language === 'en'

  return (
    <>
      <div className="experience-list">
        {items.map((item, index) => (
          <button className="experience-item" key={item.company} onClick={() => setSelected(item)}>
            <span className="experience-index">0{index + 1}</span>
            <span className="experience-main">
              <strong>{item.role}</strong>
              <span className="experience-company">{item.company}</span>
              <small>{item.summary[language]}</small>
            </span>
            <span className="experience-item-side"><time>{item.period}</time><ArrowUpRight size={18} /></span>
          </button>
        ))}
      </div>
      {selected && <ExperienceModal item={selected} language={language} onClose={() => setSelected(null)} />}
      <span className="sr-only">{isEnglish ? 'Select a role to view details.' : 'Selecciona un puesto para ver los detalles.'}</span>
    </>
  )
}

