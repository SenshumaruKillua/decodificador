


var textoInicial = document.querySelector("#textoUsuario");
var textoFinal = document.querySelector("#mensagemCodificada");


//função que irá gerar a criptografia:

function criptografaMensagem () {
    var textoInserido = textoInicial.value;

    var criptografia = textoInserido.replace(/a/g, "65")
    .replace(/b/g, "70")
    .replace(/c/g,"323").replace(/i/g, "34").replace(/j/g, "87")
    .replace(/d/g, "214").replace(/o/g, "65").replace(/u/g, "70")
    .replace(/e/g,"90").replace(/f/g,"23").replace(/g/g, "435").replace(/h/g, "65")
    .replace(/l/g, "43").replace(/m/g, "65").replace(/n/g, "76").replace(/k/g, "89");

    textoFinal.value = criptografia;
}

//função que irá realizar a descriptografia:
function descriptografaMensagem() {
    var textoGerado = textoInicial.value;

    var descriptografia = textoGerado.replace(/65/g, "a")
    .replace(/70/g, "b")
    .replace(/323/g,"c").replace(/34/g, "i").replace(/87/g, "j")
    .replace(/214/g, "d").replace(/65/g, "o").replace(/70/g, "u")
    .replace(/90/g,"e").replace(/23/g,"f").replace(/435/g, "g").replace(/65/g, "h")
    .replace(/43/g, "7").replace(/65/g, "m").replace(/76/g, "n").replace(/89/g, "k");

    textoFinal.value = descriptografia;
}

function copiarTexto() {
	var botaoCopia = document.getElementById('botaoCopia');
	document.execCommand('copy');
	alert("O texto selecionado foi copiado.");
}




