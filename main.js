
class Producto{
    constructor(nombre,codigo,precio,stock){
        this.nombre = nombre
        this.codigo = codigo
        this.precio = precio
        this.stock = stock
    }
}

let body = new Producto ("body",101,700,100);
let conjunto = new Producto ("conjunto rn",102,1500,100);
let escarpines = new Producto ("escarpines",103,600,100);
let pantalon = new Producto ("pantalon",104,800,100)
let ajuar = new Producto ("ajuar",105,2500,100);

let listadoProd = [body,conjunto,escarpines,pantalon,ajuar];

function guardarlistadoLS(listadoProd){
    localStorage.setItem("productos",JSON.stringify(listadoProd));
}
function cargarListadoLS(){
    return JSON.parse(localStorage.getItem("productos"));
}
guardarlistadoLS(listadoProd);

let form = document.getElementById("miForm");
let inputNombre = document.getElementById("nombre");
let inputCodigo = document.getElementById("codigo");
let inputPrecio = document.getElementById("precio");
let inputStock = document.getElementById("stock");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let newProd = new Producto (inputNombre.value, inputCodigo.value, inputPrecio.value, inputStock.value, input);
    listadoProd.push(newProd);
    localStorage.setItem("guardarListadoLS", JSON.stringify(listadoProd));
    return JSON.parse(localStorage.getItem("productos"));
});



