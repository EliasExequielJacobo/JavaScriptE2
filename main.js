class Pizza {
    constructor (id, nombre, ingredientes, precio) {
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
    };
    
    getId =() => {
        return `El id de la pizza es ${this.id}`;
    };
}

let muzza = new Pizza(1, "Muzza", ["Muzzarela", "Oregano", "Salsa de tomate"], 300);
let rucula = new Pizza(2, "Rucula", ["Muzzarela", "Salsa de tomate", "Rucula"], 400);
let panceta = new Pizza(3, "Pánceta", ["Muzzrela", "Salsa de tomate", "Panceta"], 450);
let champiñon = new Pizza(4, "Champiñon", ["Muzzrela", "Salsa de tomate", "Champiñon", "Salsa de puerros"], 500);
let roquefort = new Pizza(5, "Roquefort", ["Roquefort", "Salsa de tomate", "Rucula"], 600);
let cuatroquesos = new Pizza(6, "Cuatro quesos", ["Salsa de tomate", "Muzzarela", "Parmesano", "Fontina", "Gorgonzola"], 700);


let pizzas = [muzza, rucula, panceta, champiñon, roquefort, cuatroquesos];

// IMPAR
// console.log("a. Pizzas que tengan un id impar.");

// const idImpar = Pizzas.filter((Pizza) => {
//      return Pizza.id % 2 ===1;
// });

// idImpar.forEach ((Pizza) =>{
//     console.log(`La pizza de ${Pizza.nombre} tiene id impar.`);
// });
// console.log("----------------------------------------------------");
// IMPAR

// PIZZA QUE VALGAN MENOS DE X CANTIDAD
// console.log("b. ¿Hay alguna pizza que valga menos de $600?");
// const hayPizzasQueValganMenosDe= (precio) =>{
//     return Pizzas.some((Pizza) =>{
//         return Pizza.precio < precio;
//     })
//         ? console.log(`Si, si hay pizzas que valgan menos de $${precio}.`)
//         : console.log(`No, no hay pizzas que valgan menos de $${precio}.`);
// };

// hayPizzasQueValganMenosDe(600);

// console.log("----------------------------------------------------");
// PIZZA QUE VALGAN MENOS DE X CANTIDAD

// NOMBRES CON PRECIOS RESPECTIVOS 
// console.log("c. El nombre de cada pizza con su respectivo precio.");
// const nombresRespectivos = Pizzas.filter ((Pizza) =>{
//     return Pizza.nombre && Pizza.precio;
// });

// nombresRespectivos.forEach ((Pizza) =>{
//     console.log(`El nombre de la pizza es: ${Pizza.nombre} y su precio es de: $${Pizza.precio}.`);
// })
// console.log("----------------------------------------------------");
// NOMBRES CON PRECIOS RESPECTIVOS 

// IGREDIENTE DE PIZZAS
// console.log("d. Todos los ingredientes de cada pizza.");
// const pizzaIngredientes = Pizzas.map ((Pizza) =>{
//     return {...Pizza};
// });



// pizzaIngredientes.forEach ((Pizza) =>{
//     console.log(`La pizza de ${Pizza.nombre} tiene los siguentes ingredientes: ${Pizza.ingredientes}.`);
// })

// console.log("----------------------------------------------------");
// IGREDIENTE DE PIZZAS


// -----------------------------------------------------------------------------------------------------------------

// INICIO E2

// llamar
const form = document.querySelector(".form");
const numberInput = document.querySelector(".form--input");
const btn = document.querySelector("form--btn");


//CHEQUEO DE NUM.
const checkNumber = () => {
    let valid = false; 

    const numberValue = numberInput.value;

    if (estaVacio(numberValue)) {
        return mostrarError(numberInput, "El campo es vacio");
    }else if (!esNumValido(numberValue)) {
        return mostrarError(numberInput, "Porfavor ingrese solo un numero del 1 al 6");
    }else {
        pizzaCoinci(numberValue)
        limpiarError(numberInput)
        valid = true;
    }
    return valid;
};



// utils

// ESTÁ VACIO
const estaVacio = (value) => {
    return !value.length
};

// MOSTRAR ERROR
const mostrarError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.add("error");
    formField.classList.remove("bien")
    const error = formField.querySelector("small");
    error.textContent = message;
    const pizzaName = document.querySelector('.render__pizza');
    pizzaName.textContent = "";
    const precio = document.querySelector('.render__precio');
    precio.textContent = "";
};

// PIZZA COINCIDENTE
const pizzaCoinci = (value) => {
    const pizzaName = document.querySelector('.render__pizza');
    const precio = document.querySelector('.render__precio');

    pizzas.forEach((pizza) => {
        if (pizza.id == value) {
            pizzaName.textContent = pizza.nombre;
            precio.textContent = `$${pizza.precio}`;
        };
    });
};

// LIMPIAR ERROR
const limpiarError = (input) => {
    const formField = input.parentElement;
    formField.classList.remove("error");
    formField.classList.add("bien")
    const error = formField.querySelector("small");
    error.textContent = "";
};

// EL NUMERO ES VÁLIDO
const esNumValido = (number) => {
    const re = /^[1-6]$/;
    return re.test(number);
};

//SUBMIT
form.addEventListener("submit", (e)=> {
    e.preventDefault();
    checkNumber();
    form.reset()
})