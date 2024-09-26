class Controle {
    private velocidadePermitida: number;
    private velocidadeAtual: number;
  
    constructor() {
      this.velocidadePermitida = 0;
      this.velocidadeAtual = 0;
    }
  
    public setVelocidadePermitida(velocidade: number): void {
      this.velocidadePermitida = velocidade;
    }
  
    public getVelocidadePermitida(): number {
      return this.velocidadePermitida;
    }
  
    public incrementarVelocidade(incremento: number): void {
      this.velocidadeAtual += incremento;
      if (this.velocidadeAtual > this.velocidadePermitida) {
        throw new Error(`Velocidade atual (${this.velocidadeAtual}) excedeu o limite permitido (${this.velocidadePermitida})`);
      }
    }
  
    public getVelocidade(): number {
      return this.velocidadeAtual;
    }
  }
  
  export { Controle };