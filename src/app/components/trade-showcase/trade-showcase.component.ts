import {
  Component,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TradeSlide {
  id: number;
  screen: string;
  image: string;
  tag: string;
  headline: string;
  subline: string;
  description: string;
  highlights: string[];
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
  chipIcon: string;
  chipLabel: string;
}

@Component({
  selector: 'app-trade-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trade-showcase.component.html',
  styleUrl: './trade-showcase.component.scss'
})
export class TradeShowcaseComponent implements AfterViewInit, OnDestroy {
  @ViewChild('tradeSection') tradeSection!: ElementRef<HTMLElement>;

  activeIndex = signal(0);
  scrollProgress = signal(0);

  private scrollHandler = () => this.onWindowScroll();

  slides: TradeSlide[] = [
    {
      id: 0,
      screen: 'Splash Screen',
      image: 'assets/vantrade_splash_screen.jpeg',
      tag: '// launching vantrade',
      headline: 'VanTrade',
      subline: 'AI Trades. You Win.',
      description: 'The opening screen of an AI-powered algorithmic trading engine. VanTrade combines GPT-4 intelligence with lightning-fast order execution on the NSE — right from your phone.',
      highlights: ['Instant cold-start boot', 'Brand identity meets FinTech', 'Sets the stage for intelligent trading'],
      accentColor: '#10b981',
      gradientFrom: '#064e3b',
      gradientTo: '#10b981',
      chipIcon: '⚡',
      chipLabel: 'FastAPI Backend'
    },
    {
      id: 1,
      screen: 'Home Screen',
      image: 'assets/vantrade_home_screen.jpeg',
      tag: '// trading dashboard',
      headline: 'Your Trading',
      subline: 'Command Center',
      description: 'The home dashboard gives you a complete view of your trading activity — P&L summary, active positions, recent trades, and quick access to the AI analysis engine.',
      highlights: ['Real-time P&L dashboard', 'Active positions overview', 'Quick-launch AI analysis engine'],
      accentColor: '#0ea5e9',
      gradientFrom: '#0c4a6e',
      gradientTo: '#0ea5e9',
      chipIcon: '📊',
      chipLabel: 'Live P&L Dashboard'
    },
    {
      id: 2,
      screen: 'Generate Analysis — Step 1',
      image: 'assets/vantrade_generate_analysis_screen_1.jpeg',
      tag: '// configure your scan',
      headline: 'Scan the',
      subline: 'Entire NSE Market',
      description: 'Configure your multi-factor stock screener. Set volume thresholds, momentum filters, and volatility parameters — then unleash a scan across the entire NSE equity universe.',
      highlights: ['Multi-factor screener setup', 'Volume + Momentum + Volatility filters', 'NSE full-market scan scope'],
      accentColor: '#7c3aed',
      gradientFrom: '#4c1d95',
      gradientTo: '#7c3aed',
      chipIcon: '🔍',
      chipLabel: 'NSE Stock Screener'
    },
    {
      id: 3,
      screen: 'Generate Analysis — Step 2',
      image: 'assets/vantrade_generate_analysis_screen_2.jpeg',
      tag: '// configure gpt-4 analysis',
      headline: 'Set Your',
      subline: 'AI Parameters',
      description: 'Fine-tune what GPT-4 will analyze — choose which technical indicators (RSI, MACD, Bollinger Bands) to evaluate, define your risk tolerance, and set target Risk:Reward ratios.',
      highlights: ['GPT-4 indicator selection (RSI/MACD/BB)', 'Risk:Reward ratio configuration', 'Stop-loss & target auto-calculation mode'],
      accentColor: '#f59e0b',
      gradientFrom: '#78350f',
      gradientTo: '#f59e0b',
      chipIcon: '🧠',
      chipLabel: 'GPT-4 Configuration'
    },
    {
      id: 4,
      screen: 'Analysis In Progress',
      image: 'assets/vantrade_analysis_in_progress_screen.jpeg',
      tag: '// gpt-4 at work',
      headline: 'AI Engine',
      subline: 'Analyzing Markets',
      description: 'Watch GPT-4 work in real-time. The engine scans screened stocks, fetches live candlestick data via YFinance, and sends each candidate through the GPT-4 analysis pipeline — all async.',
      highlights: ['Async FastAPI processing pipeline', 'Live progress indicator per stock', 'YFinance real-time OHLCV data feed'],
      accentColor: '#6366f1',
      gradientFrom: '#312e81',
      gradientTo: '#6366f1',
      chipIcon: '⚙️',
      chipLabel: 'Async AI Pipeline'
    },
    {
      id: 5,
      screen: 'AI Analysis Result',
      image: 'assets/vantrade_ai_analysis_result_screen.jpeg',
      tag: '// trade signal ready',
      headline: 'GPT-4 Says',
      subline: 'Buy. Here\'s Why.',
      description: 'The AI analysis result screen shows the full GPT-4 reasoning — which indicators triggered, the confidence score, entry price, stop-loss, target, and the calculated Risk:Reward ratio.',
      highlights: ['Full GPT-4 reasoning explanation', 'Entry / Stop-loss / Target displayed', 'Risk:Reward ratio & confidence score'],
      accentColor: '#10b981',
      gradientFrom: '#064e3b',
      gradientTo: '#10b981',
      chipIcon: '✅',
      chipLabel: 'Trade Signal Output'
    },
    {
      id: 6,
      screen: 'GTT Analysis Screen',
      image: 'assets/vantrade_gtt_analysis_screen.jpeg',
      tag: '// automated entry orders',
      headline: 'Set GTT.',
      subline: 'Trade While You Sleep.',
      description: 'Place Good-Till-Trigger orders directly through Zerodha Kite Connect. VanTrade pre-fills entry, stop-loss, and target from the AI signal — one tap sends the order to the exchange.',
      highlights: ['Zerodha Kite Connect GTT integration', 'Pre-filled from AI signal (entry/SL/target)', 'Auto position sizing based on capital & risk'],
      accentColor: '#ef4444',
      gradientFrom: '#7f1d1d',
      gradientTo: '#ef4444',
      chipIcon: '🎯',
      chipLabel: 'GTT Order Automation'
    },
    {
      id: 7,
      screen: 'Market Closed Screen',
      image: 'assets/vantrade_market_closed_screen.jpeg',
      tag: '// smart market awareness',
      headline: 'Market Closed.',
      subline: 'Analysis Ready.',
      description: 'VanTrade is aware of NSE trading hours. When the market is closed, the app shows a clear status screen and lets you prep AI analysis for execution at market open — no wasted API calls.',
      highlights: ['NSE market hours detection', 'Offline AI analysis scheduling', 'No unnecessary API calls during off-hours'],
      accentColor: '#64748b',
      gradientFrom: '#1e293b',
      gradientTo: '#475569',
      chipIcon: '🕐',
      chipLabel: 'Market Hours Aware'
    }
  ];

  get activeSlide(): TradeSlide {
    return this.slides[this.activeIndex()];
  }

  ngAfterViewInit(): void {
    window.addEventListener('scroll', this.scrollHandler, { passive: true });
    this.onWindowScroll();
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  onWindowScroll(): void {
    if (!this.tradeSection) return;
    const section = this.tradeSection.nativeElement;
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;

    const scrolled = Math.max(0, -sectionTop);
    const scrollable = sectionHeight - viewportHeight;
    const progress = scrollable > 0 ? Math.min(1, scrolled / scrollable) : 0;
    this.scrollProgress.set(progress);

    const slideIndex = Math.min(this.slides.length - 1, Math.floor(progress * this.slides.length));
    this.activeIndex.set(slideIndex);
  }

  goToSlide(index: number): void {
    if (!this.tradeSection) return;
    const section = this.tradeSection.nativeElement;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollable = sectionHeight - viewportHeight;
    const target = sectionTop + (index / this.slides.length) * scrollable;
    window.scrollTo({ top: target, behavior: 'smooth' });
  }
}
