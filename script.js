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
