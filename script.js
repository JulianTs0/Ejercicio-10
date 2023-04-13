// Ejercicio 3

let respuesta3 = document.getElementById("res3");

const arr = [3,4,7,8,0];
const pow = arr.map((x)=>{return x * x});
console.log("-----Ejercicio 3-----");
console.log(pow.toString());

respuesta3.innerText = pow;

// Ejercicio 4

let respuesta4 = document.getElementById("res4");

const arr2 = [1,-4,12,0,-3,29,-150];
const arr2_plus = arr2.filter((n)=> n > 0); 
const reducer = (acc,cvalue) => acc + cvalue;
const arr2_reducido = arr2_plus.reduce(reducer);

respuesta4.innerText = arr2_reducido;

// Ejercicio 5 Arcangel

// Dado el array ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"].
// a. Obtener aquellos nombres con al menos 6 letras.
let Actividad5A = document.getElementById("Ejerc5a");
// b. Obtener los nombres que comienzan con "M".
let Actividad5B = document.getElementById("Ejerc5b");
// c. Ordenar alfabéticamente y mostrar por consola.
// d. Generar un array que contenga solo las iniciales
let Actividad5D = document.getElementById("Ejerc5d");
// e. Generar un array que contenga todos los nombres en mayúscula.
let Actividad5E = document.getElementById("Ejerc5e");
// f. Queremos saber si alguno de estos nombres comienza con "J”
let Actividad5F = document.getElementById("Ejerc5f");

const nombres = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];
let nombres6Letras = "";
nombres.forEach(nombre => { if(nombre.length >= 6) {
    nombres6Letras += nombre + ", ";
}});
Actividad5A.innerText = "Rta: " + nombres6Letras;

let nombresMInicial = "";
nombres.forEach(function(nombre){
    if (nombre[0] == "M") {
        nombresMInicial += nombre + ", ";
    }
});
Actividad5B.innerText = "Rta: " + nombresMInicial;

let nombresInicial = "";
nombres.forEach(function(nombre){
        nombresInicial += nombre[0] + ", ";
});
Actividad5D.innerText = "Rta: " + nombresInicial;

const MayusNombres = [];
nombres.forEach(function(nombre){
    MayusNombres.push(nombre.toUpperCase());
});
Actividad5E.innerText = "Rta: " + MayusNombres;

const resultadoActividad5F = nombres.filter(nombre => nombre[0] == "J");
if(resultadoActividad5F.length != 0 )
{
    Actividad5F.innerText = "Rta: Si hay un nombre que comienza con J"
}else{
    Actividad5F.innerText = "Rta: No hay un nombre que comienza con J"
}

console.log("-----Actividad 5 c-----");
console.log(nombres.sort());

// Ejercicio 6 Arcangel
// Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un
// color introducido por el usuario a través de un prompt se encuentra dentro del array o no.

let pAct6 = document.getElementById("ResultAct6");
const ColorsAct6 = ["azul", "amarillo", "rojo", "verde", "café", "rosa"]
document.getElementById("btnAct6").addEventListener("click", (e) =>{
    e.preventDefault();
    pAct6.innerText = "";
    let colorUsr = prompt("Escribir un color").toLowerCase();
    ColorsAct6.forEach(color => { if(color == colorUsr){
            pAct6.innerText = `Rta: El color ${colorUsr} existe en el array`
        }
    });
    if(pAct6.outerText == ""){
        pAct6.innerText = `Rta: El color ${colorUsr} no existe en el array`
    }
})

// Ejercicio 9

let array = document.getElementById("arr");
let p1 = document.getElementById("pos1");
let p2 = document.getElementById("pos2");
let res9 = document.getElementById("res9");
let btnInter = document.getElementById("btnInter");

const arr9 = [1,2,6,89,12,42,0,98];
array.innerText = arr9.join();

function swap(arr,i1,i2){
    let aux1 = arr[i1];
    let aux2 = arr[i2];
    arr.splice(i1, 1, aux2);
    arr.splice(i2, 1, aux1);
    array.innerText = arr.join();
}

btnInter.addEventListener("click",()=>{
    if(p1.value < 8 && p1.value > -1 && p2.value < 8 && p2.value > -1 && p2.value!=p1.value){  
        swap(arr9,p1.value,p2.value);
    }else{
        console.log("Error")
    }
})

//Ejercicio 10

let auxr = 0;
let auxg = 0;
let rj = document.getElementById("red");
let gr = document.getElementById("green");

rj.addEventListener("click",()=>{
    if(auxr == 0){
        rj.style = "background-color: red;"
        auxr = 1;
    }else{
        rj.style = "background-color: white;"
        auxr = 0;
    }
    
})

gr.addEventListener("click",()=>{
    if(auxg == 0){
        gr.style = "background-color: green;"
        auxg = 1;
    }else{
        gr.style = "background-color: white;"
        auxg = 0;
    }
    
})

// Ejercicio 11 Arcangel

//Mostrar una lista no ordenada con 4 elementos 'li'. Ocultar el que se presiona.
let erElement = document.getElementById("agua");
let doElement = document.getElementById("fuego");
let eroElement = document.getElementById("tierra");
let toElement = document.getElementById("viento");
erElement.addEventListener("mousedown", () =>{
    erElement.style = "color: white";
});
erElement.addEventListener("mouseup", () =>{
    erElement.style= "color: black";
});
doElement.addEventListener("mousedown", () =>{
    doElement.style = "color: white";
});
doElement.addEventListener("mouseup", () =>{
    doElement.style= "color: black";
});
eroElement.addEventListener("mousedown", () =>{
    eroElement.style = "color: white";
});
eroElement.addEventListener("mouseup", () =>{
    eroElement.style= "color: black";
});
toElement.addEventListener("mousedown", () =>{
    toElement.style = "color: white";
});
toElement.addEventListener("mouseup", () =>{
    toElement.style= "color: black";
});

// Ejercicio 12 Arcangel

// Confeccionar una página que muestre dos tablas con tres filas cada una. Cambiar el color de
// fondo de cada fila de la primera tabla cuando sea presionada con el mouse (en lugar de tabla
// pueden usar otra estructura que les parezca mientras siga el ejemplo)
let TablaErFila = document.getElementById("erFila");
let TablaDaFila = document.getElementById("daFila");
let TablaEraFila = document.getElementById("eraFila");
TablaErFila.addEventListener("click", () =>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    TablaErFila.style = `background-color: #${randomColor};`
})
TablaDaFila.addEventListener("click", () =>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    TablaDaFila.style = `background-color: #${randomColor};`
})
TablaEraFila.addEventListener("click", () =>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    TablaEraFila.style = `background-color: #${randomColor};`
})


//Ejercicio 15

let aref = document.getElementById("ref");
let btnGoogle = document.getElementById("btnG");
let btnYutu = document.getElementById("btnY");
let btnCurso = document.getElementById("btnA");

btnGoogle.addEventListener("click",()=>{
    aref.href = "https://www.google.com/?hl=es";
    aref.innerText = "Enlace a google";
})

btnYutu.addEventListener("click",()=>{
    aref.href = "https://www.youtube.com";
    aref.innerText = "Enlace a YouTube";
})

btnCurso.addEventListener("click",()=>{
    aref.href = "https://campus.argentinaprograma.utn.edu.ar/my/";
    aref.innerText = "Enlace a Arg Programa";
})

//Ejercicio 16

let strong1 = document.getElementById("Strong151");
let strong2 = document.getElementById("Strong152");
let strong3 = document.getElementById("Strong153");
let restaurar = document.getElementById("btnRes");

strong1.addEventListener("click",()=>{
    strong1.style.display = "none";
})

strong2.addEventListener("click",()=>{
    strong2.style.display = "none";
})

strong3.addEventListener("click",()=>{
    strong3.style.display = "none";
})

restaurar.addEventListener("click",()=>{
    strong1.style.display = "block";
    strong2.style.display = "block";
    strong3.style.display = "block";
})

// Ejercicio 17 Arcangel
// Crear una tabla con dos filas y dos columnas, cambiar el color del interior de la casilla cuando
// ingresamos con el mouse y dejarla con dicho color cuando retiramos la flecha
let PrimeraCasilla = document.getElementById("FCsllCF");
let SegundaCasilla  = document.getElementById("SCsllCF");
let TerceraCasilla  = document.getElementById("FCsllCS");
let CuartaCasilla  = document.getElementById("SCsllCS");
PrimeraCasilla.addEventListener("mouseover", () =>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    PrimeraCasilla.style = `background-color: #${randomColor};`
})
SegundaCasilla.addEventListener("mouseover", () =>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    SegundaCasilla.style = `background-color: #${randomColor};`
})
TerceraCasilla.addEventListener("mouseover", () =>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    TerceraCasilla.style = `background-color: #${randomColor};`
})
CuartaCasilla.addEventListener("mouseover", () =>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    CuartaCasilla.style = `background-color: #${randomColor};`
})

// Ejercicio 18 Arcangel
// Crear una tabla con dos filas y dos columnas, cambiar el color del interior de la casilla cuando
// ingresamos con el mouse y regresar al original cuando salimos.
let STPrimeraCasilla = document.getElementById("STFCsllCF");
let STSegundaCasilla  = document.getElementById("STSCsllCF");
let STTerceraCasilla  = document.getElementById("STFCsllCS");
let STCuartaCasilla  = document.getElementById("STSCsllCS");
STPrimeraCasilla.addEventListener("mouseover", () =>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    STPrimeraCasilla.style = `background-color: #${randomColor};`
})
STSegundaCasilla.addEventListener("mouseover", () =>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    STSegundaCasilla.style = `background-color: #${randomColor};`
})
STTerceraCasilla.addEventListener("mouseover", () =>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    STTerceraCasilla.style = `background-color: #${randomColor};`
})
STCuartaCasilla.addEventListener("mouseover", () =>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    STCuartaCasilla.style = `background-color: #${randomColor};`
})
STPrimeraCasilla.addEventListener("mouseout", () =>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    STPrimeraCasilla.style = `background-color: white`
})
STSegundaCasilla.addEventListener("mouseout", () =>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    STSegundaCasilla.style = `background-color: white`
})
STTerceraCasilla.addEventListener("mouseout", () =>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    STTerceraCasilla.style = `background-color: white`
})
STCuartaCasilla.addEventListener("mouseout", () =>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    STCuartaCasilla.style = `background-color: white;`
})

//Ejercicio 20

let link = document.getElementById("Link");

link.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("-----Ejercicio 20-----");
    console.log(link.href);
})
// Ejercicio 21 Arcangel
// Hacer que un formulario no se envíe al hacer click en "enviar", en lugar de eso mostrar un texto
// en la página que el formulario fue enviado. (Misma función que el anterior, solo que muestren
// lo que mostraron por consola en una etiqueta HTML)
document.getElementById("btnFormAct21").addEventListener("click", (e) =>{
    e.preventDefault();
    let formAct21 = document.getElementById("FormAct21");
    let MsjFormAct21 = document.getElementById("MsjFormAct21")
    formAct21.hidden = true;
    MsjFormAct21.innerText = "mensaje enviado";
})

