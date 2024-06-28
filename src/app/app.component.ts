import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'lo-de-jaz';

  constructor(private router: Router){
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.url === '/galeria' ) {
        document.body.style.backgroundColor = 'white' 
      }
      if (event instanceof NavigationEnd && event.url === '/' ) {
        document.body.style.backgroundColor = 'rgb(197, 197, 197)' 
      }
    });
  }
}
