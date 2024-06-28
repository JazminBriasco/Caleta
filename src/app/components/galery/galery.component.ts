import { Component, OnInit } from '@angular/core';
import { BackgroundEnum } from 'src/app/utils/_const.enum';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {
  bkg1 = BackgroundEnum.bkg1;
  bkg2 = BackgroundEnum.bkg2;
  bkg3 = BackgroundEnum.bkg3;
  bkg4 = BackgroundEnum.bkg4;
  bkg5 = BackgroundEnum.bkg5;
  bkg6 = BackgroundEnum.bkg6;
  bkg7 = BackgroundEnum.bkg7;
  bkg8 = BackgroundEnum.bkg8;
  bkg9 = BackgroundEnum.bkg9;
  bkg10 = BackgroundEnum.bkg10;
  bkg11 = BackgroundEnum.bkg11;
  bkg12 = BackgroundEnum.bkg12;
  bkg18 = BackgroundEnum.bkg18;
  bkg19 = BackgroundEnum.bkg19;
  bkg20 = BackgroundEnum.bkg20;

  bkg21 = BackgroundEnum.bkg12;
  bkg22 = BackgroundEnum.bkg13;
  bkg23 = BackgroundEnum.bkg14;
  bkg24 = BackgroundEnum.bkg15;
  bkg25 = BackgroundEnum.bkg16;


  
  constructor() { }

  ngOnInit(): void {
  }

}
