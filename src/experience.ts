import type { ExperienceItem } from './types'

export const experiences: ExperienceItem[] = [
  {
    company: 'Virtua MX',
    role: 'Full Stack Developer',
    period: 'Aug 2022 — Present',
    summary: {
      en: 'Development and maintenance of web systems for educational and administrative processes.',
      es: 'Desarrollo y mantenimiento de sistemas web para procesos educativos y administrativos.',
    },
    responsibilities: {
      en: [
        'Developed and maintained more than 20 modules and screens for university-related systems.',
        'Worked on student-facing features for course information, payments and events, as well as administrative modules for courses, students and payments.',
        'Built and maintained frontend features with JavaScript and React, including Redux Toolkit and Bootstrap.',
        'Developed PHP and MySQL REST APIs and integrated external services using cURL, including payment-reference workflows.',
        'Worked on separate integrations for BBVA payments and CFDI invoicing, and maintained internal legacy systems.',
      ],
      es: [
        'Desarrollo y mantenimiento de más de 20 módulos y pantallas para sistemas relacionados con servicios universitarios.',
        'Trabajo en funcionalidades para estudiantes: consulta de cursos, pagos y eventos; además de módulos administrativos para cursos, alumnos y pagos.',
        'Desarrollo y mantenimiento de interfaces con JavaScript y React, incluyendo Redux Toolkit y Bootstrap.',
        'Desarrollo de APIs REST con PHP y MySQL e integración de servicios externos mediante cURL, incluyendo flujos de generación de referencias de pago.',
        'Trabajo en integraciones independientes para pagos BBVA y facturación CFDI, además de mantenimiento de sistemas legacy internos.',
      ],
    },
    technologies: ['JavaScript', 'React', 'Redux Toolkit', 'PHP', 'MySQL', 'REST APIs', 'Bootstrap', 'cURL', 'jQuery (legacy)'],
  },
  {
    company: 'BillerTicket',
    role: 'Frontend Developer · Angular',
    period: 'Jun 2022 — Sep 2022',
    summary: {
      en: 'Frontend development using Angular.',
      es: 'Desarrollo frontend utilizando Angular.',
    },
    responsibilities: {
      en: ['Contributed to frontend development using Angular.'],
      es: ['Colaboración en el desarrollo frontend utilizando Angular.'],
    },
    technologies: ['Angular'],
  },
  {
    company: 'QUALITY CODE',
    role: 'Frontend Developer · React',
    period: 'Oct 2021 — Feb 2022',
    summary: {
      en: 'Frontend development for a web project using React.',
      es: 'Desarrollo frontend para un proyecto web utilizando React.',
    },
    responsibilities: {
      en: ['Developed frontend features using React.'],
      es: ['Desarrollo de funcionalidades frontend utilizando React.'],
    },
    technologies: ['React'],
  },
  {
    company: 'Guadiana Software',
    role: 'Software Developer Intern',
    period: 'Aug 2020 — May 2021',
    summary: {
      en: 'Software development internship focused on backend development and web technologies.',
      es: 'Prácticas de desarrollo de software enfocadas en backend y tecnologías web.',
    },
    responsibilities: {
      en: [
        'Worked on CRUD functionality and backend components with Spring Boot.',
        'Used JPA and Hibernate for data persistence and worked with Vue on the frontend.',
        'Gained hands-on experience with AWS EC2, SSL configuration and Amazon RDS for MySQL.',
      ],
      es: [
        'Trabajo en funcionalidades CRUD y componentes backend con Spring Boot.',
        'Uso de JPA y Hibernate para persistencia de datos y Vue en frontend.',
        'Experiencia práctica con AWS EC2, configuración SSL y Amazon RDS para MySQL.',
      ],
    },
    technologies: ['Java', 'Spring Boot', 'JPA', 'Hibernate', 'Vue', 'AWS EC2', 'Amazon RDS', 'MySQL'],
  },
]
