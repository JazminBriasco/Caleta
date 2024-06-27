import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastStatus } from 'src/app/utils/_const.enum';
import { CommunicationService } from 'src/app/utils/services';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  contactForm :FormGroup;
  isFormValid: boolean = false;


  constructor(private formBuilder: FormBuilder, private _comService: CommunicationService) { 
    this.contactForm = this.formBuilder.group({
      firstLastname: ['', Validators.required],
      contactNumber: ['', Validators.required],
      email: ['', Validators.required],
      msg: ['', Validators.required]
    });
  }

  ngOnInit(): void { }
  
  sendEmail(): void{
    this.contactForm.reset();
    this.showSuccessToast();
  }
  
  showSuccessToast(): void {
    this._comService.emitButtonClick(ToastStatus.success);
  }

  showErrorToast(): void {
   this._comService.emitButtonClick(ToastStatus.fail);
  }

  onSubmit(): void{ 

    
    this.isFormValid = 
      this.contactForm.value.firstLastname?.length > 0 && 
      this.contactForm.value.contactNumber?.toString().length > 6 && this.contactForm.value.contactNumber?.toString().length < 15 &&
      this.contactForm.value.email?.length > 5 && this.contactForm.value.email?.includes('@') &&
      this.contactForm.value.msg?.length > 0;
  
      this.isFormValid ? this.sendEmail() : this.showErrorToast();
    
  }
}
