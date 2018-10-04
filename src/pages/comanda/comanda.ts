import { CervejasPage } from './../cervejas/cervejas';
import { ComandaModel } from './../comanda/comanda.model';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';

@Component({
  selector: 'page-comanda',
  templateUrl: 'comanda.html',
})


export class ComandaPage {

  public comanda: any;
  public comandaModel: ComandaModel;
  public valorTotal: number = 0;

  constructor(public navCtrl: NavController, public af: AngularFireDatabase) {
      this.af.list('comanda').valueChanges().subscribe((datas) => {
      this.comanda = datas;

      datas.forEach(items => {
        this.valorTotal += items.valor_unitario
        console.log(this.valorTotal)
      });
    });

    
  }

  soma(valor){
    this.valorTotal += valor;
  }

  comandaTotal(){
    return 0;
  }


}
