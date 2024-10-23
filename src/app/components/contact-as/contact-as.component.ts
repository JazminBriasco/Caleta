import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-as',
  templateUrl: './contact-as.component.html',
  styleUrls: ['./contact-as.component.scss']
})

export class ContactAsComponent implements OnInit {
  mailTo = `lodejaz@gmail.com`;
  public useResponsiveContact = false

  @HostListener('window:resize') 
    checkSize() {
      console.log(window.innerWidth);
      this.useResponsiveContact  = window.innerWidth <= 576;
    }

  constructor() { 
    this.useResponsiveContact  = window.innerWidth <= 576;
  }

  ngOnInit(): void { }
}
