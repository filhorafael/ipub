import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ComandaPage } from '../comanda/comanda';
import { CardapioPage } from '../cardapio/cardapio';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ComandaPage;
  tab3Root = ContactPage;
  tab4Root = CardapioPage;

  constructor() {

  }
}
