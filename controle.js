"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controle = void 0;
class Controle {
    constructor() {
        this.velocidadePermitida = 0;
        this.velocidadeAtual = 0;
    }
    setVelocidadePermitida(velocidade) {
        this.velocidadePermitida = velocidade;
    }
    getVelocidadePermitida() {
        return this.velocidadePermitida;
    }
    incrementarVelocidade(incremento) {
        this.velocidadeAtual += incremento;
        if (this.velocidadeAtual > this.velocidadePermitida) {
            throw new Error(`Velocidade atual (${this.velocidadeAtual}) excedeu o limite permitido (${this.velocidadePermitida})`);
        }
    }
    getVelocidade() {
        return this.velocidadeAtual;
    }
}
exports.Controle = Controle;
