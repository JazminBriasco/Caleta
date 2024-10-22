import { Component, OnInit } from '@angular/core';
import { BackgroundEnum } from 'src/app/utils/_const.enum';
import {MatGridListModule} from '@angular/material/grid-list';


@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})

/**TODO
 * Spiner al enviar mail
 */

export class GaleryComponent implements OnInit {
  cabin201 = BackgroundEnum.cabin201;
  cabin202 = BackgroundEnum.cabin202;
  cabin203 = BackgroundEnum.cabin203;
  cabin204 = BackgroundEnum.cabin204;
  cabin205 = BackgroundEnum.cabin205;
  cabin206 = BackgroundEnum.cabin206;
  cabin207 = BackgroundEnum.cabin207;
  cabin208 = BackgroundEnum.cabin208;
  cabin209 = BackgroundEnum.cabin209;
  cabin210 = BackgroundEnum.cabin210;
  cabin211 = BackgroundEnum.cabin211;
  cabin212 = BackgroundEnum.cabin212;
  cabin213 = BackgroundEnum.cabin213;
  cabin214 = BackgroundEnum.cabin214;
  cabin215 = BackgroundEnum.cabin215;

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
      image: this.cabin201,
      description: ''
    },
    {
      title: '',
      image: this.cabin202,
      description: ''
    },
    {
      title: '',
      image: this.cabin203,
      description: ''
    },
    {
      title: '',
      image: this.cabin204,
      description: ''
    },
    {
      title: '',
      image: this.cabin205,
      description: ''
    },
    {
      title: '',
      image: this.cabin206,
      description: ''
    },
    {
      title: '',
      image: this.cabin208,
      description: ''
    },

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
