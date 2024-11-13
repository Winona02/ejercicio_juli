const fs = require('fs');
const file = fs.readFileSync("./concecionaria/autos.json", "utf-8");
const  autos = JSON.parce(file);
const concesionaria = {
    vehiculos:autos,
    autosEnventa: function () {
        return this.vehiculos.filter(car => car.vendido === false)
    },
    vender:function (dominio) {
        this.vehiculos.forEach(car => {
            if(car.patente == dominio){
                car.vendido = true;
            }
        })
        return this.vehiculos;
    },
    autoFinanciable:function (cuotas) {
        const enVenta = this.autosEnventa();
        return enVenta.filter(car => car.cuotas >= cuotas);
    },
    autosNuevos: function () {
        return this.vehiculos.filter(car => car.km < 100);
    },
    listaDeVentas: function() {
        return this.vehiculos.filter(car => car.vendido === true)
    },
    totalDeVentas: function () {
        let totalVentas = this.listaDeVentas();
        return totalVentas.reduce((suma,car) => suma + car.precio, 0)
    },
    autosQuePuedeComprar: function (importe) {
        let vendibles = this.autosEnventa()
        return vendibles.filter(car => car.precio <= importe)
    }
}

module.exports = concesionaria;