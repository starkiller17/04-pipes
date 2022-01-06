import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { LOCALE_ID, NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import { AppComponent } from './app.component';

// Cambiar el locale de la app
import localeEsMx from '@angular/common/locales/es-MX';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
// Se registra el español como lenguaje
registerLocaleData( localeEsMx );
registerLocaleData( localeFr );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    // Cambiar el lenguaje de manera global
    { provide: LOCALE_ID, useValue: 'es-MX' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
