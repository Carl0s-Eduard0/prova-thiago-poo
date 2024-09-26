import { Controle } from './controle';

let controle = new Controle();

controle.setVelocidadePermitida(120); 

controle.incrementarVelocidade(10); 
console.log(controle.getVelocidade()); 

controle.incrementarVelocidade(20); 

console.log(controle.getVelocidade()); 

try {
  controle.incrementarVelocidade(100); 
} catch (error) {
  console.error(error); 
}