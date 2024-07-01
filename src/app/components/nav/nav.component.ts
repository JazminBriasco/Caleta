import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, from, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {  }

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
}
