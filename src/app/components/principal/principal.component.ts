import { Component, OnInit } from '@angular/core';
import { BackgroundEnum } from 'src/app/utils/_const.enum';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})

export class PrincipalComponent implements OnInit {
  bkgUrl = BackgroundEnum.lands2;

  constructor() { }

  
  ngOnInit(): void {
  }

}
