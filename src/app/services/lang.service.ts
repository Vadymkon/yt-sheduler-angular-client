import { Injectable } from '@angular/core';
import language_vocab from "../../assets/language_vocab";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class LangService {
  // Tell TypeScript exactly what keys exist based on the en_gb fallback
  public t!: typeof language_vocab.en_gb;

  private codeOfLanguage: string | undefined;

  constructor(public router: Router) {
    this.initLang();
  }

  initLang() {
    if (!this.t) {
      const href = window.location.href;
      const url = new URL(href);
      const params = new URLSearchParams(url.search);

      if (params.has('lang')) {
        this.codeOfLanguage = params.get('lang')!.toLowerCase().replace('-', '_');
      }

      this.getCodeOfLanguageIframe();
      const codeOfLangTyped = this.codeOfLanguage as keyof typeof language_vocab;

      // Assign the object to 't'
      this.t = language_vocab[codeOfLangTyped] ?? language_vocab.en_gb;
    }
  }

  getCodeOfLanguageIframe() {
    this.codeOfLanguage = this.codeOfLanguage ?? 'en_gb';
    return this.codeOfLanguage.replace('-', '_');
  }
}
