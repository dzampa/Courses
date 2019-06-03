import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
   
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'pt-br']);
    translate.setDefaultLang('pt-br');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/pt-br|en/) ? browserLang : 'pt-br');

  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

}
