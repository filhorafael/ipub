import { CervejasPage } from './../pages/cervejas/cervejas';
import { AngularFireDatabase } from 'angularfire2/database';
import { ComandaPage } from './../pages/comanda/comanda';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPageModule } from '../pages/intro/intro.module';
import { BebidasPageModule } from '../pages/bebidas/bebidas.module';
import { ComidasPageModule } from '../pages/comidas/comidas.module';
import { CervejasPageModule } from '../pages/cervejas/cervejas.module';
import { AngularFireModule } from "angularfire2";
import { CardapioPage } from '../pages/cardapio/cardapio';
import { CommonModule } from '@angular/common';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { QrcodePage } from '../pages/qrcode/qrcode';

export const firebaseConfig = {
  apiKey: "AIzaSyBJWkEuSPA8rN7l0mazBty5Jvns0JRcrnE",
  authDomain: "ipubdatabase.firebaseapp.com",
  databaseURL: "https://ipubdatabase.firebaseio.com",
  projectId: "ipubdatabase",
  storageBucket: "ipubdatabase.appspot.com",
  messagingSenderId: "891676664315"
};




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ComandaPage,
    CardapioPage,
    QrcodePage,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(MyApp),
    IntroPageModule,
    BebidasPageModule,
    ComidasPageModule,
    CervejasPageModule,
    AngularFireModule.initializeApp(firebaseConfig)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ComandaPage,
    CardapioPage,
    QrcodePage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    BarcodeScanner,
    CervejasPage,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
