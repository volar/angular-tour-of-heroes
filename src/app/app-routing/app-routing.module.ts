import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './../app.component';
import { HeroDetailComponent } from './../hero-detail/hero-detail.component';
import { HeroesComponent } from './../heroes/heroes.component';
import { HeroService } from './../hero.service';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { FaceRecognitionComponent } from './../face-recognition/face-recognition.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'face-recognition', component: FaceRecognitionComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
