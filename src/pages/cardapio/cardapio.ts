import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BebidasPage } from '../bebidas/bebidas';
import { ComidasPage } from '../comidas/comidas';




@IonicPage()
@Component({
  selector: 'page-cardapio',
  templateUrl: 'cardapio.html',
})
export class CardapioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardapioPage');
  }

  goToBebidasPage(){
    this.navCtrl.push(BebidasPage);
  }
  goToComidasPage(){
    this.navCtrl.push(ComidasPage);
  }

}
