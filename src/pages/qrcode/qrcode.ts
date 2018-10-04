import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html',
})
export class QrcodePage {

  options: BarcodeScannerOptions;
  scannedData: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public scanner: BarcodeScanner) {
  }

  scan() {
    this.options = {
      prompt: "Scan your code"
    },
      this.scanner.scan(this.options).then((data) => {
        this.scannedData = data;
      }, (err) => {
        console.log('Erro: ', err);
      })
  }



}
