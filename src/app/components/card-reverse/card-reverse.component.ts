import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-reverse',
  templateUrl: './card-reverse.component.html',
  styleUrls: ['./card-reverse.component.scss']
})

export class CardReverseComponent implements OnInit {
  @Input() bkgUrl: string = '';
  @Input() legend: string = '';
  @Input() position: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
