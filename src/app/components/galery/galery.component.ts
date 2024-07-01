import { Component, OnInit } from '@angular/core';
import { BackgroundEnum } from 'src/app/utils/_const.enum';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})

/**TODO
 * Spiner al enviar mail
 */

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

  carousel = document.getElementById('.carousel');

  images = [];
  currentImage = 0;
   slides: any;
  
  slides1 = [
    {
      title: '',
      image: this.bkg18,
      description: ''
    },
    {
      title: '',
      image: this.bkg25,
      description: ''
    },
    {
      title: '',
      image: this.bkg24,
      description: ''
    }
  ];

  slides2 = [
    {
      title: '',
      image: this.bkg18,
      description: ''
    },
    {
      title: '',
      image: this.bkg25,
      description: ''
    },
    {
      title: '',
      image: this.bkg24,
      description: ''
    }
  ];

  slideContainer = [this.slides1, this.slides2];

  currentSlide = 0;
  constructor() {   this.slides= this.slides1; }
  
  ngOnInit(): void { }
    previousSlide(slide: string) {
      if(slide === 'slide1'){
        this.slides= this.slides1;
      }

      if(slide === 'slide2'){
        this.slides= this.slides1;
      }
      if(this.currentSlide > 0){
        this.currentSlide =   this.currentSlide - 1 ;
      } else {
        this.currentSlide  = this.slides.length - 1;
      }

    }
  
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides1.length;
    }
}
