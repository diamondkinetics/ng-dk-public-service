import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ServiceModule } from 'projects/ng-dk-public-service/src/lib/service/service.module';

import { AppComponent } from './app.component';
import { BattingSessionComponent } from './component/batting-session/batting-session.component';

import { LocalStorageService } from './service/util/local-storage/local-storage.service';
import { RequestInterceptor } from './util/request-interceptor/request.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    BattingSessionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceModule
  ],
  providers: [
    LocalStorageService,
		{ provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
