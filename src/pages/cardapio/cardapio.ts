import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BebidasPage } from '../bebidas/bebidas';
import { ComidasPage } from '../comidas/comidas';

/**
 * Generated class for the CardapioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
