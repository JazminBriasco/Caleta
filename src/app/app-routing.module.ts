import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GaleryComponent } from './components/galery/galery.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent, pathMatch: 'full' },
  { path: 'galeria', component: GaleryComponent },
  { path: '**', component: PrincipalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
