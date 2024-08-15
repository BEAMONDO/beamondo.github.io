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