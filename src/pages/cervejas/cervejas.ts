import { ComandaModel } from './../comanda/comanda.model';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-cervejas',
  templateUrl: 'cervejas.html',
})

export class CervejasPage {

  lista: AngularFireList<any>;
  comanda: ComandaModel;
  valorTotal: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public af: AngularFireDatabase, public toastCtrl: ToastController) {
    this.lista = this.af.list('/comanda');
    this.comanda = new ComandaModel();
  }

  inserir(item,valor) {
    this.comanda.setItem(item);
    this.comanda.setValor_unitario(valor);
    this.lista.push(this.comanda);

    this.valorTotal += valor;
    this.comanda.setValor_total(this.valorTotal);
    console.log(this.comanda.getValor_total());

  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Pedido adicionado com sucesso!',
      duration: 3000,
      position: 'middle'
    });
    toast.present(); 
  }

  showConfirm(item,valor) {
    let confirm = this.alertCtrl.create({
      title: 'Confirma o pedido de uma ' + item + '?',
      message: 'Valor R$ ' + valor + ',00',
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
            this.inserir(item,valor);
            this.presentToast();
          }
        }
      ]
    });
    confirm.present();
  }
}


