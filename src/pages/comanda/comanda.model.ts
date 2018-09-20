export class ComandaModel {
    public item: string;
    public qtd: any;
    public valor_unitario: any;
    public valor_total: any;

    constructor() {
        this.item = '';
        this.qtd = 1;
        this.valor_unitario = 4;
        this.valor_total = 1;
    }

    public getItem(): string {
        return this.item;
    }

    public setItem(item: string) {
        this.item = item;
    }

    public getQtd(): string {
        return this.qtd;
    }

    public setQtd(qtd: string) {
        this.qtd = qtd;
    }
    public getValor_unitario(): string {
        return this.valor_unitario;
    }

    public setValor_unitario(valor_unitario: string) {
        this.valor_unitario = valor_unitario;
    }
    public getValor_total(): string {
        return this.valor_total;
    }

    public setValor_total(valor_total: string) {
        this.valor_total = valor_total;
    }
}



