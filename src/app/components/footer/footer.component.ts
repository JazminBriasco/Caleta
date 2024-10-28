import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackgroundEnum, ToastStatus } from 'src/app/utils/_const.enum';
import { CommunicationService } from 'src/app/utils/services';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  contactForm :FormGroup;
  isFormValid: boolean = false;
  bkgUrl = '"../../../assets/Landscapes/landscape-11.jpeg"';
  isLoading = false;
  
  userId = 'w5g9eITuxDIo-tMgL'; 
  serviceId = 'service_gd2vos1'; 
  templateId = 'template_yclpij9'; 

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
    this.isLoading = true;
    const form = document.getElementById('contact-form') as HTMLFormElement;
    if (this.contactForm.valid) {
      emailjs.sendForm(this.serviceId, this.templateId, form, this.userId)
        .then((result: EmailJSResponseStatus) => {
          this.showSuccessToast();
          this.contactForm.reset();
        }).catch (() => {
          this.showErrorToast();
          this.contactForm.reset();
        }).finally(() => {
          this.isLoading = false;
        });
    } else {
      this.isLoading = false;
      this.showErrorToast();
    }
      
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
