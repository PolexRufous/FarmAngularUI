import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import 'hammerjs';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdMenuModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpModule} from '@angular/http';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {BaseRoutingModule} from './routes/base.routing.module';
import {FooterComponent} from './footer/footer.component';
import {OperationsComponent} from './operations/operations.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {baseUrl} from './global/constants';
import { ExternalComponent } from './external/external/external.component';
import { InternalComponent } from './internal/internal/internal.component';
import { ReportsComponent } from './reports/reports/reports.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    OperationsComponent,
    ExternalComponent,
    InternalComponent,
    ReportsComponent
  ],
  imports: [
    BaseRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    FlexLayoutModule,
    HttpModule,
    HttpClientModule,
    MdMenuModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {provide: 'BaseUrl', useValue: baseUrl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
