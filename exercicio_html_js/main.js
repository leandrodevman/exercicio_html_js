
function validarFormulario() {
    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);

if (isNaN(campoA) || isNaN(campoB)) {
    exibirMensagem("Por favor, insira valores numéricos em ambos os campos.", "negativa");
    return false;
    }

if (campoB > campoA) {
    exibirMensagem("Campos preenchidos corretamente! Campo B é maior que Campo A.", "positiva");
    } else {
    exibirMensagem("Campos preenchidos incorretamente! Campo B deve ser maior que Campo A.", "negativa");
    }
    return false;
}

function exibirMensagem(mensagem, tipo) {
    var mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerText = mensagem;
    mensagemDiv.className = "mensagem " + tipo;
}