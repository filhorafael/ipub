export class ComandaModel {
    public item: string;
    public qtd: number;
    public valor_unitario: number;
    public valor_total: number;

    constructor() {
        this.item = '';
        this.qtd = 1;
        this.valor_unitario = 0;
        this.valor_total = 0;
    }

    public getItem(): string {
        return this.item;
    }

    public setItem(item: string) {
        this.item = item;
    }

    public getQtd(): number {
        return this.qtd;
    }

    public setQtd(qtd: number) {
        this.qtd = qtd;
    }
    public getValor_unitario(): number {
        return this.valor_unitario;
    }

    public setValor_unitario(valor_unitario: number) {
        this.valor_unitario = valor_unitario;
    }
    public getValor_total(): number {
        return this.valor_total;
    }

    public setValor_total(valor_total: number) {
        this.valor_total = valor_total;
    }
}



