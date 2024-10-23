import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NavComponent } from './components/nav/nav.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { CardComponent } from './components/card/card.component';
import { CardReverseComponent } from './components/card-reverse/card-reverse.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from './components/toast/toast.component';
import { ContactAsComponent } from './components/contact-as/contact-as.component';
import { GaleryComponent } from './components/galery/galery.component';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { RightsComponent } from './components/rights/rights.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    NavComponent,
    MainCardComponent,
    CardComponent,
    CardReverseComponent,
    FooterComponent,
    ToastComponent,
    ContactAsComponent,
    GaleryComponent,
    RightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
