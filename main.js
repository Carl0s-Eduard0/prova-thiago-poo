"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controle_1 = require("./controle");
let controle = new controle_1.Controle();
controle.setVelocidadePermitida(120);
controle.incrementarVelocidade(10);
console.log(controle.getVelocidade());
controle.incrementarVelocidade(20);
console.log(controle.getVelocidade());
try {
    controle.incrementarVelocidade(100);
}
catch (error) {
    console.error(error);
}
