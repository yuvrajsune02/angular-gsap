import { Component } from '@angular/core';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';

import { HeaderComponent } from './header/header.component';
import { CounterService } from './services/counter.service';

gsap.registerPlugin(SplitText);
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderComponent],
})
export class AppComponent {
  title = 'angular-gsap';

  constructor(public counterService: CounterService) {}

  increment() {
    this.counterService.increment();
  }
  // @ViewChild('splitElement') splitElement!: ElementRef;
  // private splitAnimation: gsap.core.Animation | null = null;

  // ngAfterViewInit() {
  //   // Ensure fonts are loaded

  //   gsap.set(this.splitElement.nativeElement, { opacity: 1 });

  //   const splitInstance = SplitText.create(this.splitElement.nativeElement, {
  //     type: 'words,lines',
  //     linesClass: 'line',
  //     autoSplit: true,
  //     mask: 'lines',
  //     onSplit: (self: any) => {
  //       this.splitAnimation = gsap.from(self.lines, {
  //         duration: 0.9,
  //         yPercent: 100,
  //         opacity: 0,
  //         stagger: 0.1,
  //         ease: 'expo.out',
  //       });
  //     },
  //   });
  // }
  // playAnimation() {
  //   if (this.splitAnimation) {
  //     this.splitAnimation.timeScale(0.2).play(0);
  //   }
  // }
}
