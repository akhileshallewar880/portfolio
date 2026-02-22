import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, SafeHtmlPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  stats = [
    { value: '3.5+', label: 'Years of Experience', icon: '🏆' },
    { value: '2', label: 'Major Projects', icon: '🚀' },
    { value: '10+', label: 'Technologies Mastered', icon: '⚡' },
    { value: '1', label: 'Company: Cognizant', icon: '🏢' }
  ];

  whatIDo = [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
      title: 'Full Stack Development',
      desc: 'Building end-to-end applications with .NET Core backends and Angular frontends — clean architecture, SOLID principles, RESTful APIs.'
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
      title: 'Cloud & Azure',
      desc: 'Designing and deploying cloud-native solutions on Microsoft Azure — Azure SQL, App Services, Functions, and CI/CD pipelines.'
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
      title: 'GenAI & RAG Systems',
      desc: 'Building intelligent applications with LangChain, LangGraph, and RAG pipelines — integrating GPT-4, vector stores, and agentic workflows.'
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
      title: 'DevOps & Docker',
      desc: 'Containerizing applications with Docker, setting up deployment pipelines, and managing cloud infrastructure for reliable delivery.'
    }
  ];
}
