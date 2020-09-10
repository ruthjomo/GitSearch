import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateCountPipe } from './date-count.pipe';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReposComponent } from './repos/repos.component';
import { SearchService } from './profile-http/search.service';
import { HttpClientModule } from '@angular/common/http';
import { LatestDirective } from './latest-directive';

@NgModule({
  declarations: [
    AppComponent,
    DateCountPipe,
    ProfileComponent,
    NavbarComponent,
    ReposComponent,
    LatestDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {}