import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CenterComponent } from './center/center.component';
import { AddcenterComponent } from './addcenter/addcenter.component';
import { CenterService } from './center.service';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    CenterComponent,
    AddcenterComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,
    HttpModule
  ],
  providers: [CenterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
