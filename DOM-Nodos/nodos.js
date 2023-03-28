/*crear una etiqueta 
 let h1 = document.createElement("h1");
//crearle el texto  ala etiqueta
 let texto = document.createTextNode("Titulo 1");
//Agregar el texto ala etiqueta
h1.appendChild(texto);
//selecionar el body
let body = document.body;
//agregar una etiqueta h1 al cuerpo de la pagina
body.appendChild(h1);
//crear un enlace
let a = document.createElement("a");
let txtA = document.createTextNode("Ir a youtube");
a.appendChild(txtA);
//agregar atributos
a.setAttribute("href","http://youtube.com");

//selecionar etiquetas del navegador
var H1Etiqueta = document.querySelector("h1");
h1.appendChild(a);
//eliminar una etiqueta
a.remove();
//agregar estilos a etiquetas
H1Etiqueta.style.color = "red";
H1Etiqueta.style.backgroundColor = "black";
*/



let titulo = document.querySelector("p> span");
titulo.style.fontSize = "50px";
titulo.style.color = "chocolate";

//Para selecionar varias etiquetas
//se usa para queryselectorAll()
let ps = document.querySelectorAll(".ps");
//ps[1].style.color = "red";
for(let x=0; x < ps.length; x++){
    ps[x].style.color ="red"
}
console.log(ps); 

//crear un enlace
let a = document.createElement("a");
let txtA = document.createTextNode("Ir a youtube");
a.appendChild(txtA);
//agregar atributos
a.setAttribute("href","http://youtube.com");
a.setAttribute("target","_blank");
//selecionar una etiqueta de referencia
let referenciaH1 = document.querySelector("h1");
//ubicar etiqueta de enlace  deacuerdo a ala etiqueta de referencia
referenciaH1.insertAdjacentElement("afterend",a);