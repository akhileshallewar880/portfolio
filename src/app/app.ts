import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { RideShowcaseComponent } from './components/ride-showcase/ride-showcase.component';
import { TradeShowcaseComponent } from './components/trade-showcase/trade-showcase.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    RideShowcaseComponent,
    TradeShowcaseComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-about />
      <app-skills />
      <app-ride-showcase />
      <app-trade-showcase />
      <app-projects />
      <app-experience />
      <app-contact />
    </main>
    <app-footer />
  `,
  styles: [`
    main { display: block; }
  `]
})
export class App {}
