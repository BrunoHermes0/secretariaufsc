
const mensagens = []; // Simulação de banco de dados

function adicionarMensagem() {
    const identificador = document.getElementById("identificador").value;
    const conteudo = document.getElementById("conteudo").value;

    mensagens.push({ identificador, conteudo });

    exibirMensagens();
}

/*const mensagens = JSON.parse(localStorage.getItem('mensagens')) || [];

function adicionarMensagem() {
    const identificador = document.getElementById("identificador").value;
    const conteudo = document.getElementById("conteudo").value;
 
    mensagens.push({ identificador, conteudo });
 
    // Salve as mensagens atualizadas no localStorage
    localStorage.setItem('mensagens', JSON.stringify(mensagens));
 
    exibirMensagens();
}
*/
function exibirMensagens() {
    const mensagensDiv = document.getElementById("mensagens");
    mensagensDiv.innerHTML = "";

    for (const mensagem of mensagens) {
        const mensagemDiv = document.createElement("div");
        mensagemDiv.innerHTML = `<strong>${mensagem.identificador}:</strong> ${mensagem.conteudo}`;
        mensagensDiv.appendChild(mensagemDiv);
    }
}

document.getElementById("adicionar").addEventListener("click", adicionarMensagem);

// Recuperar parâmetros da URL (simulação)
const urlParams = new URLSearchParams(window.location.search);
const idParam = urlParams.get('id');

if (idParam) {
    const mensagemEncontrada = mensagens.find(mensagem => mensagem.identificador === idParam);
    if (mensagemEncontrada) {
        document.getElementById("identificador").value = mensagemEncontrada.identificador;
        document.getElementById("conteudo").value = mensagemEncontrada.conteudo;
    }
}
