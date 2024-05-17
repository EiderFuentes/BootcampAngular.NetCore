"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var producto_1 = require("./producto");
var ListaProductos = [
    {
        id: 1,
        descripcion: "Tablet",
        precio: 2000
    },
    {
        id: 2,
        descripcion: "Laptop",
        precio: 3000
    },
    {
        id: 3,
        descripcion: "imptresora",
        precio: 1500
    }
];
var totalLista = (0, producto_1.calcularTotal)(ListaProductos);
console.log(totalLista);
