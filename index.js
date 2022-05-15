window.onload=inicio;
let f;
function inicio(){
    document.querySelector(".hamburguesa").onclick=hamburguesa;

    videos.forEach(valor =>
        document.querySelector(".bloque").insertAdjacentHTML("beforeend",
        `<a href="${valor["enlace"]}" target='_blank'><article>
            <div class="imagen">
              <img src="${valor["imagen"]}"/>
            </div>
            <div class="titulo">
            ${valor["titulo"]}
            </div>
        </article></a>`))   
    videos.forEach(valor =>
        document.querySelector(".botones").insertAdjacentHTML("beforeend",
        `<article class="lyrics" >
            <div class="boton">${valor["titulo"]}</div>
            <iframe src="${valor['letra']}" frameborder="0"></iframe>
            </article>`))
    for(let k=0;k<videos.length;k++){   
     f=document.querySelectorAll(".lyrics")[k].onclick=letra;
    } 
}

function letra(){
        e=this.querySelector("iframe").style
    if (e.display=="none") {
        e.display="block";
    } else {
        e.display="none";
    }
}
function hamburguesa(){
    let e=document.querySelector(".enlaces");
    let propiedades=window.getComputedStyle(e);
    if (propiedades["display"]=="none") {
        e.classList.add("enlacesjs");
    } else {
        e.classList.remove("enlacesjs");
    }
}