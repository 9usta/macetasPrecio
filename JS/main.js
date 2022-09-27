let largo = document.querySelector("#l");
let ancho = document.querySelector("#a");
let alto = document.querySelector("#h");
let precio = document.querySelector("#p");

function calcular() {
    let l = parseFloat(largo.value.replace(/,/g, '.'));
    let a = parseFloat(ancho.value.replace(/,/g, '.'));
    let h = parseFloat(alto.value.replace(/,/g, '.'));
    let v = l*a*h/1000;
    precio.innerHTML= "$ " + (500*Math.ceil((1500*(Math.log(v)/Math.log(Math.E))+2800)/500) || "0000")
}

largo.addEventListener("keyup", () => {
    if (largo != "" && ancho != "" && alto != "") {
        calcular();
    }
})

ancho.addEventListener("keyup", () => {
    if (largo != "" && ancho != "" && alto != "") {
        calcular();
    }
})

alto.addEventListener("keyup", () => {
    if (largo != "" && ancho != "" && alto != "") {
        calcular();
    }
})

/* //inicializacion de variables
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const item = document.getElementById('productos')
let suma = 0;

const carro = document.querySelector("#carro");

//productos de la tienda
const tienda = [
    {
        codigo: "22101",
        esmalte: "si",
        largo: 34,
        ancho: 21,
        prof: 7,
        precio: 6000,
        img: "1-bonasi-rec-blanca.webp",
    },
    {
        codigo: "22102",
        esmalte: "si",
        largo: 36,
        ancho: 24,
        prof: 4,
        precio: 4500,
        img: "2-bonasi-rect-ocre.webp",
    },
    {
        codigo: "22103",
        esmalte: "no",
        largo: 22,
        ancho: 22,
        prof: 8,
        precio: 4000,
        img: "3-bonsai-hexagoal.webp",

    },
    {
        codigo: "22104",
        esmalte: "no",
        largo: 34,
        ancho: 20,
        prof: 7,
        precio: 6000,
        img: "4-bonsai-molduras.webp",

    },
    {
        codigo: "22105",
        esmalte: "no",
        largo: 28,
        ancho: 26,
        prof: 5,
        precio: 5000,
        img: "5-bonsai-rectangular.webp",
    },
    {
        codigo: "22106",
        esmalte: "no",
        largo: 32,
        ancho: 24,
        prof: 5,
        precio: 5500,
        img: "6-hexagonal ocre labio.webp",
    },
];

//carge en la pagina de los productos
function cargaTienda() {
    for (const element of tienda) {
        let { img, codigo, largo, ancho, prof, precio } = element;
        let div = document.createElement('div')
        div.innerHTML =
            `<div class="card">
        <div class="card_art">
            <img src="./images/${img}" alt="">
            <h3>${codigo}</h3>
        </div> 
        <div class="card_carrito">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
            </svg>
            <input type="checkbox" id="carrito${codigo}">
        </div>  
    <p>Medidas: ${largo} x ${ancho} x ${prof} cm</p>
    <p class="card_precio">$${precio}</p>
    </div>
    `
        item.append(div)
    }
}

//Funcion para permitir agregar y quitar productos del parrito
function comprar() {
    for (const maceta of tienda) {
        let valor = document.querySelector(`#carrito${maceta.codigo}`)
        valor.addEventListener("change", () => {
            carga(valor, maceta);
            localStorage.setItem("carrito", JSON.stringify(carrito));
        })
    }
}

//Funcion utilizada en comprar() para agregar o quitar dependiendo del check
function carga(check, prod) {
    check.checked ? carrito.push(prod) : carrito.splice(carrito.indexOf(prod), 1);
    check.checked ? suma = suma + prod.precio : suma = suma - prod.precio;

    carro.innerHTML = carrito.length + " Articulos --> $" + suma;
}

//funcion para cargar el carrito guardado en el local storage
function carritoInicial() {
    for (const art of carrito) {
        suma = suma + art.precio
        document.querySelector(`#carrito${art.codigo}`).checked = true;
    }
    carro.innerHTML = carrito.length + " Articulos --> $" + suma;
}

function news() {
    document.querySelector("#sub").addEventListener("click", () => {
        let mail = document.querySelector("#email");
        mail.value.includes("@") ? alert("Gracias por inscribirse en nuestro Newsletter!") : alert("Ingrese una dirección de correo valida");
    })
}

//Ejecucion
cargaTienda();
carritoInicial();
comprar();
news(); */