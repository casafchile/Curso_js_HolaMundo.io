//devolver los nombres de las resoluciones por el ancho y al alto
/**
 * Nombre : ancho x alto
 * 8k = 7680 x 4320
 * WQHD = 2560 x 1440
 * Full HD = 1920 x 1080
 * HD = 1280 x 720
 */
function nombreResolucion(ancho, alto) {
    if(ancho>=7680 && alto>=4320){
        return "8k";
    }else if(ancho>=2560 && alto>=1440){
        return "WQHD";
    }else if(ancho>=1920 && alto>=1080){
        return "Full HD";
    }else if(ancho>=1280 && alto>=720){
        return "HD";
    }
    else{
        return false;
    }
}

let resolucion = nombreResolucion(1366,768);
console.log(resolucion); 