document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    let campoA = parseFloat(document.getElementById("camp-a").value);
    let campoB = parseFloat(document.getElementById("camp-b").value);
    let mensagem = document.getElementById("mensagemFinal");

    // Verifica se os valores são números válidos
    if (isNaN(campoA) || isNaN(campoB)) {
        mensagem.style.backgroundColor = "red";
        mensagem.style.color = "white";
        mensagem.textContent = "Erro: Ambos os campos devem conter números válidos.";
        return;
    }
    
    if (campoB > campoA) {
        mensagem.style.backgroundColor = "green";
        mensagem.style.color = "white";
        mensagem.textContent = "Formulário válido! O número B é maior que o número A.";
    } else {
        mensagem.style.backgroundColor = "red";
        mensagem.style.color = "white";
        mensagem.textContent = "Erro: O número B deve ser maior que o número A.";
    }

    setTimeout(() => {
        formulario.reset()
        mensagem.textContent = "";
        mensagem.style.backgroundColor = "transparent";
    }, 2000);
});
