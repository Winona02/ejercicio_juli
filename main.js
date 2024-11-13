const concesionaria = require('./concesionaria.js');

console.log("--------AUTOS FINANCIABLE EN TANTAS CUOTAS O MÁS COMO SE INDIQUE---------");
console.log(concesionaria.autoFinanciable(14));

console.log("--------EL AUTO INDICADO ESTÁ DISPONIBLE?---------");
console.log(concesionaria.vender("APL123"));

console.log("--------AUTOS DISPONIBLES PARA VENDER---------");
console.log(concesionaria.autosEnventa());

console.log("--------AUTOS CON KM MENOR A 100---------");
console.log(concesionaria.autosNuevos());

console.log("--------LISTA DE AUTOS VENDIDOS---------");
console.log(concesionaria.listaDeVentas());

console.log("--------SUMA DEL IMPORTE DE LOS VEHICULOS VENDIDOS---------");
console.log(concesionaria.totalDeVentas());

console.log("--------LISTA DE AUTOS CON IMPORTE MENOR O IGUAL AL DADO POR EL CLIENTE.---------");
console.log(concesionaria.autosQuePuedeComprar(150000));