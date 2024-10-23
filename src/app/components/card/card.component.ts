import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() bkgUrl: string = '';
  @Input() legend: string = '';
  @Input() position: string = '';
  useResponsiveCard = false; 

  @HostListener('window:resize') 
  checkSize() {
    console.log(this.useResponsiveCard);
    this.useResponsiveCard  = window.innerWidth <= 576;
  }
  
  constructor() { 
    this.useResponsiveCard = window.innerWidth <= 576;
  }
  
  ngOnInit(): void {
  }

}
