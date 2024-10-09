function moeda(valor){
    return valor.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
}

//console.log(moeda(100.99));

// saida formatado

function stringImg(imgFomart){
    return imgFomart.replace(/\w\.jpg/gi, 'W.jpg');
}

console.log(stringImg("img.jpg"))
