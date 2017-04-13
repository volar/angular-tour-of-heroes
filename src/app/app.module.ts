import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { FaceRecognitionComponent } from './face-recognition/face-recognition.component';
import { ImageUploadModule   } from 'angular2-image-upload';
import { ImageService } from 'angular2-image-upload/lib/image.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    FaceRecognitionComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ImageUploadModule
  ],
  providers: [HeroService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
