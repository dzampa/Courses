import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ExperienceComponent } from './experience/experience.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainPageComponent,
    ExperienceComponent,
    ClientsComponent,
    ContactComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // configure the imports
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FooterComponent, MainPageComponent, ExperienceComponent, ClientsComponent, ContactComponent, MenuComponent]
})
export class AppModule { }

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
