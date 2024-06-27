import { Component, OnInit } from '@angular/core';
import { ToastStatus } from 'src/app/utils/_const.enum';
import { CommunicationService } from 'src/app/utils/services';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  showSuccessToast: boolean = false;
  showFailureToast: boolean = false;
  isToastVisible: boolean = false;
  subscription: any;

  constructor(private _comService: CommunicationService) { }

  ngOnInit(): void {
    this.subscription = this._comService.buttonClick$.subscribe((res) => {
      if(!this.isToastVisible){
        (res === ToastStatus.fail) ? this.showFailureToast = true : this.showSuccessToast = true;
        this.isToastVisible = true;
      }
      setTimeout(() => {
        this.showSuccessToast = false;
        this.showFailureToast = false;
        this.isToastVisible = false;
      }, 10000);
    }) 
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}
