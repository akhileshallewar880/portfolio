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
    { value: '18K+', label: 'Daily Active Users Served', icon: '👥' },
    { value: '15+', label: 'Technologies Mastered', icon: '⚡' },
    { value: '2', label: 'Open Source Projects', icon: '🚀' }
  ];

  whatIDo = [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
      title: 'Full Stack Development',
      desc: 'Building end-to-end enterprise applications with .NET Core backends and Angular frontends — currently powering Solution Zone, Cognizant\'s internal AI platform used by ~18,000 employees daily.'
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
      title: 'GenAI & RAG Systems',
      desc: 'Building production-grade intelligent systems with LangChain, GPT-4, and RAG pipelines — from RFP document Q&A tools to agentic workflows over enterprise data.'
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
      title: 'ML & Analytics Pipelines',
      desc: 'Designing ML data pipelines with XGBoost and SVM for classification tasks, and building real-time algorithmic trading systems powered by GPT-4 and technical analysis.'
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
      title: 'Cloud & DevOps',
      desc: 'Deploying cloud-native solutions on Microsoft Azure, containerising workloads with Docker, and automating CI/CD with GitHub Actions + SonarQube for quality-gated releases.'
    }
  ];
}
