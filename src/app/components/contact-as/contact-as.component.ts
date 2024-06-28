import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-as',
  templateUrl: './contact-as.component.html',
  styleUrls: ['./contact-as.component.scss']
})

export class ContactAsComponent implements OnInit {
  mailTo = `lodejaz@gmail.com`;


  constructor() { }
  
  ngOnInit(): void {
  }
}
