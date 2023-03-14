import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ConsoleLogServiceService } from './console-log-service.service';
import { MyserviceComponent } from './myservice/myservice.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MyserviceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ConsoleLogServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
