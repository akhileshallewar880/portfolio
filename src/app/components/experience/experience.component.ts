import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Cognizant Technology Solutions',
      role: 'Software Engineer',
      period: 'Oct 2024 – Present',
      duration: 'Current',
      location: 'Hyderabad, India',
      type: 'Full-time',
      logo: 'CTS',
      color: '#1e40af',
      current: true,
      responsibilities: [
        'Building Solution Zone — Cognizant\'s internal AI productivity platform serving ~18,000 daily active users across BID management and CIS teams.',
        'Built QnC Workbench from scratch: an RFP document Q&A tool using RAG architecture (Python, LangChain, GPT-4, vector database, Azure Cognitive Services) — auto-generates questions from uploaded RFPs and answers user queries via semantic search.',
        'Built Ticket Merge from scratch: a .NET Core data processing engine handling 1 GB+ CSV/XLSX files in under 120 seconds using parallel programming and multi-threading — replaced a system that crashed on large uploads.',
        'Architected Analyst Arena — the platform\'s flagship ML analytics feature — CIS ticket data processed by a Python XGBoost + SVM pipeline, surfaced in an interactive Angular dashboard.',
        'Improved backend API performance by 40% through SQL stored procedure optimisation and .NET Core method refactoring.',
        'Led 8-person team through migration from monolithic to micro-frontend Angular architecture.',
        'Set up automated CI pipeline using GitHub Actions + SonarQube for code quality gates; containerised workloads with Docker.',
        'Maintained 80%+ xUnit unit and integration test coverage; managing 2 junior developers.'
      ],
      techUsed: ['.NET 8', 'Angular', 'Python', 'LangChain', 'GPT-4', 'XGBoost/SVM', 'Azure', 'SQL Server', 'Docker', 'GitHub Actions']
    },
    {
      company: 'Cognizant Technology Solutions',
      role: 'Junior Software Engineer',
      period: 'Aug 2023 – Oct 2024',
      duration: '1 Yr 2 Mos',
      location: 'Hyderabad, India',
      type: 'Full-time',
      logo: 'CTS',
      color: '#1e40af',
      current: false,
      responsibilities: [
        'Contributed to Solution Zone platform development and core API infrastructure for a banking client.',
        'Designed and built a .NET Core Web API from scratch: OAuth2 authentication, role-based access control (RBAC), database schema design, and secure REST endpoints.',
        'Developed a document processing engine for merging multi-format files (PDF, DOCX, XLSX) using parallel programming in .NET Core.',
        'Built and maintained Angular frontend components with state management and performance optimisation.',
        'Achieved 80%+ xUnit test coverage across owned modules.',
        'Worked directly with Business Analysts and end users to translate requirements into scalable solutions with minimal defects.'
      ],
      techUsed: ['.NET Core', 'C#', 'Angular', 'SQL Server', 'OAuth2', 'RBAC', 'Entity Framework', 'xUnit']
    },
    {
      company: 'Cognizant Technology Solutions',
      role: 'Software Engineer Trainee',
      period: 'Aug 2022 – Aug 2023',
      duration: '1 Year',
      location: 'Hyderabad, India',
      type: 'Full-time',
      logo: 'CTS',
      color: '#1e40af',
      current: false,
      responsibilities: [
        'Completed Cognizant\'s enterprise training programme covering .NET Core, Angular, SQL Server, and Agile practices.',
        'Built initial Angular components and REST API integrations for client-facing modules.',
        'Applied SOLID principles and design patterns (Repository Pattern) within a 60+ member cross-functional team.',
        'Started contributing to the production codebase within the first 3 months of joining.'
      ],
      techUsed: ['.NET Core', 'Angular', 'C#', 'SQL Server', 'REST APIs', 'Agile/Scrum']
    }
  ];

  education = {
    degree: 'Bachelor of Engineering',
    field: 'Computer Science & Engineering',
    institution: 'Visvesvaraya Technological University',
    period: '2018 – 2022',
    location: 'India'
  };

  certifications = [
    { name: 'Microsoft Azure Fundamentals (AZ-900)', issuer: 'Microsoft', color: '#0078d4' },
    { name: 'GitHub Actions CI/CD', issuer: 'Udemy', color: '#ec4899' },
    { name: 'Prompt Engineering in Angular & .NET', issuer: 'Cognizant', color: '#1e40af' },
    { name: 'Hands-on Guide to Modern AI', issuer: 'Udemy', color: '#f59e0b' }
  ];
}
