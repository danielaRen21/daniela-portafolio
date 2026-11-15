import type { Language, Project } from './types'

export const copy: Record<Language, {
  nav: { about: string; work: string; experience: string; contact: string }
  availability: string
  greeting: string
  role: string
  intro: string
  viewWork: string
  contactMe: string
  aboutLabel: string
  aboutTitle: string
  aboutText: string
  stackLabel: string
  stackTitle: string
  workLabel: string
  workTitle: string
  workText: string
  experienceLabel: string
  experienceTitle: string
  contactLabel: string
  contactTitle: string
  contactText: string
  email: string
  footer: string
  projects: Project[]
}> = {
  en: {
    nav: { about: 'About', work: 'Projects', experience: 'Experience', contact: 'Contact' },
    availability: 'Open to opportunities',
    greeting: "Hello, I'm Daniela",
    role: 'Full Stack Developer',
    intro: 'I build reliable web applications, intuitive interfaces, and solutions that make complex processes simpler.',
    viewWork: 'Explore my work',
    contactMe: 'Get in touch',
    aboutLabel: 'A little about me',
    aboutTitle: 'I turn ideas into useful digital experiences.',
    aboutText: 'I am a Software Developer from Durango, Mexico, with experience building and maintaining web applications. I enjoy working across the stack — from crafting responsive interfaces to developing APIs and integrating services.',
    stackLabel: 'Tools I work with',
    stackTitle: 'My technology stack',
    workLabel: 'Selected work',
    workTitle: 'Projects & experience',
    workText: 'A selection of products and systems I have contributed to. Some professional projects are represented with sanitized descriptions and demo concepts.',
    experienceLabel: 'Where I have worked',
    experienceTitle: 'Professional experience',
    contactLabel: 'Let’s connect',
    contactTitle: 'Have a project in mind?',
    contactText: 'I’m open to Full Stack and Software Developer opportunities, including remote roles.',
    email: 'Send me an email',
    footer: 'Designed and built with React, TypeScript & care.',
    projects: [
      { number: '01', title: 'University Management Platform', category: 'Professional experience', description: 'Web modules for students and administrators, including course registration, payment flows, events, and internal management tools.', stack: ['React', 'JavaScript', 'PHP', 'MySQL', 'REST APIs'], status: 'Case study in progress' },
      { number: '02', title: 'Payments & E-invoicing', category: 'Integrations', description: 'Integration workflows for payment references and CFDI invoicing, including batch processing and external service communication.', stack: ['PHP', 'MySQL', 'cURL', 'REST APIs'], status: 'Case study in progress' },
      { number: '03', title: 'AI Document Search', category: 'Bootcamp project', description: 'A document-based information retrieval concept. The public case study will include only the tools and implementation details I can verify.', stack: ['Python', 'AI', 'Document processing'], status: 'Details to confirm' },
    ],
  },
  es: {
    nav: { about: 'Sobre mí', work: 'Proyectos', experience: 'Experiencia', contact: 'Contacto' },
    availability: 'Abierta a oportunidades',
    greeting: 'Hola, soy Daniela',
    role: 'Desarrolladora Full Stack',
    intro: 'Desarrollo aplicaciones web confiables, interfaces intuitivas y soluciones que simplifican procesos complejos.',
    viewWork: 'Ver proyectos',
    contactMe: 'Contactarme',
    aboutLabel: 'Un poco sobre mí',
    aboutTitle: 'Transformo ideas en experiencias digitales útiles.',
    aboutText: 'Soy desarrolladora de software de Durango, México, con experiencia en desarrollo y mantenimiento de aplicaciones web. Me gusta trabajar en distintas capas: desde interfaces responsivas hasta APIs e integraciones de servicios.',
    stackLabel: 'Herramientas que utilizo',
    stackTitle: 'Mi stack tecnológico',
    workLabel: 'Trabajo seleccionado',
    workTitle: 'Proyectos y experiencia',
    workText: 'Una selección de productos y sistemas en los que he colaborado. Algunos proyectos profesionales se presentan con descripciones adaptadas y demostraciones independientes.',
    experienceLabel: 'Mi trayectoria',
    experienceTitle: 'Experiencia profesional',
    contactLabel: 'Conectemos',
    contactTitle: '¿Tienes un proyecto en mente?',
    contactText: 'Estoy abierta a oportunidades como Full Stack Developer o Software Developer, incluyendo puestos remotos.',
    email: 'Enviarme un correo',
    footer: 'Diseñado y desarrollado con React, TypeScript y dedicación.',
    projects: [
      { number: '01', title: 'Plataforma de gestión universitaria', category: 'Experiencia profesional', description: 'Módulos web para estudiantes y administradores: inscripción a cursos, flujos de pago, eventos y herramientas de gestión interna.', stack: ['React', 'JavaScript', 'PHP', 'MySQL', 'REST APIs'], status: 'Caso de estudio en preparación' },
      { number: '02', title: 'Pagos y facturación electrónica', category: 'Integraciones', description: 'Flujos de integración para generar referencias de pago y emitir CFDI, incluyendo procesamiento por lotes y comunicación con servicios externos.', stack: ['PHP', 'MySQL', 'cURL', 'REST APIs'], status: 'Caso de estudio en preparación' },
      { number: '03', title: 'Búsqueda de documentos con IA', category: 'Proyecto de bootcamp', description: 'Concepto de recuperación de información a partir de documentos. El caso público incluirá únicamente herramientas y detalles de implementación que podamos confirmar.', stack: ['Python', 'IA', 'Procesamiento de documentos'], status: 'Detalles por confirmar' },
    ],
  },
}

export const skills = [
  { group: 'FRONTEND', items: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap'] },
  { group: 'BACKEND', items: ['PHP', 'Python', 'REST APIs', 'Node.js'] },
  { group: 'DATABASES', items: ['MySQL', 'SQL'] },
  { group: 'TOOLS & CLOUD', items: ['Git', 'GitHub', 'AWS', 'cURL'] },
]
