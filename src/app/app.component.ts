import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from './particles-config';

declare let particlesJS: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  navbarCollapsed = true;

  public ngOnInit(): void {
    this.invokeParticles();
  }

  toggleNavbarCollapsing() {
      this.navbarCollapsed = !this.navbarCollapsed;
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }
}
