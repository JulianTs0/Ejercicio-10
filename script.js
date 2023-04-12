// Ejercicio 1) Genera un array de números aleatorios, ordenarlos y mostrarlo en una lista desordenada. 

const punto1 = Array(6)
    .fill()
    .map(() => Math.floor(100 * Math.random()));
console.log(punto1.sort());

const lista = document.getElementById("punto1");
punto1.forEach((item)=>{
const li = document.createElement("li");
li.innerText = item;
lista.appendChild(li);
})

// 2)
// a) Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en
// pantalla.

const punto2a = [1,2,3,4,5,6]
let i = 0
while(i<=punto2a.length-1) {
console.log(punto2a[i]); i++}


//b) Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en
// pantalla.

const punto2b = [1,2,3,4,5,6];
for (i = 0; i < punto2b.length; i++) {
console.log(punto2b[i]); }
    

// c) Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos
// en pantalla.

const punto2c = [1,2,3,4,5,6];
punto2c.forEach(function(value, index){
console.log(value);
console.log(index);})


// d) Mostrar todos los elementos dentro de un array sumándole uno a cada uno

const punto2d = [1,2,3,4,5,6]
const mas1 = punto2d.map(function(x) {
return x + 1; });
console.log(mas1)


// e) Generar una copia de un array pero con todos los elementos incrementados en 1.

const copiadepunto2d = mas1
const incremento1 = copiadepunto2d.map(function(x) {
return x + 1; });
console.log(incremento1)


// f) Calcular el promedio

const punto2f = [1,2,3,4,5,6]
const average = punto2f.reduce((a, b) => a + b) / punto2f.length;
console.log(average);



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

// 7) Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con
// solo los números pares (Recuerda que ((numero % 2) == 0) determina si un numero es
// par o no, si tiene el resultado ==0 es par, sino es impar)

function funcion (puntos) {
console.log(puntos) }
const punto7 = [1,2,3,4,5,6,7,8,9,10]
const punto7a = punto7.filter(n => n %2 ==0 )
funcion(punto7a);

// 8) Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que
// contenga sólo las palabras que empiezan con una vocal.

function funcionn (puntoss) {
console.log(puntoss) }
const punto8 = ["Tarea", "Yosha", "Alto", "Fire Emblem", "Asael", "NieR", "Yolo", "Voy", "Esoooo", "Automata"];
const punto8A = punto8.filter((vocal) => vocal.startsWith("A"));
funcionn(punto8A);

// Ejercicio 9

let array = document.getElementById("arr")
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

//Ejercicio 20

let link = document.getElementById("Link");

link.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("-----Ejercicio 20-----");
    console.log(link.href);
})
