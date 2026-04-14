import { Injectable } from '@angular/core';
import language_vocab from "../../assets/language_vocab";

@Injectable({
  providedIn: 'root',
})
export class LangService {
  // Tell TypeScript exactly what keys exist based on the en fallback
  public t!: typeof language_vocab.en;

  // variables for additional features : changeLanguage, getLangCodeFromURL
  private codeOfLanguage: string | undefined;
  avaliableLangs: Map<string, string> | undefined;

  // initialization in constructor
  constructor() {
    this.initLang();
  }

  initLang() {
    if (!this.t) {
      this.getLanguageCodeFromURL();
      // Assign the object to 't'
      this.changeLang(this.codeOfLanguage);
    }
    if (!this.avaliableLangs) {
      this.avaliableLangs = new Map<string, string>(
        Object.entries(language_vocab).map(([key, value]) => [value.languageName, key]),
      );
    }
  }
  changeLang(codeOfLang: string | undefined) {
    // if input is in format of t.languageName it should be changed according to Map
    if (this.avaliableLangs?.has(codeOfLang!))
      codeOfLang = this.avaliableLangs?.get(codeOfLang!);

    // get strong type
    const codeOfLangTypisized = codeOfLang as keyof typeof language_vocab;

    // change language object
    this.t = language_vocab[codeOfLangTypisized] ?? language_vocab.en;
  }

  getLanguageCodeFromURL() {
    // get lang code out of URL
    const href = window.location.href;
    const url = new URL(href);
    const params = new URLSearchParams(url.search);
    const langParameter = 'lang';

    if (params.has(langParameter)) {
      this.codeOfLanguage = params.get(langParameter)!.toLowerCase().replace('-', '_');
    }
    this.getCodeOfLanguageIframe();
  }
  getCodeOfLanguageIframe() {
    this.codeOfLanguage = this.codeOfLanguage ?? 'en';
    return this.codeOfLanguage.replace('-', '_');
  }
}
