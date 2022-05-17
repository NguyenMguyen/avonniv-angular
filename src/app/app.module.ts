import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutYmnerComponent } from './about-ymner/about-ymner.component';
import { FindGrantsComponent } from './find-grants/find-grants.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutYmnerComponent,
    FindGrantsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
