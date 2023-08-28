
const mensagens = []; // Simulação de banco de dados

// Função para adicionar mensagens
function adicionarMensagem() {
    const identificador = document.getElementById("identificador").value;
    const conteudo = document.getElementById("conteudo").value;

    mensagens.push({ identificador, conteudo });

    exibirMensagens();
}
// Função para exibir as mensagens
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
