import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, from, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public useResponsiveNav = false;
  public isNavOpen = false;
  
  @HostListener('window:resize') 
    checkSize() {
      console.log(window.innerWidth);
      this.useResponsiveNav = window.innerWidth <= 900;
    }

  @HostListener('document:click', ['$event'])
    onClick(event: MouseEvent) {
      if (!this.elementRef.nativeElement.contains(event.target)) {
        this.isNavOpen = false;
      }
    }

  constructor(private router: Router, private elementRef: ElementRef) { }

  ngOnInit(): void { 
    this.checkSize();
   }

  scrollToSection(sectionId: string): void {
    this.redirectSection(sectionId)
      .pipe(
        finalize(() => this.scrollSection(sectionId))
      )
      .subscribe();
  }

  redirectSection(sectionId: string): any {
    if (sectionId === 'contacto' || sectionId === 'mapa') {
      return from(this.router.navigate(['/'])); 
    }
  }

  scrollSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    }
  }

  openNav(){
    this.isNavOpen = !this.isNavOpen
  }
}
