import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from './Components/auth/auth.module';
import { SharedModule } from './Components/shared/shared.module';
import { CoreModule } from './core.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AuthModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
  ],
  declarations: [AppComponent, HeaderComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
