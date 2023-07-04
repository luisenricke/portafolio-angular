import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  isScrollingDown = false;
  prevScrollPos = window.pageYOffset;

  showNavigation = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPos = window.pageYOffset;
    this.isScrollingDown = currentScrollPos > this.prevScrollPos;
    this.prevScrollPos = currentScrollPos;
  }

  constructor(private renderer: Renderer2) {}

  handleClick(event: Event, targetId: string) {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = targetElement.offsetTop - 40;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      this.showNavigation = false;
    }
  }

  toggleNavigation() {
    this.showNavigation = !this.showNavigation;
  }
}
