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
        { name: '.NET Core / ASP.NET Core', level: 92 },
        { name: 'C# & Entity Framework', level: 90 },
        { name: 'Python / FastAPI', level: 75 },
        { name: 'REST APIs & SignalR', level: 85 },
        { name: 'SQL Server', level: 83 }
      ]
    },
    {
      label: 'Frontend',
      tag: '// frontend',
      color: '#0ea5e9',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      skills: [
        { name: 'Angular (v14–21)', level: 90 },
        { name: 'TypeScript', level: 87 },
        { name: 'HTML5 / SCSS', level: 90 },
        { name: 'RxJS / NgRx', level: 76 },
        { name: 'Flutter / Dart', level: 78 }
      ]
    },
    {
      label: 'Cloud & DevOps',
      tag: '// cloud & devops',
      color: '#10b981',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
      skills: [
        { name: 'Microsoft Azure', level: 82 },
        { name: 'Docker', level: 78 },
        { name: 'GitHub Actions / CI-CD', level: 80 },
        { name: 'Azure SQL & App Service', level: 78 },
        { name: 'Git / GitHub', level: 92 }
      ]
    },
    {
      label: 'GenAI & ML',
      tag: '// genai & ml',
      color: '#f59e0b',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`,
      skills: [
        { name: 'LangChain / RAG Pipelines', level: 80 },
        { name: 'GPT-4 & Prompt Engineering', level: 82 },
        { name: 'XGBoost / SVM (ML)', level: 70 },
        { name: 'Vector Databases', level: 68 },
        { name: 'Azure Cognitive Services', level: 72 }
      ]
    }
  ];

  techBadges = [
    '.NET Core', 'C#', 'Angular', 'Python', 'Microsoft Azure',
    'ASP.NET Core', 'Entity Framework', 'SignalR', 'TypeScript', 'RxJS',
    'Flutter', 'Dart', 'Docker', 'GitHub Actions', 'Azure SQL',
    'LangChain', 'GPT-4', 'RAG', 'FastAPI', 'XGBoost',
    'SQL Server', 'REST APIs', 'JWT Auth', 'RBAC', 'SonarQube'
  ];
}
