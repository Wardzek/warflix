import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './components/project/project.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/layout/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './components/banner/banner.component';
import { HobbyComponent } from './components/hobby/hobby.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalService } from './services/modal/modal.service';
import { ProjectService } from './services/project/project.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    HobbyComponent,
    AboutComponent,
    ProjectFormComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    ProjectService,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
