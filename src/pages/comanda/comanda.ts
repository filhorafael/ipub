import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 

export class Comanda{
  item: string;
  valor_unitario = 4.00;
  qtd: {int};
  valor_total: {double}
}

@IonicPage()
@Component({
  selector: 'page-comanda',
  templateUrl: 'comanda.html',
})
export class ComandaPage {

  lista: AngularFireList<any>;
  comanda: Comanda;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {

    this.lista = this.af.list('/ipubdatabase');
    this.comanda = new Comanda();
  }

  inserir(){
    this.lista.push(this.comanda);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComandaPage');
  }

}
