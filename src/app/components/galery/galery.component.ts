import { Component, HostListener, OnInit } from '@angular/core';
import { BackgroundEnum } from 'src/app/utils/_const.enum';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss'],
})

export class GaleryComponent implements OnInit {
  //Slide Cabin 1
  slidesCabin2 = [
    {
      title: '',
      image: BackgroundEnum.cabin201,
      description: '',
    },
    {
      title: '',
      image: BackgroundEnum.cabin202,
      description: '',
    },
    {
      title: '',
      image: BackgroundEnum.cabin203,
      description: '',
    },
  ];

  slidesCabin2Responsive = [
    {
      title: '',
      image: BackgroundEnum.cabin201,
      description: '',
    },
    {
      title: '',
      image: BackgroundEnum.cabin202,
      description: '',
    },
    {
      title: '',
      image: BackgroundEnum.cabin203,
      description: '',
    },
    {
      title: '',
      image: BackgroundEnum.cabin204,
      description: '',
    },
    {
      title: '',
      image: BackgroundEnum.cabin205,
      description: '',
    },
    {
      title: '',
      image: BackgroundEnum.cabin206,
      description: '',
    },
  ];

  //Slide Cabin 3
  slidesCabin3 = [
    {
      title: '',
      image: BackgroundEnum.cabin301,
      description: '',
    },
    {
      title: '',
      image: BackgroundEnum.cabin302,
      description: '',
    },
    {
      title: '',
      image: BackgroundEnum.cabin303,
      description: '',
    },
  ];

  slidesCabin3Responsive = [
    {
      title: '',
      image: BackgroundEnum.cabin301,
      description: '',
    },
    {
      title: '',
      image: BackgroundEnum.cabin302,
      description: '',
    },
    {
      title: '',
      image: BackgroundEnum.cabin303,
      description: '',
    },
    {
      title: '',
      image: BackgroundEnum.cabin304,
      description: '',
    },
    {
      title: '',
      image: BackgroundEnum.cabin305,
      description: '',
    },
    {
      title: '',
      image: BackgroundEnum.cabin306,
      description: '',
    },
  ];

  //Slide Cabin 4
  slidesCabin4 = [
    {
      title: '',
      image: BackgroundEnum.cabin401,
      description: '',
    },
    {
      title: '',
      image: BackgroundEnum.cabin402,
      description: '',
    },
    {
      title: '',
      image: BackgroundEnum.cabin403,
      description: '',
    },
  ];

  slidesCabin4Responsive = [
    {
      title: '',
      image: BackgroundEnum.cabin401,
      description: '',
    },
    {
      title: '',
      image: BackgroundEnum.cabin402,
      description: '',
    },
    {
      title: '',
      image: BackgroundEnum.cabin403,
      description: '',
    },
    {
      title: '',
      image: BackgroundEnum.cabin404,
      description: '',
    },
    {
      title: '',
      image: BackgroundEnum.cabin405,
      description: '',
    },
    {
      title: '',
      image: BackgroundEnum.cabin406,
      description: '',
    },
  ];

  useResponsiveCard = false;
  currentImage = 0;
  currentSlide = 0;
  slides = [];

  @HostListener('window:resize')
  checkSize() {
    this.useResponsiveCard = window.innerWidth <= 576;
  }

  constructor() {
    this.useResponsiveCard = window.innerWidth <= 576;
  }

  ngOnInit(): void {}

  previousSlide(slide: string) {
    switch (slide) {
      case 'slide1':
        this.slides = this.slidesCabin2;
        break;

      case 'slide2':
        this.slides = this.slidesCabin3;
        break;

      case 'slide3':
        this.slides = this.slidesCabin4;
        break;
      
      case 'slide1Resp':
        this.slides = this.slidesCabin2Responsive;
        break;

      case 'slide2Resp':
        this.slides = this.slidesCabin3Responsive;
        break;

      case 'slide3Resp':
        this.slides = this.slidesCabin4Responsive;
        break;

      default:
        this.slides = this.slidesCabin2;
        break;
    }

    if (this.currentSlide > 0) {
      this.currentSlide = this.currentSlide - 1;
    } else {
      this.currentSlide = this.slides.length - 1;
    }
  }

  nextSlide(slide: string) {
    switch (slide) {
      case 'slide1':
        this.slides = this.slidesCabin2;
        break;

      case 'slide2':
        this.slides = this.slidesCabin3;
        break;

      case 'slide3':
        this.slides = this.slidesCabin4;
        break;

      case 'slide1Resp':
        this.slides = this.slidesCabin2Responsive;
        break;

      case 'slide2Resp':
        this.slides = this.slidesCabin3Responsive;
        break;

      case 'slide3Resp':
        this.slides = this.slidesCabin4Responsive;
        break;

      default:
        this.slides = this.slidesCabin2;
        break;
    }
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
}
