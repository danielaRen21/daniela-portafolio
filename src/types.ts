export type Language = 'en' | 'es'

export interface Project {
  number: string
  title: string
  category: string
  description: string
  stack: string[]
  status: string
  link?: string
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  summary: Record<Language, string>
  responsibilities: Record<Language, string[]>
  technologies: string[]
}
