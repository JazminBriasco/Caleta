import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isShow: boolean = false;
  topPosToStartShowing = 100;

  @HostListener('window:scroll') checkScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    var goBack: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName(
      'go-back'
    ) as HTMLCollectionOf<HTMLElement>;

    if (goBack.length > 0) {
      var resta = (25 * screen.height) / 100;
      goBack[0].style.marginTop = screen.height - resta + 'px';
    } else {
      console.log("No se encontraron elementos con la clase 'go-back'");
    }

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  constructor() {}

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
