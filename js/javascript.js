function abrirMenu(){
    document.getElementById('menu').innerHTML='<div class="pags"><a href="index.html">Inicio</a></div> <div class="pags"><a href="juegos.html">Juegos</a></div> <div class="pags"><a href="emuladores.html">Emuladores</a></div> <div class="pags"><a href="iniciales.html">Pokémon iniciales</a></div> <div class="pags"><a href="peliculas.html">Películas y episodios</a></div>';
    document.getElementById('cabecera').innerHTML='<div class="m1"><img class="logo" src="imagenes/logo.PNG"></div> <div id="I1" class="m2"><h1>Juegos, películas y episodios</h1></div>';
}
function pieDePagina(){
    document.getElementById('piepagina').innerHTML='- @David Beamonde Salinas 2022-23'
}

function ampliar(reference){
    document.getElementById('carteleras').style.zIndex='-1';
    document.getElementById('velo').style.zIndex='1';
    document.getElementById('capaimagen').style.zIndex='2';
    mifoto.src = reference;
}

function volver(){
    document.getElementById('carteleras').style.zIndex='1';
    document.getElementById('velo').style.zIndex='-1';
    document.getElementById('capaimagen').style.zIndex='-2';
}

function siguiente(){
    let text = document.getElementById('mifoto').src;
    let result = text.substring(text.lastIndexOf('.PNG')-2, text.lastIndexOf('.PNG'));
    if(isNaN(result)){
        result = text.substring(text.lastIndexOf('.PNG')-1, text.lastIndexOf('.PNG'));
    }
    let num =parseInt(result);
    num += 1;
    if(num >24){
        num =1;
    }
    let raiz = "imagenes/peliculas/pokemon"+num+".PNG";
    document.getElementById('mifoto').src=raiz;
}

function anterior(){
    let text = document.getElementById('mifoto').src;
    let result = text.substring(text.lastIndexOf('.PNG')-2, text.lastIndexOf('.PNG'));
    if(isNaN(result)){
        result = text.substring(text.lastIndexOf('.PNG')-1, text.lastIndexOf('.PNG'));
    }
    let num =parseInt(result);
    num -= 1;
    if(num <1){
        num =24;
    }
    let raiz = "imagenes/peliculas/pokemon"+num+".PNG";
    document.getElementById('mifoto').src=raiz;
}