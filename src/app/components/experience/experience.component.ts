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
      role: 'Full Stack Developer',
      period: 'Aug 2022 – Present',
      duration: '3.5+ Years',
      location: 'Hyderabad, India',
      type: 'Full-time',
      logo: 'CTS',
      color: '#1e40af',
      current: true,
      responsibilities: [
        'Architected and developed enterprise-grade web applications using .NET 8 (ASP.NET Core Minimal APIs) and Angular, serving thousands of users with high availability.',
        'Built and maintained RESTful APIs and real-time communication layers using SignalR, enabling live data streaming and instant notifications across client applications.',
        'Designed and optimized relational database schemas using Entity Framework Core with Azure SQL, improving query performance by applying proper indexing and caching strategies.',
        'Deployed and managed cloud infrastructure on Microsoft Azure — including Azure App Service, Azure SQL, and CI/CD pipelines — ensuring 99.9% uptime and seamless deployments.',
        'Implemented JWT-based authentication with Role-Based Access Control (RBAC), securing endpoints across multi-tenant enterprise applications.',
        'Collaborated in Agile/Scrum sprints, conducted code reviews, mentored junior developers, and contributed to technical documentation.',
        'Explored GenAI integrations using LangChain and LangGraph — building internal PoC tools for document summarization and intelligent Q&A over enterprise data.'
      ],
      techUsed: ['.NET 8', 'Angular', 'Azure', 'SQL Server', 'SignalR', 'Docker', 'LangChain']
    }
  ];

  education = {
    degree: 'Bachelor of Engineering',
    field: 'Computer Science & Engineering',
    institution: 'Your College Name', // Update with actual college
    period: '2018 – 2022',
    location: 'India'
  };

  certifications = [
    { name: 'Microsoft Azure Fundamentals (AZ-900)', issuer: 'Microsoft', color: '#0078d4' },
    { name: 'Full Stack .NET Developer', issuer: 'Cognizant', color: '#1e40af' },
    { name: 'GenAI & LangChain Practitioner', issuer: 'Self-Study / Projects', color: '#7c3aed' }
  ];
}
