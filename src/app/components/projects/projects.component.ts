import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, SafeHtmlPipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      name: 'VanYatra',
      subtitle: 'Ride Sharing Application',
      tagline: 'Connecting passengers & drivers with real-time tracking',
      description: `A full-stack ride-sharing platform targeting underserved rural-to-urban corridors. VanYatra features
        real-time driver location tracking via SignalR, transparent pricing for passengers, optimized ride dispatch for
        drivers, and a comprehensive admin dashboard with live fleet maps and analytics.`,
      highlights: [
        'Real-time GPS tracking with SignalR WebSocket hubs',
        'JWT secured endpoints with Role-Based Access Control',
        'Admin dashboard with fl_chart analytics & live fleet map',
        'Cross-platform: Flutter mobile (passenger & driver) + Flutter Web admin',
        'Hosted on Microsoft Azure with Azure SQL backend'
      ],
      stack: ['.NET 8', 'ASP.NET Core', 'SignalR', 'Flutter', 'Azure SQL', 'Entity Framework', 'JWT/RBAC', 'Azure'],
      github: 'https://github.com/akhileshallewar880/RideSharingApplication',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      gradientLight: 'linear-gradient(135deg, rgba(102,126,234,.06), rgba(118,75,162,.04))',
      accentColor: '#667eea',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
      label: 'Featured Project',
      featured: true
    },
    {
      id: 2,
      name: 'VanTrade',
      subtitle: 'AI-Powered AutoTrading App',
      tagline: 'GPT-4 driven algorithmic trading on NSE markets',
      description: `An intelligent algorithmic trading platform that scans the entire NSE equity market, uses GPT-4 to
        analyze technical indicators (RSI, MACD, Bollinger Bands), and automatically executes trades through
        the Zerodha Kite Connect API — with smart position sizing and risk management.`,
      highlights: [
        'Multi-factor stock screener across entire NSE equity market',
        'GPT-4 analysis of RSI, MACD & Bollinger Bands for trade signals',
        'Auto entry, stop-loss & target with Risk:Reward ratios',
        'One-click trade confirmation via Flutter mobile app',
        'Real-time P&L dashboard and GTT (Good-Till-Trigger) support'
      ],
      stack: ['Python', 'FastAPI', 'GPT-4', 'LangChain', 'Flutter', 'Zerodha Kite API', 'YFinance', 'Pandas/NumPy'],
      github: 'https://github.com/akhileshallewar880/AutoTradingApp',
      gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      gradientLight: 'linear-gradient(135deg, rgba(17,153,142,.06), rgba(56,239,125,.04))',
      accentColor: '#11998e',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
      label: 'GenAI Project',
      featured: true
    }
  ];
}
