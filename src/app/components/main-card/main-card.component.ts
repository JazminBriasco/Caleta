import { Component, OnInit } from '@angular/core';
import { BackgroundEnum, LegendCardsEnum, ParagraphsEnum } from 'src/app/utils/_const.enum';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent implements OnInit {
  paragraph1: string = '';
  legend1: string = '';
  legend2: string = '';
  legend3: string = '';
  legend4: string = '';
  bkg1: string = '';
  bkg2: string = '';
  bkg3: string = '';
  bkg4: string = '';


  constructor() { 
    this.paragraph1 = ParagraphsEnum.paragraph1;
    this.legend1 = LegendCardsEnum.legend1;
    this.legend2 = LegendCardsEnum.legend2;
    this.legend3 = LegendCardsEnum.legend3;
    this.legend4 = LegendCardsEnum.legend4;
    this.bkg1 = BackgroundEnum.bkg1;
    this.bkg2 = BackgroundEnum.bkg2;
    this.bkg3 = BackgroundEnum.bkg3;
    this.bkg4 = BackgroundEnum.bkg4;
  }

  ngOnInit(): void {
    
  }

}
