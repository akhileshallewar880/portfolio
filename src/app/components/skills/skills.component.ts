import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, SafeHtmlPipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  categories = [
    {
      label: 'Backend',
      tag: '// backend',
      color: '#6366f1',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
      skills: [
        { name: '.NET 8 / ASP.NET Core', level: 90 },
        { name: 'C# & Entity Framework', level: 88 },
        { name: 'REST APIs & SignalR', level: 85 },
        { name: 'Python / FastAPI', level: 72 },
        { name: 'SQL Server', level: 82 }
      ]
    },
    {
      label: 'Frontend',
      tag: '// frontend',
      color: '#0ea5e9',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      skills: [
        { name: 'Angular (v14–21)', level: 88 },
        { name: 'TypeScript', level: 85 },
        { name: 'Flutter / Dart', level: 78 },
        { name: 'HTML5 / SCSS', level: 90 },
        { name: 'RxJS / NgRx', level: 75 }
      ]
    },
    {
      label: 'Cloud & DevOps',
      tag: '// cloud',
      color: '#10b981',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
      skills: [
        { name: 'Microsoft Azure', level: 80 },
        { name: 'Azure SQL & App Service', level: 78 },
        { name: 'Docker', level: 75 },
        { name: 'CI/CD Pipelines', level: 72 },
        { name: 'Git / GitHub', level: 90 }
      ]
    },
    {
      label: 'GenAI & AI',
      tag: '// genai',
      color: '#f59e0b',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12"/><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="1"/></svg>`,
      skills: [
        { name: 'GenAI & LLMs (GPT-4)', level: 78 },
        { name: 'LangChain / LangGraph', level: 75 },
        { name: 'RAG Architectures', level: 72 },
        { name: 'Prompt Engineering', level: 80 },
        { name: 'Vector Databases', level: 65 }
      ]
    }
  ];

  techBadges = [
    '.NET 8', 'ASP.NET Core', 'C#', 'Entity Framework', 'SignalR',
    'Angular', 'TypeScript', 'RxJS', 'Flutter', 'Dart',
    'Azure', 'Docker', 'Azure SQL', 'CI/CD',
    'LangChain', 'LangGraph', 'RAG', 'GPT-4', 'FastAPI', 'Python',
    'SQL Server', 'REST APIs', 'JWT Auth', 'RBAC', 'Git'
  ];
}
