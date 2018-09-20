import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { ComandaModel } from "../../pages/comanda/comanda.model";

@IonicPage()
@Component({
  selector: 'page-cervejas',
  templateUrl: 'cervejas.html',
})

export class CervejasPage {
  lista: AngularFireList<any>;
  comanda: ComandaModel;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public af: AngularFireDatabase) {
    this.lista = this.af.list('/ipubdatabase');
    this.comanda = new ComandaModel();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CervejasPage');
  }

  inserir(param?) {
    this.comanda.setItem(param);
    this.lista.push(this.comanda);
  }

  showConfirm(param) {
    let confirm = this.alertCtrl.create({
      title: 'Confirma o pedido de uma ' + param + '?',
      message: 'Valor R$ 4,00',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Cancelar clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.inserir(param);
            console.log(this.lista);
          }
        }
      ]
    });
    confirm.present();
  }
}


